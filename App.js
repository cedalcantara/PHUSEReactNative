import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./assets/components/Navigation/Navigation";
import { Provider } from "react-redux";
import store from "./assets/src/store/store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
