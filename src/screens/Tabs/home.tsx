import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../../styles/theme";

import { Header } from "../../components/Header";
import { Categoria } from "../../components/Categoria";
import { CategoriaPopular } from "../../components/CategoriaPopular";


export const Home = () => {
  return(
    <>
      <Header title="Comprar" isSearch />
      <View style={styles.container}>
        <Categoria />
        <CategoriaPopular />
      </View>
    </>
  );
}


const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
});
