import React, {useState,useEffect} from 'react';
import {TextInput,Button} from 'react-native-paper'
import 'react-native-gesture-handler';
import {LayoutStyles, formStyles } from '../../../components/category/styles';
import firebase from '../../../utils/firebase'
import 'firebase/auth';


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


const Auth = (props) => {

const {changeForm} = props   
    
        const [formData, setformData] = useState(defaultValue())
        const [formerror, setFormError] = useState({})
      

        
        
      function login(){
    
    
    
            let errors ={}
    
            if(!formData.emailf || !formData.password  ){
    
                if(!formData.emailf) errors.emailf = true;
                if(!formData.password) errors.password = true;
          
                
             
            }else if(!validateEmail(formData.emailf)){
               alert("EL FORMATO DEBE SER XXXX@CORREO.COM");
                errors.emailf = true;
            
            }else if(formData.password.length < 6){
                    //en firabebase se exige contraseña mayor a 6 caracteres
                alert("LA CONTRASEÑA DEBE SER MAYOR A 6 CARACTERES")
                    errors.password = true;
                   
            }else{
               
                firebase.auth().signInWithEmailAndPassword(formData.emailf,formData.password)
                .then(()=>{
                    console.log("OK")
                })
                .catch(()=>{
                    setFormError({
                        emailf: true,
                        password: true
                    })
                })

            }
    
            setFormError(errors)
    
           
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

        const onType = (e,type) => {

         //  console.log("data:", e.nativeEvent.text)
         //   console.log("Type:", type)
        
            setformData({
             ...formData, [type]: e.nativeEvent.text
         })
        }   
        
    
    
        return (
            <>
            
             <ScrollView showsVerticalScrollIndicator={false}>
             <View style={LayoutStyles.container}>
                
             <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" :"height"}>
                <Text style={styles.titulo} >LOGIN</Text>
                <Image style={styles.user} source={require('../../../assets/png/default-user-image.png')}/>
                <Text> EMAIL</Text>
                <TextInput
                    underlineColor="#967B4A"
                    style={[formStyles.input,formStyles.btnText,formerror.emailf && styles.error]}
                    onChange={(e)=>
                        {
                           
                            onType(e, 'emailf')
                            setformData({...formData, emailf: e.nativeEvent.text})
                        } 
                    
                } 
                />
                <Text> CONTRASEÑA</Text>
                 <TextInput
                    
                    style={[formStyles.input,formStyles.btnText,formerror.password && styles.error]}
                    secureTextEntry
                    onChange={(e)=> { 
                       
                        onType(e, 'password')
                        setformData({...formData, password: e.nativeEvent.text})
                    } 
                }
                        
                />
               
    
                <Button mode="contained" style={[formStyles.btnSucces,styles.btnLogin ]} onPress={()=> login()}>
                    INICIA SESIÓN
                </Button>
                <Button mode="text" style={[formStyles.btnText,styles.btnRegister ]} labelStyle={formStyles.btnTextLabel}
                onPress={changeForm}
                >
                  Registrate
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
            marginLeft: width/3.2,
            paddingBottom:20,
            marginTop:-8
        },
        btnRegister:{
            marginTop:10,
            
        },
        btnLogin:{
            marginTop: 15
        },
        error:{
    
            borderColor: "#940c0c",
    
        }
    
        
    })


    export default Auth
    