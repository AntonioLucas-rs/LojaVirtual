import React from "react";
import { View, Text } from "react-native";
import theme from "../../styles/theme";

import { Header } from "../../components/Header";
import { CategoriaPopular } from "../../components/CategoriaPopular";


export const Home = () => {
  return(
    <>
      <Header title="Comprar" isSearch />
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.white,
        }}
      >
        <CategoriaPopular />
      </View>
    </>
  );
}
