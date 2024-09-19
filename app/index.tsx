import { Text, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRoute } from "@react-navigation/native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Set a timeout for 5 seconds (5000 milliseconds)
    const timer = setTimeout(() => {
      // Navigate to the next screen (replace '/home' with your desired route)
      router.push('/landing'); // Adjust the route as per your structure
    }, 5000);
    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Fontisto name="whatsapp" size={80} color="#4ECB71" />
      </View>
      <View style={styles.prefooter}>
        <Text>from</Text>
        <View style={styles.footer}>
          <FontAwesome6 name="meta" size={20} color="#4ECB71" />
          <Text style={styles.meta}>Meta</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  logo: {
    marginTop: 270,
  },

  footer: {
    flexDirection: 'row',
  },

  prefooter: {
    alignItems: 'center',
    marginTop: 240,
  },

  meta: {
    fontSize: 18,
    marginLeft: 5,
    color: '#4ECB71'
  }
})