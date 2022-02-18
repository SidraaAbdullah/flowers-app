import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    borderRadius: 60,
    width: "100%",
    marginVertical: 5,
    height: 43,
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 14,
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "ProximaNovaSemiBold",
    marginBottom: -45,
  },
  rightIcon: {
    position: "absolute",
    backgroundColor: "white",
    right: 0,
    bottom: 0,
    height: 43,
    width: 43,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderColor: "white",
  },
});
