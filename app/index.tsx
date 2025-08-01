import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import "../global.css";

const { width, height } = Dimensions.get("window");

export default function HomePage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "🛒",
      description: "Full-stack e-commerce solution with React and Node.js",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile Development",
      image: "🏦",
      description: "Secure banking application with biometric authentication",
    },
    {
      id: 3,
      title: "AI Chat Assistant",
      category: "Machine Learning",
      image: "🤖",
      description: "Intelligent chatbot powered by natural language processing",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View className="px-6 pt-8">
          <View className="p-8 mb-8 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl">
            <View className="items-center">
              <View className="items-center justify-center w-24 h-24 mb-6 rounded-full bg-white/20">
                <Text className="text-4xl">♥️</Text>
              </View>
              <Text className="mb-2 text-3xl font-bold text-center text-black">
                Chamath Dilshan
              </Text>
              <Text className="mb-4 text-lg text-center text-black/90">
                Full-Stack Developer & UI/UX Designer
              </Text>
              <Text className="leading-relaxed text-center text-black/80">
                Creating beautiful, functional, and user-centered digital
                experiences
              </Text>
            </View>
          </View>

          {/* Stats Section */}
          <View className="flex-row justify-between mb-8">
            <View className="flex-1 p-4 mr-3 border bg-black/10 backdrop-blur-sm rounded-2xl border-black/20">
              <Text className="text-2xl font-bold text-black">50+</Text>
              <Text className="text-sm text-black/80">Projects</Text>
            </View>
            <View className="flex-1 p-4 ml-3 border bg-white/10 backdrop-blur-sm rounded-2xl border-black/20">
              <Text className="text-2xl font-bold text-black">5+</Text>
              <Text className="text-sm text-black/80">Years Exp</Text>
            </View>
          </View>

          {/* Featured Projects */}
          <View className="mb-8">
            <Text className="mb-6 text-2xl font-bold text-black">
              Featured Projects
            </Text>
            {projects.map((project) => (
              <View
                key={project.id}
                className="p-6 mb-4 border border-gray-100 bg-yellow-50/80 backdrop-blur-sm rounded-2xl"
              >
                <View className="flex-row items-center mb-4">
                  <View className="items-center justify-center w-16 h-16 mr-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                    <Text className="text-2xl">{project.image}</Text>
                  </View>
                  <View className="flex-1">
                    <Text className="text-lg font-semibold text-black">
                      {project.title}
                    </Text>
                    <Text className="text-sm font-medium text-blue-600">
                      {project.category}
                    </Text>
                  </View>
                </View>
                <Text className="leading-relaxed text-black">
                  {project.description}
                </Text>
              </View>
            ))}
          </View>

          {/* CTA Section */}
          <View className="p-6 mb-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl">
            <Text className="mb-2 text-xl font-bold text-center text-white">
              Ready to Start Your Project?
            </Text>
            <Text className="mb-4 text-center text-white/90">
              Let's create something amazing together
            </Text>
            <TouchableOpacity
              className="py-3 border bg-white/20 backdrop-blur-sm rounded-xl border-white/30"
              onPress={() => router.push("/contact")}
            >
              <Text className="font-semibold text-center text-white">
                Get In Touch
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="px-6 py-4 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
        <View className="flex-row justify-around">
          <TouchableOpacity
            onPress={() => router.push("/")}
            className="items-center opacity-100"
          >
            <Text className="mb-1 text-2xl">🏠</Text>
            <Text className="text-xs font-medium text-blue-600">Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/about")}
            className="items-center opacity-60"
          >
            <Text className="mb-1 text-2xl">👤</Text>
            <Text className="text-xs font-medium text-gray-600">About</Text>
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
