import { View, Text,  StyleSheet, ScrollView, Modal, Settings } from "react-native";
import { Appbar, Button, Searchbar, FAB, IconButton,TextInput } from "react-native-paper";
import { useState } from "react";

import { useNavigation } from "@react-navigation/native";

export default function Anotacoes(){
    return(
    <View style={{backgroundColor:'#030303',flex:1}}>
<Appbar.Header style={{backgroundColor:'#000000',
 borderBottomColor: "#4D4B4B", borderBottomWidth: 2,  }}>
            <TextInput placeholder="Título" selectionColor="white" activeOutlineColor="#4D4B4B"
            textColor="white" mode="outlined" 
             style={{backgroundColor:'#000000',fontSize:22,width:165,paddingLeft:5,
      }}  />
      <View style={{flex:1, paddingLeft:80, paddingRight:20 }} >
<Button mode="Contained" textColor="white" buttonColor="#1B6FEE">SALVAR</Button>
</View>
</Appbar.Header>
<TextInput mode="outlined" textColor="white" multiline={true} numberOfLines={10000}
activeOutlineColor="#4D4B4B"
style={{backgroundColor:'#030303'}} />
            
        </View>
    )
}
