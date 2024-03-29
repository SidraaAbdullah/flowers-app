import React from "react";
import { View, Text } from "react-native";
import Input from "../../input";
import { style } from "./style";
import { useMutation } from "react-query";
import { ADD_ADDRESS, SIGN_UP } from "../../../queries";
import { Formik } from "formik";
import {
  signUpInitialValues,
  signUpValidationSchema,
} from "../../../constants";
import { ScrollView, TouchableOpacity } from "react-native";
import { CommonButton } from "../../buttons";
import useStorage from "../../../hooks/useStorage";
import axios from "axios";

const SignUp = ({ navigation }) => {
  const [addressObject] = useStorage("ca_location", { isObject: true });
  const { mutate: signUp } = useMutation(SIGN_UP, {
    onSuccess: async (res) => {
      axios.defaults.headers.common.Authorization = `bearer ${res.data?.access_token}`;
      if (!addressObject?._id) await ADD_ADDRESS(addressObject);
    },
  });
  const handleClick = async (values, resetForm) => {
    await signUp(
      {
        name: values.name,
        email: values.email,
        phone_number: values.phoneNumber,
        password: values.password,
      },
      {
        onSuccess: () => {
          navigation.replace("signUp");
          resetForm();
        },
        onError: (res) => {
          alert(res.message);
        },
      }
    );
  };

  return (
    <ScrollView style={style?.container} showsVerticalScrollIndicator={false}>
      <Formik
        initialValues={signUpInitialValues}
        validationSchema={signUpValidationSchema}
        onSubmit={(values, { resetForm }) => handleClick(values, resetForm)}
      >
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
          handleSubmit,
        }) => (
          <View style={{ marginBottom: 20 }}>
            <Input
              label="Name"
              iconName="person"
              placeholder="Name"
              name={"name"}
              value={values["name"]}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              error={errors["name"]}
              touched={touched["name"]}
            />
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
              label="Phone Number"
              iconName="call"
              keyboardType="numeric"
              placeholder="Phone Number"
              name={"phoneNumber"}
              value={values["phoneNumber"]}
              onChangeText={handleChange("phoneNumber")}
              onBlur={handleBlur("phoneNumber")}
              error={errors["phoneNumber"]}
              touched={touched["phoneNumber"]}
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
            <Input
              label="Confirm Password"
              iconName="lock-closed"
              placeholder="Confirm Password"
              secureTextEntry={true}
              name={"confirm_password"}
              value={values["confirm_password"]}
              onChangeText={handleChange("confirm_password")}
              onBlur={handleBlur("confirm_password")}
              error={errors["confirm_password"]}
              touched={touched["confirm_password"]}
            />
            <View style={{ marginVertical: 10 }}>
              <CommonButton onPress={handleSubmit} text="SIGN UP" />
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};
export { SignUp };
