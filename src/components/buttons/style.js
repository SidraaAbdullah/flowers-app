import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.black,
    borderRadius: 60,
    width: "100%",
    marginVertical: 10,
    borderColor: Colors.black,
  },
  text: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    color: Colors.white,
    textAlign: "center",
  },
});
