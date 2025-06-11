import React from "react";
import { CaretCircleRight } from "phosphor-react-native";
import { View, Text, StyleSheet, Pressable } from "react-native";
import theme from "../../styles/theme";

type Props = {
  title: string;
  titleButton?: string;
  onPress?: () => void;
}

export const Header = ({ title, onPress, titleButton }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.titleButton}>{titleButton || 'Ver Tudo'}</Text>
        <CaretCircleRight size={20} color={theme.colors.blue_500} weight='fill' />
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleButton: {
    fontSize: 16,
    marginRight: 5,
    fontWeight: 'bold',
    color: theme.colors.black,
  },
});
