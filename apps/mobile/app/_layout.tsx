import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";


export default function RootLayout() {
  return (
    <View style={styles.root}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "" }} />
      </Stack>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
