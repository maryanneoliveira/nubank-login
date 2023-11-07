import {Image, StyleSheet} from 'react-native' 
export default function Logo(){
    return(
        <Image source={require('../../assets/logo.png')} style={styles.logo}></Image>
    )
}
const styles = StyleSheet.create({
    logo: {
        position: 'absolute',
        top: 35,
        left: 10,
        height: 90,
        width: 90,
    }


});