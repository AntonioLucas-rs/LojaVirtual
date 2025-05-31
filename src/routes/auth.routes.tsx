import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabRoutes } from "./tabs.routes";

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator
      initialRouteName="TabRoutes"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="TabRoutes" component={TabRoutes} />
    </Navigator>
  );
};

