import React from 'react';
import { StatusBar, View } from 'react-native';
import estilo from './Estilos';

const Layout = ({children}) => {
  return(
    <View style={estilo.layoutContainer}>
     <StatusBar backgroundColor="#222f3e"/>
      {children}
    </View>
  );
};


export default Layout