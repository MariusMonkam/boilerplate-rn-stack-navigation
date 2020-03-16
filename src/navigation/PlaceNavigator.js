import React from 'react'
import {Platform,TouchableOpacity,StyleSheet,Text} from 'react-native'
import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';
import {HeaderButtons,Item } from 'react-navigation-header-buttons';



import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();



function PlaceNavigator() {
  
  return (
    <NavigationContainer >
      <Stack.Navigator
       initialRouteName='PlaceListScreen'
       screenOptions={{
        
        headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
      
      }}
       >
        <Stack.Screen 
       name="Places"
       component={PlacesListScreen}
       options={({navigation})=>
        ({
        headerTitle: 'All Places',
    headerRight:(props=>
      <HeaderButtons HeaderButtonComponent={HeaderButton} {...props}>
        <Item
          title="Add Place"
          iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
          onPress={() => {
              navigation.navigate('NewPlace');
          }}
        />
      </HeaderButtons>
    )

        })}
        />
         <Stack.Screen 
       name="PlaceDetail"
       component={PlaceDetailScreen}
       options={({navigation})=>({
        headerTitle: navigation.params?.placeTitle
       })
        }
        />
         <Stack.Screen 
       name="NewPlace"
       component={NewPlaceScreen}
       options={{
          title: 'New place',
               
        }}
        />
        <Stack.Screen 
        name="Map"
        component={MapScreen}
        options={({navigation})=>
        ({

        headerRight: (props=>
      <TouchableOpacity style={styles.headerButton} {...props}
       onPress={
        ()=>props.navigation.params?.NewPlace.saveLocation 
      }>
        <Text style={styles.headerButtonText}>Save</Text>
      </TouchableOpacity>
    )

        })}

         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
  headerButton: {
    marginHorizontal: 20
  },
  headerButtonText: {
    fontSize: 16,
    color: Platform.OS === 'android' ? 'white' : Colors.primary
  }
});

export default PlaceNavigator
