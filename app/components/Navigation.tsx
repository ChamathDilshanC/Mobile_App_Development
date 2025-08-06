import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface NavigationProps {
  currentPage?: "home" | "about" | "contact";
}

export default function Navigation({ currentPage = "home" }: NavigationProps) {
  return (
    <View className="px-6 py-4 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
      <View className="flex-row justify-around">
        <TouchableOpacity
          onPress={() => router.push("/")}
          className={`items-center ${currentPage === "home" ? "opacity-100" : "opacity-60"}`}
        >
          <Text className="mb-1 text-2xl">🏠</Text>
          <Text
            className={`text-xs font-medium ${
              currentPage === "home" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/about")}
          className={`items-center ${currentPage === "about" ? "opacity-100" : "opacity-60"}`}
        >
          <Text className="mb-1 text-2xl">👤</Text>
          <Text
            className={`text-xs font-medium ${
              currentPage === "about" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            About
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/contact")}
          className={`items-center ${currentPage === "contact" ? "opacity-100" : "opacity-60"}`}
        >
          <Text className="mb-1 text-2xl">📞</Text>
          <Text
            className={`text-xs font-medium ${
              currentPage === "contact" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            Contact
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
