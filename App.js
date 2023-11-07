import Login from "./src/telas/Login";
import Entrou from "./src/telas/Entrou";
import NovoUsuario from "./src/telas/NovoUsuario";

import{NavigationContainer} from '@react-navigation/native'
import{createStackNavigator} from'@react-navigation/stack'


const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator>

       <Stack.Screen
         name='login'
         component={Login}
         options={{
           headerShown:false
         }}
      />

<Stack.Screen
         name='novoUsuario'
         component={NovoUsuario}
         options={{
           headerShown:false
         }}
      />

<Stack.Screen
         name='entrou'
         component={Entrou}
         options={{
           headerShown:false
         }}
      />

   </Stack.Navigator>
 </NavigationContainer>


    
  );
}

