import { View, Text, TextInput, StyleSheet } from "react-native";
import { Appbar, Button } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

export default function TelaInicial() {
  const navigator = useNavigation();
  return (
    <View style={{ backgroundColor: "#000000", flex: 1 }}>
      <Appbar.Header
        style={{
          backgroundColor: "#0E0E0E",
          borderBottomColor: "#4D4B4B",
          borderBottomWidth: 2,
        }}
      >
        <Appbar.Content
          title="NOTAS"
          titleStyle={{ color: "#FFFFFF", fontSize: 28, fontWeight: "bold" }}
          style={{ alignItems: "center" }}
        />
      </Appbar.Header>
      </View>
      )}

