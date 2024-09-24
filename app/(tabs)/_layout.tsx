import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from ".";
import TabTwoScreen from "./explore";

export default function TabLayout() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ animation: "fade_from_bottom" }}>
      <Stack.Screen name="index" options={{ headerShown: false }}>
        {() => <HomeScreen />}
      </Stack.Screen>
      <Stack.Screen name="explore" options={{ headerShown: false }}>
        {() => <TabTwoScreen />}
      </Stack.Screen>
    </Stack.Navigator>
    // <Tabs
    //   screenOptions={{
    //     tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
    //     headerShown: false,
    //   }}
    // >
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       title: "Home",
    //       tabBarIcon: ({ color, focused }) => (
    //         <TabBarIcon
    //           name={focused ? "home" : "home-outline"}
    //           color={color}
    //         />
    //       ),
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="explore"
    //     options={{
    //       title: "Explore",
    //       tabBarIcon: ({ color, focused }) => (
    //         <TabBarIcon
    //           name={focused ? "code-slash" : "code-slash-outline"}
    //           color={color}
    //         />
    //       ),
    //     }}
    //   />
    // </Tabs>
  );
}
