import { View, Text, TextInput, StyleSheet,ScrollView } from "react-native";
import { Appbar, Button, Searchbar,Drawer } from "react-native-paper";


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
          style={{ paddingLeft:20 }}
        />
         <Appbar.Action icon="menu" size={40} color="#1573DD" 
         />



      </Appbar.Header>
      <View style={{padding:20}}>
        <Searchbar placeholder="Pesquisar" iconColor="#1573DD"
         placeholderTextColor={'#1573DD'} />
      </View>
    
<Drawer.Section title="configurações">
  
  <Drawer.Item 
      label="conta"
  />
  <Drawer.Item 
      label="senha"
  />
  
  </Drawer.Section>
  
        <ScrollView>



        </ScrollView>

      </View>
      )}

