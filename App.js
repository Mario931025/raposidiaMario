import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DrawerContent from './views/layout/DrawerContent'
import Register from './views/register'
import HomeScreen from "./views/home"
import Recipes from "./views/recipes"
import Sabores from "./views/sabores"
import Postres from "./views/postres"
import Perfil from './components/category/auth/Perfil'
import Layout from "./views/layout"

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
  Dimensions
} from 'react-native'; 



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = ({navigation}) => {

  return (
  <SafeAreaProvider>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" 
      drawerStyle={{width: '84%'}}
      drawerContent={props => <DrawerContent { ...props}/>}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Recipes" component={Recipes} />
        <Drawer.Screen name="Sabores" component={Sabores} />
        <Drawer.Screen name="Postres" component={Postres} />
        <Drawer.Screen name ="Perfil" component ={Perfil}/>
      </Drawer.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
  );
};


export default App;
