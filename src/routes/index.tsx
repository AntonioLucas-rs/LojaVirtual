import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export const Routes = () => {
  const user = true;

  return (
    <NavigationContainer>
      { user ? <AuthRoutes /> : <AppRoutes /> }
    </NavigationContainer>
  );
};

