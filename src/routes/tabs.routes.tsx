import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens/Tabs/home";
import { Favorito } from "../screens/Tabs/favorito";
import { Categoria } from "../screens/Tabs/categoria";
import { Carrinho } from "../screens/Tabs/carrinho";
import { Perfil } from "../screens/Tabs/perfil";
import { View } from "react-native";
import { Cube, Handbag, Heart, House, UserCircle } from "phosphor-react-native";
import theme from "../styles/theme";

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.blue,
        tabBarInactiveTintColor: theme.colors.black,
        tabBarStyle: {
          height: 70,
          paddingTop: 5,
          paddingBottom: 10,
          borderTopWidth: 0.5,
          backgroundColor: theme.colors.white,
          borderTopColor: theme.colors.red_100,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '400',
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ focused, color }) => (
            <View>
              <House size={27}  color={color} weight={focused ? "fill" : "regular"} />
            </View>
          )
        }}
      />
      <Screen
        name="Favorito"
        component={Favorito}
        options={{
          tabBarLabel: "Favorito",
          tabBarIcon: ({ focused, color }) => (
            <View>
              <Heart size={27}  color={color} weight={focused ? "fill" : "regular"} />
            </View>
          )
        }}
      />
      <Screen
        name="Categoria"
        component={Categoria}
        options={{
          tabBarLabel: "Categoria",
          tabBarIcon: ({ focused, color }) => (
            <View>
              <Cube size={27}  color={color} weight={focused ? "fill" : "regular"} />
            </View>
          )
        }}
      />
      <Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          tabBarLabel: "Carrinho",
          tabBarIcon: ({ focused, color }) => (
            <View>
              <Handbag size={27}  color={color} weight={focused ? "fill" : "regular"} />
            </View>
          )
        }}
      />
      <Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ focused, color }) => (
            <View>
              <UserCircle size={27}  color={color} weight={focused ? "fill" : "regular"} />
            </View>
          )
        }}
      />
    </Navigator>
  );
};

