//Ferramenta externas
import React from "react";
import { Camera } from 'phosphor-react-native'
import { View, Text, StyleSheet, TextInput, Pressable, Alert } from "react-native";

// Ferramenta do próprio sistema
import theme from "../styles/theme";


type Props = {
  title: string;
  isSearch?: boolean;
};

export const Header = ({ title, isSearch = false }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      {isSearch && (
        <View style={styles.viewSearch}>
          <TextInput
            style={styles.input}
            placeholder="Pesquisar..."
            placeholderTextColor={theme.colors.gray_900}
          />
          <Pressable onPress={() => Alert.alert('Pesquisar', 'Pesquisar por foto')}>
            <Camera size={27}  color={theme.colors.blue_550}/>
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 21,
    flexShrink: 1,
    marginRight: 10,
    fontWeight: "600",
    color: theme.colors.black,
  },
  viewSearch: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: theme.colors.bg_input,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
  },
});
