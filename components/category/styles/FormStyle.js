import color from 'color'
import { StyleSheet} from 'react-native'
import colors from './Colors'


const formStyles = StyleSheet.create({
    input:{
        marginBottom:8,
        height:40,
        borderWidth:2,
        borderColor:"#967B4A",
        backgroundColor:"#fff"
    },
    btnSucces:{
        padding: 5,
        backgroundColor:colors.primary
    },
    btnText:{
        marginTop: 10,

    },
    btnTextLabel:{
        color: colors.dark
    },
    i:{

    }
})


export default formStyles;

