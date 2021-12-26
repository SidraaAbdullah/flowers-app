import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    borderRadius: 60,
    width: "100%",
    marginVertical: 5,
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 14,
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "ProximaNovaSemiBold",
  },
  rightIcon: {
    position: "absolute",
    backgroundColor: "white",
    right: 0,
    bottom: 0,
    height: 41,
    width: 41,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderColor: "white",
  },
});
