import { View, Text, TextInput, StyleSheet,ScrollView, Modal} from "react-native";
import { Appbar, Button, Searchbar,Drawer } from "react-native-paper";
import { useState } from "react";

import { useNavigation } from "@react-navigation/native";



export default function TelaInicial() {
  const navigator = useNavigation();
  const [modalVisible, setModalVisible] = useState(true);
  return (

    <View style={{ backgroundColor: "#000000", flex: 1 }}>

      <Modal  
      transparent={true}
       animationType="slide"
       visible={!modalVisible}>
        <View style={{padding:50, flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,}} >
<View style={{  margin: 20,
    backgroundColor: '#1573DD',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    }
  }}>
    
  <Text style={{color:'white'}}>
    Nome de usuário:
  </Text>
  <Text style={{color:'white'}}>
    E-mail:
  </Text>
<View style={{paddingTop:50, gap:15}}>
  <Text style={{color:'white'}}>
    Deseja restaurar sua senha?

  </Text>
  <Button mode="outlined" buttonColor="#01B1FD" textColor="white"
  >RESTAURAR</Button>
</View>
</View>
</View>
</Modal>

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

         <Appbar.Action icon="account-circle" size={40} color="#1573DD"  onPress={() => setModalVisible(false)}
         />
      </Appbar.Header>



      <View style={{padding:20}}>
        <Searchbar placeholder="Pesquisar" iconColor="#1573DD"
         placeholderTextColor={'#1573DD'} />
      </View>
    

  
        <ScrollView>



        </ScrollView>

      </View>
      )}

