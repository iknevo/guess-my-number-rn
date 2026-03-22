import { Text, View, Pressable, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default function PrimaryButton({ children, onPress, style = {} }) {
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: colors.primary600 }}
        style={({ pressed }) => [styles.buttonInnerContainer, pressed && styles.pressed]}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    color: colors.white,
  },
  pressed: {
    opacity: 0.75,
  },
});
