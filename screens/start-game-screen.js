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
    <View style={styles.inputContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
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
