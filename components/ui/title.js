import { StyleSheet, Text } from "react-native";
import { colors } from "../../constants/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.white,
    borderWidth: 2,
    borderColor: colors.accent500,
    padding: 12,
  },
});
