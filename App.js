import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/start-game-screen";
import GameScreen from "./screens/game-screen";
import { LinearGradient } from "expo-linear-gradient";

import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const handlePickNumber = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  return (
    <LinearGradient style={styles.rootScreen} colors={[colors.primary700, colors.accent500]}>
      <ImageBackground
        source={require("./assets/images/dices-background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaProvider>
          <SafeAreaView style={styles.rootScreen}>
            {userNumber ? (
              <GameScreen userNumber={userNumber} />
            ) : (
              <StartGameScreen onPickNumber={handlePickNumber} />
            )}
          </SafeAreaView>
        </SafeAreaProvider>
        <StatusBar style="light" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.08,
  },
});
