import { StyleSheet, Text } from "react-native";
import { colors } from "../../constants/colors";

export default function Title({ children, style = {} }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    textAlign: "center",
    color: colors.white,
    borderWidth: 2,
    borderColor: colors.accent500,
    padding: 12,
  },
});
