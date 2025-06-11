import React from "react";
import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";
import theme from "../../styles/theme";

type CardProps = {
  name: string;
  quantidade: number;
  imageUrl: ImageSourcePropType[];
};

export const Card: React.FC<CardProps> = ({ name, quantidade, imageUrl }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageGrid}>
        {imageUrl.slice(0, 4).map((img, index) => (
          <Image key={index} source={img} style={styles.image} />
        ))}
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.quantity}>{quantidade}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: 170,
    padding: 8,
    elevation: 2,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor:  theme.colors.white,
  },
  imageGrid: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 70,
    margin: 2,
    height: 65,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  info: {
    marginTop: 5,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:  'space-between',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 14,
    borderRadius: 8,
    paddingVertical: 3,
    paddingHorizontal: 10,
    color: theme.colors.black,
    backgroundColor: theme.colors.blue_100,
  },
});
