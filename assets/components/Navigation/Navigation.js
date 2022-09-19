import * as React from "react";
import { useState, Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Text,
  StatusBar,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

import InputScreen from "../../screens/InputScreen/InputScreen";
import MapScreen from "../../screens/MapScreen/MapScreen";
import CartScreen from "../../screens/CartScreen/CartScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="InputScreen"
        screenOptions={{
          headerStyle: { backgroundColor: "#270100" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="InputScreen"
          component={InputScreen}
          options={{
            title: "Input Items",
          }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            title: "Routing Map",
          }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
