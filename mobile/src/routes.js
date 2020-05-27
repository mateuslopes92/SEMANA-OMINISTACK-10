import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";

function Routes() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#7d40e7" },
        headerTintColor: "#fff",
        headerBackTitleVisible: false
      }}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerTitleAlign: "center",
          title: "DevRadar"
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: "center",
          title: "Perfil no Github"
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
