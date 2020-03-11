import * as React from "react";
import Details from "../screens/Details";
import {Image} from 'react-native'
import Home from "../screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
function BgImage(){
  return(
    <Image 
      style={{width:360,height:100}}
      source={require('../images/floral.png')}
    />
  )
}

function MainStackNavigator() {
  return (
    <NavigationContainer >
      <Stack.Navigator
       initialRouteName='Home'
       screenOptions={{
        headerBackground:props =><BgImage {...props} />  ,
      
        headerTintColor: '#78cfe8',
        headerTitleStyle: {
        fontWeight: 'bold',
        textShadowRadius:10,
        textShadowColor:'black'
      

        },
      }}
       >
        <Stack.Screen 
       name="Home"
       component={Home}
       options={{
          title: 'My home',
         

         
        }}

      
        />
        <Stack.Screen 
        name="Details"
        component={Details}
        
        options={{
          title: 'Details'
      
        }}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator
