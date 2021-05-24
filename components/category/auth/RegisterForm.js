import React, {useState} from 'react';
import {TextInput,Button} from 'react-native-paper'
import 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import Layout from "../../../views/layout"
import {LayoutStyles, formStyles } from '../../../components/category/styles';


import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    Dimensions,
    KeyboardAvoidingView
} from 'react-native';

const width = Dimensions.get('window').width
const RegisterForm = ({navigation}) => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    
    
    async function register(){
        try {
        const authStatus = await auth().createUserWithEmailAndPassword(email, password)
        const userInDB = await firestore()
        .collection('users')
        .doc(authStatus.user.uid)
        .set({email})
    
        } catch(e) {
        console.log(e)
        }
    }

 
    return (
        <>
        <ScrollView showsVerticalScrollIndicator={false}>
         <View style={LayoutStyles.container}>
            
         <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" :"height"}>
            <Text style={styles.titulo} >REGISTRO</Text>
            <Image style={styles.user} source={require('../../../assets/png/default-user-image.png')}/>
            <Text> EMAIL</Text>
            <TextInput
                underlineColor="#967B4A"
                style={[formStyles.input,formStyles.btnText]}
            />
            <Text> CONTRASEÑA</Text>
             <TextInput
                
                style={[formStyles.input,formStyles.btnText]}
                secureTextEntry
            />
             <Text> REPETIR CONTRASEÑA</Text>
             <TextInput
                
                style={[formStyles.input,formStyles.btnText]}
                secureTextEntry
            />

            <Button mode="contained" style={formStyles.btnSucces}>
                Registarse
            </Button>
            <Button mode="text" style={formStyles.btnText} labelStyle={formStyles.btnTextLabel}>
                Iniciar Sesión
            </Button>
            </KeyboardAvoidingView>
        </View>
        </ScrollView>
        </>
    )


};

const styles = StyleSheet.create({
    user:{
        width:"100%",
        height:150,
        resizeMode:"contain",
        marginBottom:20,
       borderRadius:80,
      
    },
    titulo:{
        fontSize: width/18, 
        fontWeight: 'bold', 
        marginVertical: 5,
        marginLeft: width/3.7,
        paddingBottom:20,
        marginTop:-8
    }
})
export default  RegisterForm

