import { Alert, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/title";
import { useEffect, useRef, useState } from "react";
import { generateRandomNumber } from "../utils/generate-random-number";
import NumberContainer from "../components/game/number-container";
import PrimaryButton from "../components/ui/primary-button";

export default function GameScreen({ userNumber, onGameOver }) {
  const minBoundary = useRef(1);
  const maxBoundary = useRef(100);
  const initialGuess = generateRandomNumber(minBoundary.current, maxBoundary.current, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const handleNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      return Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
    }

    if (direction === "lower") {
      maxBoundary.current = currentGuess;
    } else if (direction === "higher") {
      minBoundary.current = currentGuess + 1;
    }
    const newRandomNumber = generateRandomNumber(
      minBoundary.current,
      maxBoundary.current,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => handleNextGuess("lower")}>LOWER</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => handleNextGuess("higher")}>GREATER</PrimaryButton>
          </View>
        </View>
      </View>
      <View>
        <Text>{"{LOG ROUNDS}"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
