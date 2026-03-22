import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/title";
import { colors } from "../constants/colors";
import PrimaryButton from "../components/ui/primary-button";

export default function GameOverScreen({ onRestart, numRounds, userNumber }) {
  return (
    <View style={styles.screenContainer}>
      <Title style={{ borderRadius: 8 }}>game over</Title>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/images/success.png")} style={styles.image} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{numRounds}</Text> rounds to guess the
        number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onRestart} style={{ alignSelf: "center" }}>
        Start New Game
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  imageContainer: {
    borderRadius: "50%",
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: "hidden",
    alignSelf: "center",
    marginVertical: 36,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: colors.primary500,
  },
});
