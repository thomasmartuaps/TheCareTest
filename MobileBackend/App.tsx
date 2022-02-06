import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import NavigationPage from "./src/containers/NavigationPage";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationPage />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
