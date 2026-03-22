import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";

export default function NumberContainer({ children, style = {} }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.accent500,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
