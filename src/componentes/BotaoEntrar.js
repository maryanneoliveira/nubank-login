import { TouchableOpacity,StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "../FirebaseConnection";
export default function BotaoEntrar(props){
    
        const email = props.email
        const senha = props.senha
        const navigation = useNavigation();

        async function Entrar(){
            await firebase.auth().signInWithEmailAndPassword(email,senha)
            .then(( value ) => {
                navigation.navigate('entrou')      
            })
            .catch((error)=>{
                alert("Erro no login");
            })
    
            }
    
    return(

     <TouchableOpacity style={styles.button}
    onPress={()=> Entrar()}
    > 
     <Text style={styles.texto}>ENTRAR</Text>
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