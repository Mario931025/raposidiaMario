import 'react-native-gesture-handler';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import Layout from "../layout"
import RegisterForm  from '../../components/category/auth/RegisterForm'
import Auth from '../../components/category/auth/Auth'
import user from '../../assets/png/default-user-image.png'
import {LayoutStyles} from '../../components/category/styles';
import firebase from '../../utils/firebase'
import 'firebase/auth';
import { Avatar } from 'react-native-paper';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    Image,
    StatusBar,
    Dimensions,
    KeyboardAvoidingView
} from 'react-native';
import { Platform } from 'react-native';




const width = Dimensions.get('window').width


const Register = ({navigation}) => {
    


const [showLogin, setShowLogin] = useState(false)

const changeForm = () =>{
    setShowLogin(!showLogin);
}



return (
    <>
    <Layout nav={() => navigation.openDrawer()}/>
        <View style={LayoutStyles.container}>
       
        
            {
               showLogin ?  <Auth changeForm={changeForm}/>
               : <RegisterForm changeForm={changeForm}/>
            }
        
          
        </View>




    {/* <Layout nav={() => navigation.openDrawer()}/>
                <Avatar
            size={250}
            rounded
            
            icon={{name: 'user', type: 'font-awesome'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{ margin:0 , borderRadius:100, padding:10,marginBottom:20}}
            />
        <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                    <ScrollView
                    contentInsetAdjustmentBehavior="automatic">

                       
                        <TextInput  value={email} onChangeText={text => setEmail(text)} placeholder="Email"/>
                        <TextInput value={password} onChangeText={text => setPassword(text)} placeholder="Password"/>
                        <Button onPress={register} title="Regístrate" />
                </ScrollView>
            </SafeAreaView> */  }
   
    </>
    );
};


const styles = StyleSheet.create({
    user:{
        width:"100%",
        height:150,
        resizeMode:"contain",
        marginBottom:20,
       borderRadius:80
    },
    titulo:{
        fontSize: width/18, 
        fontWeight: 'bold', 
        marginVertical: 5,
        marginLeft: width/3,
        paddingBottom:20
    }
})

export default Register;
