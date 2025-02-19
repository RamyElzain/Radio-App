import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
              backgroundColor: '#171717',
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home" color={color} />,
        }}
      />
     
      <Tabs.Screen
        name="news"
        options={{
          title: 'news',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="newspaper" color={color} />,
        }}
      />

      <Tabs.Screen
          name="prod"
          options={{
            title: 'prod',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="radio" color={color} />,
          }}
        />

      <Tabs.Screen
          name="schedule"
          options={{
            title: 'schedule',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="list" color={color} />,
          }}
        />

        <Tabs.Screen
            name="settings"
            options={{
              title: 'settings',
              tabBarIcon: ({ color }) => <Ionicons size={28} name="settings" color={color} />,
            }}
          />


    </Tabs>
  );
}
