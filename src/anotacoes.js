import { View, Text,  StyleSheet, ScrollView, Modal, Settings } from "react-native";
import { Appbar, Button, Searchbar, FAB, IconButton,TextInput } from "react-native-paper";
import { useState,useEffect } from "react";

import { useNavigation } from "@react-navigation/native";




export default function Anotacoes(){


const [desc, setDesc] = useState()

const[tit, setTit] = useState()

state={
    titulo:tit,
    descricao:desc
}


   console.log(desc)
   console.log(tit)
    useEffect(() => {
      const load = async () => {
        const result = await fetch("http://localhost:3000/anotacao", 
        {this:state},
        {method:'post'})

    
        const resultAnot = await result.json()
    
        console.log('resultAnot', resultAnot)
    
        setLista(resultAnot)
      }
    
      load()
    
    
    }, [])

    return(
    <View style={{backgroundColor:'#030303',flex:1}}>
<Appbar.Header style={{backgroundColor:'#000000',
 borderBottomColor: "#4D4B4B", borderBottomWidth: 2,  }}>
            <TextInput placeholder="Título" selectionColor="white" activeOutlineColor="#4D4B4B"
            textColor="white" mode="outlined" 
             style={{backgroundColor:'#000000',fontSize:22,width:165,paddingLeft:5,
      }}   onChangeText={setTit}/>
      <View style={{flex:1, paddingLeft:80, paddingRight:20 }} >
<Button mode="Contained" textColor="white" buttonColor="#1B6FEE" 
onPress={this.onRequest} >SALVAR</Button>
</View>
</Appbar.Header>
<TextInput mode="outlined" textColor="white" multiline={true} numberOfLines={10000}
activeOutlineColor="#4D4B4B"
style={{backgroundColor:'#030303'}}  onChangeText={setDesc}/>
            
        </View>
    )
}
