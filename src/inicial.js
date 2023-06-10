import { View, Text, TextInput, StyleSheet, ScrollView, Modal, Settings } from "react-native";
import { Appbar, Button, Searchbar, FAB, IconButton } from "react-native-paper";
import { useState } from "react";

import { useNavigation } from "@react-navigation/native";



export default function TelaInicial() {
  const navigator = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (

    <View style={{ backgroundColor: "#000000", flex: 1 }}>

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}>

        <View style={{
          flex: 1,
          justifyContent: 'center',
          paddingTop: 400
        }} >

          <View style={{
            flex: 1,
            backgroundColor: '#1573DD',
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
            padding: 35,

          }}>
            <Text style={{ fontSize: 30, position: "absolute", left: 370, fontWeight: 'bold', color: 'white' }} onPress={() => setModalVisible(false)}>x</Text>

            <Text style={{ color: 'white', fontSize: 20 }}>
              Usuário:
            </Text>
            <Text style={{ color: 'white', fontSize: 20 }}>
              E-mail:
            </Text>
            <View style={{ paddingTop: 50, gap: 15 }}>
              <Text style={{ color: 'white', fontSize: 20 }}>
                Deseja restaurar sua senha?

              </Text>
              <Button style={{ borderColor: 'black' }} mode="outlined" buttonColor="#01B1FD" textColor="white"
                onPress={() => navigator.navigate("restaurar")}
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
          style={{ paddingLeft: 20 }}
        />

        <Appbar.Action icon="account-circle" size={40} color="#1573DD" onPress={() => setModalVisible(true)}
        />
      </Appbar.Header>



      <View style={{ padding: 20 }}>
        <Searchbar placeholder="Pesquisar" iconColor="#1573DD"
          placeholderTextColor={'#1573DD'} />
      </View>

      

<View style={{position:'absolute', margin:16,right:0,top:700}} >
      <FAB icon={'pencil'} customSize={70}
        style={{ backgroundColor: '#1573DD' }} onPress={() => navigator.navigate("anotar")}
         />
</View>

     
    </View>
  )
}

