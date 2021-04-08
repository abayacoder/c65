import React,{Component} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech'
import {Header} from 'react-native-elements'
export default class App extends Component {
  constructor(){
    super();
    this.state={
      name: '',
    }
  }
    speak(){
     var thingToSay = this.state.name
     Speech.speak(thingToSay)
     }
 render(){
  return (
    <View style={styles.container}>
      <Header 
             backgroundColor={'#87CEEB'}
         centerComponent={{text:'Text To Speech Converter',style:{color:'ggg',fontSize:15},}}
         />
      <Text style={styles.paragraph}>Enter The Word</Text>
      <TextInput style={styles.inputBox}
       onChangeText={(text)=>{
         this.setState({
           name: text
         })
       }}
      />
       <TouchableOpacity style={styles.button} 
       onPress={()=>{this.speak();}}
       >
       <Text>Click Here To Hear Speech</Text></TouchableOpacity>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    },
     inputBox:{
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button:{
          width: '60%',
    height: 50,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    margin: 5,
    backgroundColor: '#87CEEB',
    borderColor: 'black',
    borderWidth: 2 
  }
});
