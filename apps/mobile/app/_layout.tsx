import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css"


export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: "KOMPLEX" }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
