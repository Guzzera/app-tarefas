import React from 'react';
import { View } from 'react-native';
import estilo from './Estilos';

const Layout = ({children}) => {
  return <View style={estilo.layoutContainer}>{children}</View>
};


export default Layout