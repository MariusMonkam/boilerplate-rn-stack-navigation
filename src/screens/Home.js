// src/screens/Home.js

import React,{useState} from 'react'
import { StyleSheet, View, Text,TouchableOpacity,TextInput } from 'react-native'


function Home(props) {
  const [name, setName]= useState('');
  

  const [characters,setCharacters]=useState([])

  const  nameInputHandler = (name)=>{
    setName(name);
  }
  
   
 
  const character = {
    name:name
    
  }
  const addCharacter = ()=>{
    setCharacters([...characters,{character}])
    alert(character)

  }
  const {navigation}= props
 

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fly Game</Text>
      <TextInput
      placeholder="Enter the name of your character"
      style={styles.input}
      onChangeText={nameInputHandler}
      value={name}
      />
      
      
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={()=>navigation.navigate('Details',{
          item : character,
          otherParams:addCharacter

        }
         
        )}
        
        >
        <Text style={styles.buttonText}> Start {character.name}</Text>
      </TouchableOpacity>
     
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
 
 
})

export default Home