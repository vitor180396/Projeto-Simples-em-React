import {View, TextInput,  Alert, Text, TouchableOpacity} from 'react-native'
import React,{ useState } from 'react'
import styles from './styles'

function Login({navigation}){
    const[usuario, setUsr] = useState('')
    const[senha, setSenha] = useState('')
    
    return(
      <View style ={styles.container}>
      <Text style={{textAlign:'center',fontSize:28, color:'white'}}>
        Login
        </Text>   
    <TextInput
    style = {{height:50, borderColor: 'black', borderWidth: 2, margin:10,fontSize:18,backgroundColor:'white'}}
    placeholder = 'Digite o usuário'
    onChangeText = {(text) => {
      setUsr(text)
    }}
    value = {usuario}
    />
  
    <TextInput
    style = {{height:50, borderColor: 'black', borderWidth: 2, margin:10,fontSize:18,backgroundColor:'white'}}
    secureTextEntry = {true}
    keyboardType = 'number-pad'
    placeholder = 'Digite a senha'
    onChangeText = {(text) => {
      setSenha(text)
    }}
    value = {senha}
    />
  
    <TouchableOpacity
    style={styles.button}
    onPress = {() => {
      if(usuario === 'vitor' & senha === '14300024'){
        navigation.navigate('Chat')
      }
      else{
        Alert.alert('Usuario/Senha incorreto')
      }
    }}
    >
    <Text style={styles.buttontext}>
      CONECTAR
    </Text>
  
    </TouchableOpacity>
  </View>
    )
  }