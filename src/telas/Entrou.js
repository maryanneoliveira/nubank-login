import { Text, View, StyleSheet } from "react-native";

export default function Entrou() {
    return (
     <View style={styles.container}>
        <Text style={styles.texto}>
            BEM VINDO AO NUBANK
        </Text>
     </View>
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9d02d9',
      alignItems: 'center',
      justifyContent: 'center',
    },

    texto:{
        fontSize:20,
        fontWeight:'bold',
        color: "#fff",
    }

})