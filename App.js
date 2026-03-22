import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/start-game-screen";
import GameScreen from "./screens/game-screen";
import GameOverScreen from "./screens/game-over-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "./constants/colors";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [numRounds, setNumRounds] = useState(0);
  const [loaded, error] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  const handlePickNumber = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  const handleGameOver = (numRounds) => {
    setGameOver(true);
    setNumRounds(numRounds);
  };

  const handleRestartGame = () => {
    setUserNumber(null);
    setGameOver(false);
    setNumRounds(0);
  };

  let screen = <StartGameScreen onPickNumber={handlePickNumber} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />;
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen userNumber={userNumber} onRestart={handleRestartGame} numRounds={numRounds} />
    );
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={[colors.primary700, colors.accent500]}>
      <ImageBackground
        source={require("./assets/images/dices-background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaProvider>
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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
