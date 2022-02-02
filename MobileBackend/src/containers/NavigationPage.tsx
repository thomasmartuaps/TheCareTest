import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductForm from "./ProductForm";

const Stack = createNativeStackNavigator();

export default function NavigationPage() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Service"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="ProductForm" component={ProductForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
