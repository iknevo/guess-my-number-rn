import {
  Alert,
  Button,
  InputAccessoryView,
  Keyboard,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import PrimaryButton from "../components/ui/primary-button";
import { useState } from "react";
import { colors } from "../constants/colors";
import Title from "../components/ui/title";
import Card from "../components/ui/card";
import InstructionsText from "../components/ui/instructions-text";

const inputAccessoryViewID = "doneButton";

export default function StartGameScreen({ onPickNumber }) {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (input) => {
    setUserInput(input);
  };

  const handleReset = () => {
    setUserInput("");
  };

  const handleConfirm = () => {
    const inputNumber = parseInt(userInput);
    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
      Alert.alert("Invalid Number!", "Input has to be a number between 1 and 99.", [
        { text: "Okay", onPress: handleReset, style: "destructive" },
      ]);
      return;
    }
    onPickNumber(inputNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title style={{ borderRadius: 8 }}>Guess My Number</Title>
      <Card>
        <InstructionsText>Enter a Number</InstructionsText>
        <TextInput
          style={styles.textInput}
          value={userInput}
          onChangeText={handleUserInput}
          maxLength={2}
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
          inputAccessoryViewID={inputAccessoryViewID}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
          </View>
        </View>

        <InputAccessoryView nativeID={inputAccessoryViewID}>
          <Button title="Done" onPress={Keyboard.dismiss} color={colors.white} />
        </InputAccessoryView>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    paddingHorizontal: 24,
  },
  textInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    color: colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
