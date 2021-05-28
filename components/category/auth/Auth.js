import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import  LoginForm  from './LoginForm'
import  RegisterForm  from './RegisterForm'


export default function Auth() {
const [isLogin, setisLogin] = useState(true)

const changeForm = () =>{
    setisLogin(!isLogin)
}

    return (
        <View>
           {isLogin ? (<LoginForm changeForm={changeForm}/>) 
           :(<RegisterForm changeForm={changeForm}/>) }
        </View>
    )
}

const styles = StyleSheet.create({})
