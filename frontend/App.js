import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './telas/Home';
import Form from './telas/Form';
import estilo from './componentes/Estilos';

const Stack = createStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={({navigation}) =>({
          title: 'Tarefas',
          headerStyle: { backgroundColor: '#222f3e'},
          headerTitleStyle: { color: '#fff' },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Form')}
            >
             <Text style={estilo.botaoNovo}>Novo</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name='Form'
        component={Form}
        options={{
          title: 'Crie uma nova tarefa',
          headerStyle: { backgroundColor: '#222f3e' },
          headerTitleStyle: { color: '#ffff'},
          headerTintColor: '#ffff',
        }}
        />
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App