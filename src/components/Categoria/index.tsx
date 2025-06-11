import React from "react";
import { View, FlatList, Alert, StyleSheet } from "react-native";
import { categoria, CategoriaItem } from "../../service/categoria";
import { Card } from "./Card";
import { Header } from "./Header";

export const Categoria = () => (
  <View style={styles.container}>
    <Header
      title="Categorias"
      titleButton="Ver todas"
      onPress={() => Alert.alert("Categoria", "Ver todas as categorias")}
    />
    <FlatList
      data={categoria}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card
          name={item.title}
          quantidade={item.quantidade}
          imageUrl={item.imageUrl}
        />
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
});
