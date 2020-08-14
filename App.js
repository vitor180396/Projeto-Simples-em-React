import React,{ useState, useEffect } from 'react'
import {Component} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {ScrollView,View, TextInput,  Alert, Text, TouchableOpacity,Image, Animated} from 'react-native'
import {createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import styles from './src/styles.js'
import InputButton from './src/InputButton.js'



//Postagens

class Postagem1 extends Component{
  render(){
    return(
      <View style = {{flexDirection:'row',
        backgroundColor:'#ffffff', margin:5}}>
          
          <Image style = {{height:70, width:70,
          borderRadius:100, borderWidth:4,
          borderColor: 'black'}}
          source = {require('./usuarios/usrgeral.png')} />

          <View style = {{flex:1, margin:5}}>
            <Text>
              {this.props.nome}
            </Text>
            <Text>
              {this.props.postagem}
            </Text>
          </View>
        </View>
    )
  }
}

class Postagem2 extends Component{
  render(){
    return(
      <View style = {{flexDirection:'row',
        backgroundColor:'#ffffff', margin:5}}>
          
          <Image style = {{height:70, width:70,
          borderRadius:100, borderWidth:4,
          borderColor: 'black'}}
          source = {require('./usuarios/usrgeral.png')} />

          <View style = {{flex:1, margin:5}}>
            <Text >
              {this.props.nome}
            </Text>
            <Text>
              {this.props.postagem}
            </Text>
          </View>
        </View>
    )
  }
}

class Postagem3 extends Component{
  render(){
    return(
      <View style = {{flexDirection:'row',
        backgroundColor:'#ffffff', margin:5}}>
          
          <Image style = {{height:70, width:70,
          borderRadius:100, borderWidth:4,
          borderColor: 'black'}}
          source = {require('./usuarios/usrgeral.png')} />

          <View style = {{flex:1, margin:5}}>
            <Text>
              {this.props.nome}
            </Text>
            <Text>
              {this.props.postagem}
            </Text>
          </View>
        </View>
    )
  }
}
class Postagem4 extends Component{
  render(){
    return(
      <View style = {{flexDirection:'row',
        backgroundColor:'#ffffff', margin:5}}>
          
          <Image style = {{height:70, width:70,
          borderRadius:100, borderWidth:2,
          borderColor: 'black'}}
          source = {require('./usuarios/usrgeral.png')} />

          <View style = {{flex:1, margin:5}}>
            <Text>
              {this.props.nome}
            </Text>
            <Text>
              {this.props.postagem}
            </Text>
          </View>
        </View>
    )
  }
}

class Postagem5 extends Component{
  render(){
    return(
      <View style = {{flexDirection:'row',
        backgroundColor:'#ffffff', margin:5}}>
          
          <Image style = {{height:70, width:70,
          borderRadius:100, borderWidth:4,
          borderColor: 'black'}}
          source = {require('./usuarios/usrgeral.png')} />

          <View style = {{flex:1, margin:5}}>
            <Text>
              {this.props.nome}
            </Text>
            <Text>
              {this.props.postagem}
            </Text>
          </View>
        </View>
    )
  }
}

class Postagem6 extends Component{
  render(){
    return(
      <View style = {{flexDirection:'row',
        backgroundColor:'#ffffff', margin:5}}>
          
          <Image style = {{height:70, width:70,
          borderRadius:100, borderWidth:4,
          borderColor: 'black'}}
          source = {require('./usuarios/usrgeral.png')} />

          <View style = {{flex:1, margin:5}}>
            <Text>
              {this.props.nome}
            </Text>
            <Text>
              {this.props.postagem}
            </Text>
          </View>
        </View>
    )
  }
}

class Postagem7 extends Component{
  render(){
    return(
      <View style = {{flexDirection:'row',
        backgroundColor:'#ffffff', margin:5}}>
          
          <Image style = {{height:70, width:70,
          borderRadius:100, borderWidth:4,
          borderColor: 'black'}}
          source = {require('./usuarios/usrgeral.png')} />

          <View style = {{flex:1, margin:5}}>
            <Text>
              {this.props.nome}
            </Text>
            <Text>
              {this.props.postagem}
            </Text>
          </View>
        </View>
    )
  }
}

class Postagem8 extends Component{
  render(){
    return(
      <View style = {{flexDirection:'row',
        backgroundColor:'#ffffff', margin:5}}>
          
          <Image style = {{height:70, width:70,
          borderRadius:100, borderWidth:2,
          borderColor: 'black'}}
          source = {require('./usuarios/usrgeral.png')} />

          <View style = {{flex:1, margin:5}}>
            <Text>
              {this.props.nome}
            </Text>
            <Text>
              {this.props.postagem}
            </Text>
          </View>
        </View>
    )
  }
}
function Chat({navigation}){
  return(
    <ScrollView>
    <View style = {{flex:1, backgroundColor:'#340b61'}}>
    <View style = {{marginTop:50}}>
    <Postagem1 nome = 'Pedro_24'
    postagem = 'Placas mães AM4 socket B460' />

    <Postagem2 nome = 'Carlos'
    postagem = 'Elas são incríveis' />

    <Postagem3 nome = 'Roberto'
    postagem = 'Concordo. Tive algumas e sempre fizeram OC facilmente' />
    
    <Postagem4 nome = 'Ivan'
    postagem = 'Vocês já testaram placas de vídeo AMD tbm?' />

    <Postagem5 nome = 'Beatriz'
    postagem = 'Sim, mas tive problemas com drivers' />

    <Postagem6 nome = 'Vitor'
    postagem = 'Nunca tive problemas, acho muito boas' />

    <Postagem7 nome = 'Johnny'
    postagem = 'Tenho algumas antigas em casa' />
 
    <Postagem8 nome = 'Julia'
    postagem = 'Só gosto de Nvidia' />

    </View>
  </View>
  </ScrollView>

  )
}

//Calculadora
const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+'],
  ['c', 'ce']
];
class Calculator extends Component {

  constructor(props) {
      super(props);

      this.initialState = {
          previousInputValue: 0,
          inputValue: 0,
          selectedSymbol: null
      };

      this.state = this.initialState;
  }

  render() {
      return (
          <View style={styles.rootContainer}>
              <View style={styles.displayContainer}>
                  <Text style={styles.displayText}>{this.state.inputValue}</Text>
              </View>
              <View style={styles.inputContainer}>
                  {this._renderInputButtons()}
              </View>
          </View>
      );
  }

  _renderInputButtons() {

      let views = inputButtons.map((row, idx) => {
          let inputRow = row.map((buttonVal, columnIdx) => {
              return <InputButton
                          value={buttonVal}
                          highlight={this.state.selectedSymbol === buttonVal}
                          onPress={this._onInputButtonPressed.bind(this, buttonVal)}
                          key={'butt-' + columnIdx} />;
          });

          return <View style={styles.inputRow} key={'row-' + idx}>{inputRow}</View>;
      });

      return views;
  }

  _onInputButtonPressed(input) {
      switch (typeof input) {
          case 'number':
              return this._handleNumberInput(input);
          default:
              return this._handleStringInput(input);
      }
  }

  _handleNumberInput(num) {
      let inputValue = (this.state.inputValue * 10) + num;

      this.setState({
          inputValue: inputValue
      });
  }

  _handleStringInput(str) {
      switch (str) {
          case '/':
          case '*':
          case '+':
          case '-':
              this.setState({
                  selectedSymbol: str,
                  previousInputValue: this.state.inputValue,
                  inputValue: 0
              });
              break;

          case '=':
              let symbol = this.state.selectedSymbol,
                  inputValue = this.state.inputValue,
                  previousInputValue = this.state.previousInputValue;

              if (!symbol) {
                  return;
              }

              this.setState({
                  previousInputValue: 0,
                  inputValue: eval(previousInputValue + symbol + inputValue),
                  selectedSymbol: null
              });
              break;

          case 'ce':
              this.setState(this.initialState);
                  break;

          case 'c':
              this.setState({inputValue: 0});
              break;

      }
  }

}

//

function Login({navigation}){
  const[usuario, setUsr] = useState('')
  const[senha, setSenha] = useState('')
  const[offset] = useState(new Animated.ValueXY({x : 0, y : 80}))
useEffect(()=>{
  Animated.spring(offset.y,{
toValue: 0,
speed:4,
bounciness: 20,
useNativeDriver: true
  }).start();
}, []);
   
  return(
    <View style={styles.container}>
    <Animated.View 
    style ={[
      {
        transform:[
          {translateY: offset.y}
        ]
    }
  ]}
    >
     

      
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
      setUsr('')
      setSenha('')
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
</Animated.View>
</View>
  )
}

function Sair({ navigation: { navigate } }) {
  return (
    <View style={{flex:1,backgroundColor:'#340b61'}}>
      <View style ={{textAlign:'center', margin:50}}>
      <TouchableOpacity style = {styles.button}
      onPress={() =>{
        navigate('Login')
      }}>
<Text style={{fontSize:16, fontWeight:'bold'}}>
 Sair da conta
</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}
const Tab = createMaterialTopTabNavigator()
function tabnavigationnested(){
  return(
<Tab.Navigator>
<Tab.Screen name = 'Chat' component = {Chat} />
<Tab.Screen name = 'Calculadora' component = {Calculator} />
<Tab.Screen name = 'Sair' component ={Sair}/>
</Tab.Navigator>
)
}
const Stack = createStackNavigator()

export default function App(){
  return(
 <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name = 'Login' component = {Login} /> 
      <Stack.Screen name = 'Chat' component = {tabnavigationnested}/>
      </Stack.Navigator>
   
    </NavigationContainer>
  )  
}
  


