import { StatusBar } from 'expo-status-bar';
import react, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from '../componentes/Logo';
import BotaoEntrar from '../componentes/BotaoEntrar'
import { useNavigation } from "@react-navigation/native";



export default function Login() {
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');
  const navigation = useNavigation();

  const [verSenha, setVerSenha] = useState(true);

  return (
  
    <View style={styles.container1}>
      <Logo></Logo>
      <View style={styles.container2}>
      <Text style={styles.texto}>Informe seus dados:</Text>
      <TextInput
      onChangeText={(text)=> setEmail(text)}
      placeholderTextColor='#451f70'
      placeholder='Informe seu e-mail' 
      style={styles.TextInput}
      ></TextInput>

      <TextInput
      onChangeText={(text)=> setSenha(text)}
      placeholderTextColor='#451f70'
      placeholder='Informe sua senha' 
      secureTextEntry={verSenha}
       style={styles.TextInput}>
       </TextInput>
    <TouchableOpacity
    onPress={() => setVerSenha(!verSenha)}
    >
      <Text style={styles.verSenha}> Ver</Text>
      
     </TouchableOpacity>

     
     <BotaoEntrar email={email} senha={senha} ></BotaoEntrar>

     <TouchableOpacity
     onPress={()=> navigation.navigate('novoUsuario')}
     >
      <Text style={styles.novaConta}> Clique para se cadastrar</Text>
     </TouchableOpacity>


      <StatusBar style="auto" />
      </View>
      <Text style={styles.somosTodosNu}> #SOMOSTODOSNUBANK</Text>
  </View>

  );

}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#9d02d9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:360,
    height: 550,
    borderRadius:50
    
  },
  texto:{
    fontSize:20,
    fontWeight:'bold',
    color: "#451f70",
    marginBottom:40
  },
  TextInput:{
    width: 300,
    height: 50,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#451f70',
    marginTop: 20,
    paddingLeft:10

  },
  somosTodosNu:{
    fontSize:15,
    fontWeight:'bold',
    color: "#fff",
    bottom:100,
    position:'absolute'
    
  },
  verSenha:{
  fontWeight:'bold',
  color:'#451f70',
  paddingLeft:250,
  margin:8
  },

  novaConta:{
    fontWeight:'bold',
  color:'#451f70',
   margin:20,
   position:'relative',
   //bottom:-60

  }
});
