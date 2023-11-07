import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from '../componentes/Logo';
import BotaoCadastrar from '../componentes/BotaoCadastro';
import { useState } from 'react';

export default function NovoUsuario() {
  const [senha, setSenha] = useState(true);
  const [email,setEmail] = useState('');
  const [senha1,setSenha1] = useState('');
  const [senha2,setSenha2] = useState('');
  return (
  
    <View style={styles.container1}>
      <Logo></Logo>
      <View style={styles.container2}>
      <Text style={styles.texto}>Informe os dados:</Text>
      <TextInput
      onChangeText={(text)=> setEmail(text)}
      placeholderTextColor='#451f70'
      placeholder='Informe seu e-mail' 
      style={styles.TextInput}
      ></TextInput>

      <TextInput
      onChangeText={(text)=> setSenha1(text)}
      placeholderTextColor='#451f70'
      placeholder='Informe a senha' 
      secureTextEntry={senha}
       style={styles.TextInput}>
       </TextInput>

       <TextInput
       onChangeText={(text)=> setSenha2(text)}
      placeholderTextColor='#451f70'
      placeholder='Confirme sua senha' 
      secureTextEntry={senha}
       style={styles.TextInput}>
       </TextInput>
       

    <TouchableOpacity
     onPress={() => setSenha(!senha)}
    >
      <Text style={styles.verSenha}> Ver</Text>
     </TouchableOpacity>

     
     <BotaoCadastrar email={email} senha1={senha1} senha2={senha2} ></BotaoCadastrar>

     


      <StatusBar style="auto" />
      </View>
      <Text style={styles.somosTodosNu}> #BEMVINDOAONUBANK</Text>
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
