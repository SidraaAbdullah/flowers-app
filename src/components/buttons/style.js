import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  button: {
    borderRadius: 60,
    width: "100%",
    marginVertical: 5,
    borderColor: Colors.black,
  },
  text: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 14,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
