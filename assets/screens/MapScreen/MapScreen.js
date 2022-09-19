import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

import { GlobalStyles as gcx } from "../../../Global.Module";
import { LocalStyles as cx } from "./MapScreen.Module";
import { StatusBar } from "expo-status-bar";

const MapScreen = ({ navigation }) => {
  return (
    <View style={gcx.container}>
      <StatusBar backgroundColor="transparent" style={"light"} />
      <Button
        title="Proceed to Routing Map"
        onPress={() => navigation.navigate("InputScreen")}
      />
    </View>
  );
};

export default MapScreen;
