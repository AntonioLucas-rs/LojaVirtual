import React from 'react';
import { View, Text } from 'react-native';


export const MyApp = () => {
  return (
    <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
      <Text style={{
          fontSize: 25,
          fontWeight: 800,
        }}
      >Loja Virtual</Text>
    </View>
  );
};



