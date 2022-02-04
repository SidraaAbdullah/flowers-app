import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { style } from "./style";
import Input from "../../input";
import { SIGN_IN } from "../../../queries";
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

const SignIn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { mutate: signIn } = useMutation(SIGN_IN);

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
          axios.defaults.headers.common.Authorization = `bearer ${res.data?.access_token}`;
          await AsyncStorage.setItem("logIn", JSON.stringify(res.data));
          handleAddUser(res.data);
          navigation.replace("home");
        },
        onError: () => {
          alert("Please enter correct email or password");
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
              <CommonButton onPress={() => handleSubmit()} text=" LOG IN" />
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
