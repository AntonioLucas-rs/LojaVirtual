import React from "react";
import { View, Text } from "react-native";
import theme from "../../styles/theme";


export const Home = () => {
  return(
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
      }}
    >
    <Text
      style={{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
      }}
    >
    Home</Text>
    </View>
  );
}
