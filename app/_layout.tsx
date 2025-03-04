import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="story/index" options={{ title: "List Story", headerShown: true }} />
    </Stack>
  );
}
