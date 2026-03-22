import { StyleSheet, View } from "react-native";
import { colors } from "../../constants/colors";

export default function Card({ children, style = {} }) {
  return <View style={[styles.inputContainer, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 36,
    backgroundColor: colors.primary800,
    borderRadius: 8,
    // shadow for android only
    elevation: 4,
    // for ios
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
});
