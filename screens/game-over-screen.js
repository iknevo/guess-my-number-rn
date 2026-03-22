import { Button, Text, View } from "react-native";

export default function GameOverScreen({ onRestart }) {
  return (
    <View>
      <Text>game over</Text>
      <Button title="hhhh" onPress={onRestart} />
    </View>
  );
}
