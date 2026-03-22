import { Alert, FlatList, StyleSheet, View } from "react-native";
import Title from "../components/ui/title";
import { useLayoutEffect, useRef, useState } from "react";
import { generateRandomNumber } from "../utils/generate-random-number";
import NumberContainer from "../components/game/number-container";
import PrimaryButton from "../components/ui/primary-button";
import Card from "../components/ui/card";
import InstructionsText from "../components/ui/instructions-text";
import Ionicons from "@expo/vector-icons/Ionicons";
import GuessLogItem from "../components/game/guess-log-item";

export default function GameScreen({ userNumber, onGameOver }) {
  const minBoundary = useRef(1);
  const maxBoundary = useRef(100);
  const initialGuess = generateRandomNumber(minBoundary.current, maxBoundary.current, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useLayoutEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
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
    setGuessRounds((prev) => [newRandomNumber, ...prev]);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionsText style={styles.InstructionsText}>Higher or Lower?</InstructionsText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => handleNextGuess("lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => handleNextGuess("higher")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => <GuessLogItem guess={item} roundNumber={index + 1} />}
          keyExtractor={(item, index) => item.toString() + index}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  InstructionsText: {
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
