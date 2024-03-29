import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style } from "./style";
import Input from "../../input";
import { ADD_ADDRESS, SIGN_IN } from "../../../queries";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMutation } from "react-query";
import { Formik } from "formik";
import {
  signInInitialValues,
  signInValidationSchema,
} from "../../../constants";
import { CommonButton } from "../../buttons";
import { addUser } from "../../../redux/actions/User";
import { useDispatch } from "react-redux";
import useStorage from "../../../hooks/useStorage";
import { showToast } from "../../../util/toast";

const SignIn = ({ route }) => {
  const [addressObject] = useStorage("ca_location", { isObject: true });
  const navigation = useNavigation();
  const { cart } = route?.params || {};
  const dispatch = useDispatch();
  const { mutate: signIn, isLoading: signInLoading } = useMutation(SIGN_IN, {
    onSuccess: async (res) => {
      axios.defaults.headers.common.Authorization = `bearer ${res.data?.access_token}`;
      if (!addressObject?._id) await ADD_ADDRESS(addressObject);
    },
  });

  const handleAddUser = (item) => {
    dispatch(addUser(item));
  };

  const handleLogin = async (values) => {
    await signIn(
      {
        email: values.email,
        password: values.password,
      },
      {
        onSuccess: async (res) => {
          await AsyncStorage.setItem("logIn", JSON.stringify(res.data));
          handleAddUser(res.data);
          if (cart) {
            navigation.replace("home", { cart });
          } else {
            navigation.replace("home");
          }
        },
        onError: (res) => {
          showToast(res.response?.data?.message, "danger");
        },
      }
    );
  };

  return (
    <View style={style.container}>
      <Formik
        initialValues={signInInitialValues}
        validationSchema={signInValidationSchema}
        onSubmit={(values, { resetForm }) => handleLogin(values, resetForm)}
      >
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
          handleSubmit,
        }) => (
          <View>
            <Input
              label="Email"
              iconName="mail"
              placeholder="Email"
              keyboardType="email-address"
              name={"email"}
              value={values["email"]}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors["email"]}
              touched={touched["email"]}
            />
            <Input
              label="Password"
              iconName="lock-closed"
              placeholder="Password"
              secureTextEntry={true}
              name={"password"}
              value={values["password"]}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors["password"]}
              touched={touched["password"]}
            />
            <View style={{ marginVertical: 10 }}>
              <CommonButton
                loading={signInLoading}
                onPress={() => handleSubmit()}
                text=" LOG IN"
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("forgotPassword")}
            >
              <Text style={style.text}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};
export { SignIn };
