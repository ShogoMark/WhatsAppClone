import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="landing" options={{ headerShown: false }}/>
      <Stack.Screen name="AgreeScreen" options={{ headerShown: false }}/>
      <Stack.Screen name="auth/signIn" options={{ headerShown: false }}/>
      <Stack.Screen name="auth/codeScreen" options={{ headerShown: false }}/>
      <Stack.Screen name="auth/uploadImageName" options={{ headerShown: false }}/>
      <Stack.Screen name="chat/chatList" options={{ headerShown: false }}/>
      <Stack.Screen name="status/statusListDisplay" options={{ headerShown: false }}/>
      <Stack.Screen name="callScreen" options={{ headerShown: false }}/>
      <Stack.Screen name="chat/chatScreen" options={{ headerShown: false }}/>
    </Stack>
  );
}
