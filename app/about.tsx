import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import "../global.css";

export default function AboutPage() {
  const skills = [
    { name: "React Native", level: 95, color: "#61DAFB" },
    { name: "JavaScript", level: 90, color: "#F7DF1E" },
    { name: "Python", level: 85, color: "#3776AB" },
    { name: "Node.js", level: 88, color: "#339933" },
    { name: "UI/UX Design", level: 92, color: "#FF6B6B" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 pt-8">
          {/* About Hero */}
          <View className="items-center mb-8">
            <View className="items-center justify-center w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
              <Text className="text-5xl">👨‍💻</Text>
            </View>
            <Text className="mb-2 text-2xl font-bold text-center text-black">
              About Me
            </Text>
            <Text className="leading-relaxed text-center text-black">
              Passionate developer with expertise in creating innovative digital
              solutions
            </Text>
          </View>

          {/* Skills Section */}
          <View className="mb-8">
            <Text className="mb-6 text-xl font-bold text-black">
              Skills & Expertise
            </Text>
            {skills.map((skill, index) => (
              <View key={index} className="mb-4">
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="font-semibold text-black">{skill.name}</Text>
                  <Text className="text-black">{skill.level}%</Text>
                </View>
                <View className="h-2 overflow-hidden bg-gray-200 rounded-full">
                  <View
                    className="h-2 rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                    }}
                  />
                </View>
              </View>
            ))}
          </View>

          {/* Experience */}
          <View className="mb-8">
            <Text className="mb-6 text-xl font-bold text-black">
              Experience
            </Text>
            <View className="space-y-4">
              <View className="p-6 border border-gray-100 bg-white/80 backdrop-blur-sm rounded-2xl">
                <Text className="mb-1 text-lg font-semibold text-black">
                  Senior Developer
                </Text>
                <Text className="mb-2 text-sm text-blue-600">
                  TechCorp • 2022-Present
                </Text>
                <Text className="leading-relaxed text-black">
                  Leading development teams and architecting scalable solutions
                </Text>
              </View>
              <View className="p-6 border border-gray-100 bg-white/80 backdrop-blur-sm rounded-2xl">
                <Text className="mb-1 text-lg font-semibold text-black">
                  Full-Stack Developer
                </Text>
                <Text className="mb-2 text-sm text-blue-600">
                  StartupXYZ • 2020-2022
                </Text>
                <Text className="leading-relaxed text-black">
                  Built and maintained multiple web and mobile applications
                </Text>
              </View>
            </View>
          </View>

          {/* Education */}
          <View className="mb-8">
            <Text className="mb-6 text-xl font-bold text-black">Education</Text>
            <View className="p-6 border border-gray-100 bg-white/80 backdrop-blur-sm rounded-2xl">
              <Text className="mb-1 text-lg font-semibold text-black">
                Computer Science
              </Text>
              <Text className="mb-2 text-sm text-blue-600">
                University of Technology • 2016-2020
              </Text>
              <Text className="leading-relaxed text-black">
                Bachelor's degree with focus on software engineering and web
                development
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="px-6 py-4 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
        <View className="flex-row justify-around">
          <TouchableOpacity
            onPress={() => router.push("/")}
            className="items-center opacity-60"
          >
            <Text className="mb-1 text-2xl">🏠</Text>
            <Text className="text-xs font-medium text-gray-600">Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/about")}
            className="items-center opacity-100"
          >
            <Text className="mb-1 text-2xl">👤</Text>
            <Text className="text-xs font-medium text-blue-600">About</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/contact")}
            className="items-center opacity-60"
          >
            <Text className="mb-1 text-2xl">📞</Text>
            <Text className="text-xs font-medium text-gray-600">Contact</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
