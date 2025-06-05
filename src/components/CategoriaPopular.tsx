import {
  View,
  Text,
  Alert,
  Image,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";

import theme from "../styles/theme";
import { popular } from "../service/popular";

export const CategoriaPopular = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categoria Popular</Text>
        <FlatList
          data={popular}
          horizontal
          renderItem={({item}) => (
            <Pressable onPress={() => Alert.alert('Categoria:', 'Click em categoria de produt')}>
              <View style={styles.viewImage}>
                <Image
                  alt="Popular"
                  style={styles.image }
                  source={item.imageUrl}
                  resizeMode='contain'
                />
              </View>
            </Pressable>
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}

        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 140,
    padding: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.bg_input,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  viewImage: {
    width:70,
    margin: 5,
    height: 70,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 4,
    borderRadius: 35,
    shadowRadius: 3.05,
    shadowOpacity: 0.17,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.colors.black,
    backgroundColor: theme.colors.white,
  },
  image: {
    width: 57,
    margin: 5,
    height:  57,
    borderRadius: 30,
  }
});
