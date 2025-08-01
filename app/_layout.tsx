import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import "../global.css";

export default function RootLayout() {
  return (
    <View className="flex-1 bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <StatusBar style="dark" backgroundColor="#ffffff" />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Portfolio",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="about"
          options={{
            title: "About",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="contact"
          options={{
            title: "Contact",
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
}
