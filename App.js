import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/*

npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/stack
npm install @react-navigation/native-stack

*/

import Inicio from './src/pages/Inicio';
import Cadastro from './src/pages/Cadastro';
import Vindas from './src/pages/Vindas';
import Home from './src/pages/Home';
import Zona1 from './src/pages/Territorios/1';
import Zona2 from './src/pages/Territorios/2';
import Zona3 from './src/pages/Territorios/3';
import Zona4 from './src/pages/Territorios/4';
import Zona5 from './src/pages/Territorios/5';
import Zona6 from './src/pages/Territorios/6';
import Como from './src/pages/Extras/Como';
import Conta from './src/pages/Extras/Conta';
import AlterarPerfil from './src/pages/AlterarPerfil';
import Ingressos from './src/pages/Extras/Ingressos';
import Sobre from './src/pages/Extras/Sobre';

const Stack = createNativeStackNavigator ();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio}
        options={{
          headerShown: false,
        }}  
        />
        <Stack.Screen name="Cadastro" component={Cadastro}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="Vindas" component={Vindas}
         options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Home" component={Home}
        options={{
          headerShown: false,
        }}/>
        <Stack.Screen name="Zona1" component={Zona1}
        options={{
          title:"Território 1",
          headerStyle:{backgroundColor:"#3CB371", borderRadius:'10px'},
          headerTitleStyle: {fontWeight: 'bold',fontSize:'30px'},
          headerTintColor: "#FAF0E6",
          headerShown: true,
        }}/>
        <Stack.Screen name="Zona2" component={Zona2}
        options={{
          title:"Território 2",
          headerStyle:{backgroundColor:"#3CB371", borderRadius:'10px'},
          headerTitleStyle: {fontWeight: 'bold',fontSize:'30px'},
          headerTintColor: "#FAF0E6",
          headerShown: true,
        }}/>
        <Stack.Screen name="Zona3" component={Zona3}
        options={{
          title:"Território 3",
          headerStyle:{backgroundColor:"#3CB371", borderRadius:'10px'},
          headerTitleStyle: {fontWeight: 'bold',fontSize:'30px'},
          headerTintColor: "#FAF0E6",
          headerShown: true,
        }}/>
        <Stack.Screen name="Zona4" component={Zona4}
        options={{
          title:"Território 4",
          headerStyle:{backgroundColor:"#3CB371", borderRadius:'10px'},
          headerTitleStyle: {fontWeight: 'bold',fontSize:'30px'},
          headerTintColor: "#FAF0E6",
          headerShown: true,
        }}/>
        <Stack.Screen name="Zona5" component={Zona5}
        options={{
          title:"Território 5",
          headerStyle:{backgroundColor:"#3CB371", borderRadius:'10px'},
          headerTitleStyle: {fontWeight: 'bold',fontSize:'30px'},
          headerTintColor: "#FAF0E6",
          headerShown: true,
        }}/>
        <Stack.Screen name="Zona6" component={Zona6}
        options={{
          title:"Território 6",
          headerStyle:{backgroundColor:"#3CB371", borderRadius:'10px'},
          headerTitleStyle: {fontWeight: 'bold',fontSize:'30px'},
          headerTintColor: "#FAF0E6",
          headerShown: true,
        }}/>
        <Stack.Screen name="Como" component={Como}
        options={{
          headerShown: false,
        }}  
        />
        <Stack.Screen name="Conta" component={Conta}
        options={{
          headerShown: false,
        }}  
        />
        <Stack.Screen name="AlterarPerfil" component={AlterarPerfil}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="Ingressos" component={Ingressos}
        options={{
          headerShown: false,
        }}  
        />
        <Stack.Screen name="Sobre" component={Sobre}
        options={{
          headerShown: false,
        }}  
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};
