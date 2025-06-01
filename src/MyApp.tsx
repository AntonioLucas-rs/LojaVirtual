import React from 'react';
import { View, StatusBar } from 'react-native';

import { Routes } from './routes';

export const MyApp = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} translucent />
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <Routes />
      </View>
    </>
  );
};



