import { TouchableOpacity,StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from '../FirebaseConnection'

export default function BotaoCadastrar(props){

    const email = props.email
    const senha1 = props.senha1
    const senha2 = props.senha2
    const navigation = useNavigation();

    function cadastrarPessoa() {
        if (senha1 === senha2) {
            firebase.auth().createUserWithEmailAndPassword(email, senha1)
            .then((value) => {
                navigation.navigate('login')
            })
            .catch((error) => {
                alert('algo deu errado!')
            })

        }
        else {
            alert('As senhas são diferentes')
        }
    }


    return(
         <TouchableOpacity style={styles.button}
         onPress={()=> cadastrarPessoa()}
         > 

        <Text style={styles.texto}>Cadastre-me</Text>
        </TouchableOpacity>
    
    
    );
   
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#451f70',
        width:'30%',
        height:30,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginTop:15
    },

    texto:{
        color:'#fff',
        fontWeight:'bold'
    }
})