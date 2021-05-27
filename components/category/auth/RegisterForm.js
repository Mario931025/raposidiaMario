import React, {useState,useEffect} from 'react';
import {TextInput,Button} from 'react-native-paper'
import 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import Layout from "../../../views/layout"
import {LayoutStyles, formStyles } from '../../../components/category/styles';
import firebase from '../../../utils/firebase'
import Auth from '../auth/Auth'
import 'firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


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
import {validateEmail} from "../../../utils/validations"
import { Alert } from 'react-native';


const width = Dimensions.get('window').width



const RegisterForm = ({navigation,changeForm}) => {



    const [formData, setformData] = useState(defaultValue())
    const [formerror, setFormError] = useState({})
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

   
    
    
    async function register(){



        let errors ={}

        if(!formData.emailf || !formData.password || !formData.repeatPassword ){

            if(!formData.emailf) errors.emailf = true;
            if(!formData.password) errors.password = true;
            if(!formData.repeatPassword) errors.repeatPassword = true;
        }else if(!validateEmail(formData.emailf)){
            alert("EL FORMATO DEBE SER XXXX@CORREO,COM")
            errors.emailf = true;
           

        }else if(formData.password !== formData.repeatPassword ){
            alert("Las contraseñas no coinciden")
                errors.password = true;
                errors.repeatPassword = true;

               
        }else if(formData.password.length < 6){
                //en firabebase se exige contraseña mayor a 6 caracteres
            alert("LA CONTRASEÑA DEBE SER MAYOR A 6 CARACTERES")
                errors.password = true;
                errors.repeatPassword = true;
        }else{
           firebase.auth().createUserWithEmailAndPassword(formData.emailf,formData.password).then(
              
           (ok)=>{
          
         
           }


           ).catch(()=> {
               setFormError({
                   emailf: true,
                   password: true,
                   repeatPassword: true
               })
           })
        }

        setFormError(errors)

        console.log(errors)

    {/*try {
        const authStatus = await auth().createUserWithEmailAndPassword(email, password)
        const userInDB = await firestore()
        .collection('users')
        .doc(authStatus.user.uid)
        .set({email})
    
        } catch(e) {
        console.log(e)
        } */
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
                style={[formStyles.input,formStyles.btnText,formerror.emailf && styles.error]}
                onChange={(e)=> setformData({...formData, emailf: e.nativeEvent.text})}
            />
            <Text> CONTRASEÑA</Text>
             <TextInput
                
                style={[formStyles.input,formStyles.btnText,formerror.password && styles.error]}
                secureTextEntry
                onChange={(e)=> setformData({...formData, password: e.nativeEvent.text})}
            />
             <Text> REPETIR CONTRASEÑA</Text>
             <TextInput
                
                style={[formStyles.input,formStyles.btnText,formerror.repeatPassword && styles.error]}
                secureTextEntry
                onChange={(e)=> setformData({...formData, repeatPassword: e.nativeEvent.text})}
            />

            <Button mode="contained" style={formStyles.btnSucces} onPress={()=> register()}>
                Registarse
            </Button>
            <Button mode="text" style={formStyles.btnText} labelStyle={formStyles.btnTextLabel}    onPress={changeForm}>
                Iniciar Sesión
            </Button >
            </KeyboardAvoidingView>
        </View>
        </ScrollView>  
        
        
      
        </>
    )


};


function defaultValue(){

    return {
        emailf : "",
        password: "",
        repeatPassword: ""
    }
}




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
    },
    error:{

        borderColor: "#940c0c",

    }

    
})
export default  RegisterForm

