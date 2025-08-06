import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const hello = () => {
  return (
    <View className="items-center justify-center flex-1 gap-4 fade-in ">
      <Text>Hello User Chamath Dilshan</Text>
      <View className="items-center justify-center w-24 h-24 bg-blue-500 rounded-full">
        <Text className="text-2xl text-white">♥️</Text>
      </View>
      <Text className="mt-4 text-lg text-gray-700">Welcome to my app!</Text>
      <Text className="mt-2 text-sm text-gray-500">
        This is a simple greeting component.
      </Text>
      <Text className="mt-2 text-sm text-gray-500">Feel free to explore!</Text>
    </View>
  );
};

export default hello;
