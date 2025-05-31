import React from "react";
import { View, Text } from "react-native";


export const Favorito = () => {
  return(
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
    <Text
      style={{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
      }}
    >
    Favorito</Text>
    </View>
  );
}
