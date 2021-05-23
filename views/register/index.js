import 'react-native-gesture-handler';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import Layout from "../layout"
import { Avatar } from "react-native-elements";
import user from '../../assets/png/default-user-image.png'
import {LayoutStyles} from '../../components/category/styles';


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
    Dimensions
} from 'react-native';

const width = Dimensions.get('window').width

console.log(auth)

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Register = ({navigation}) => {
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
    <Layout nav={() => navigation.openDrawer()}/>
        <View style={LayoutStyles.container}>
            <Text style={styles.titulo}>LOGIN</Text>
            <Image style={styles.user} source={user}/>
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
        marginLeft: width/2.8,
        paddingBottom:20
    }
})

export default Register;
