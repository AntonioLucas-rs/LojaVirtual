import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens/Tabs/home";
import { Favorito } from "../screens/Tabs/favorito";
import { Categoria } from "../screens/Tabs/categoria";
import { Carrinho } from "../screens/Tabs/carrinho";
import { Perfil } from "../screens/Tabs/perfil";

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{

      }}
    >
      <Screen name="Home" component={Home}/>
      <Screen name="Favorito" component={Favorito}/>
      <Screen name="Categoria" component={Categoria}/>
      <Screen name="Carrinho" component={Carrinho}/>
      <Screen name="Perfil" component={Perfil}/>
    </Navigator>
  );
};

