import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/start-game-screen";

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <StartGameScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
});
