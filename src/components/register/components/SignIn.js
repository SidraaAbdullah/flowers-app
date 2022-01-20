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

const SignIn = () => {
  const navigation = useNavigation();
  const { mutate: signIn } = useMutation(SIGN_IN);
  const handleLogin = async (values) => {
    await signIn(
      {
        email: values.email,
        password: values.password,
      },
      {
        onSuccess: async (res) => {
          navigation.replace("home");
          axios.defaults.headers.common.Authorization = `bearer ${res.data?.access_token}`;
          await AsyncStorage.setItem("User", JSON.stringify(res.data));
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

            <TouchableOpacity
              onPress={handleSubmit}
              style={{
                marginVertical: 10,
                backgroundColor: "black",
                borderRadius: 60,
                marginVertical: 5,
                height: 43,
              }}
            >
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontSize: 14,
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontFamily: "ProximaNovaSemiBold",
                  color: "white",
                  paddingVertical: 12,
                }}
              >
                LOG IN
              </Text>
            </TouchableOpacity>
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
