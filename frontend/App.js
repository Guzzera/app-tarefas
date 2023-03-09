import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './telas/Home';
import Form from './telas/Form';

const Stack = createStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Form' component={Form}/>
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App