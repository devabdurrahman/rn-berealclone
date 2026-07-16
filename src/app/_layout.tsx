import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Stack, useRouter, Redirect } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </AuthProvider>
  );
}