import React from "react";
import { View, Text } from "react-native";
import Input from "../../input";
import { style } from "./style";
import { useMutation } from "react-query";
import { SIGN_UP } from "../../../queries";
import { Formik } from "formik";
import {
  signUpInitialValues,
  signUpValidationSchema,
} from "../../../constants";
import { ScrollView, TouchableOpacity } from "react-native";

const SignUp = ({ navigation }) => {
  const { mutate: signUp } = useMutation(SIGN_UP);
  const handleClick = async (values, resetForm) => {
    await signUp(
      {
        name: values.name,
        email: values.email,
        phone_number: values.phoneNumber,
        password: values.password,
        cpassword: values.confirm_password,
      },
      {
        onSuccess: () => {
          navigation.replace("home");
          resetForm();
        },
        onError: () => {
          alert("This email is already taken.");
        },
      }
    );
  };

  return (
    <ScrollView style={style?.container}>
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
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};
export { SignUp };
