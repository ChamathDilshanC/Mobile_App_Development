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
import Navigation from "./components/Navigation";

export default function ContactPage() {
  return (
    <SafeAreaView className="flex-1 bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 pt-8">
          {/* Contact Hero */}
          <View className="items-center mb-8">
            <View className="items-center justify-center w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-green-500 to-blue-600">
              <Text className="text-5xl">📧</Text>
            </View>
            <Text className="mb-2 text-2xl font-bold text-center text-black">
              Let's Connect
            </Text>
            <Text className="leading-relaxed text-center text-black">
              Ready to bring your ideas to life? Get in touch!
            </Text>
          </View>

          {/* Contact Info */}
          <View className="mb-8">
            <View className="p-6 mb-4 border border-gray-100 bg-white/80 backdrop-blur-sm rounded-2xl">
              <View className="flex-row items-center mb-4">
                <View className="items-center justify-center w-12 h-12 mr-4 bg-blue-500 rounded-xl">
                  <Text className="text-xl">📧</Text>
                </View>
                <View>
                  <Text className="font-semibold text-black">Email</Text>
                  <Text className="text-blue-600">
                    dilshancolonne123@gmail.com
                  </Text>
                </View>
              </View>
            </View>

            <View className="p-6 mb-4 border border-gray-100 bg-white/80 backdrop-blur-sm rounded-2xl">
              <View className="flex-row items-center mb-4">
                <View className="items-center justify-center w-12 h-12 mr-4 bg-green-500 rounded-xl">
                  <Text className="text-xl">📱</Text>
                </View>
                <View>
                  <Text className="font-semibold text-black">Phone</Text>
                  <Text className="text-green-600">+94 77 561 6104</Text>
                </View>
              </View>
            </View>

            <View className="p-6 border border-gray-100 bg-white/80 backdrop-blur-sm rounded-2xl">
              <View className="flex-row items-center mb-4">
                <View className="items-center justify-center w-12 h-12 mr-4 bg-purple-500 rounded-xl">
                  <Text className="text-xl">📍</Text>
                </View>
                <View>
                  <Text className="font-semibold text-black">Location</Text>
                  <Text className="text-purple-600">Aluthgama, Sri Lanka</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Contact Form */}
          <View className="mb-8">
            <Text className="mb-6 text-xl font-bold text-black">
              Send Message
            </Text>
            <View className="space-y-4">
              <View className="p-4 border border-gray-100 bg-white/80 backdrop-blur-sm rounded-2xl">
                <Text className="mb-1 text-sm text-gray-500">Name</Text>
                <Text className="text-black">Chamath Dilshan</Text>
              </View>
              <View className="p-4 border border-gray-100 bg-white/80 backdrop-blur-sm rounded-2xl">
                <Text className="mb-1 text-sm text-gray-500">Email</Text>
                <Text className="text-black">dilshancolonne123@gmail.com</Text>
              </View>
              <View className="p-4 border border-gray-100 bg-white/80 backdrop-blur-sm rounded-2xl">
                <Text className="mb-1 text-sm text-gray-500">Message</Text>
                <Text className="text-black">I want to work with you</Text>
              </View>
              <TouchableOpacity className="py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
                <Text className="text-lg font-bold text-center text-white">
                  Send Message
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Social Links */}
          <View className="mb-8">
            <Text className="mb-6 text-xl font-bold text-black">Follow Me</Text>
            <View className="flex-row justify-center space-x-4">
              <TouchableOpacity className="items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl">
                <Text className="text-xl text-white">📘</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center justify-center w-16 h-16 bg-blue-400 rounded-2xl">
                <Text className="text-xl text-white">🐦</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center justify-center w-16 h-16 bg-gray-700 rounded-2xl">
                <Text className="text-xl text-white">💼</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center justify-center w-16 h-16 bg-pink-500 rounded-2xl">
                <Text className="text-xl text-white">📷</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <Navigation currentPage="contact" />
    </SafeAreaView>
  );
}
