import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import estilo from './Estilos'

const ItemTarefa = ({tarefas, apagar}) => {
  const navigation = useNavigation()

  return (
    <View style={estilo.itemContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Form', {id: tarefas.id})}>
       <Text style={estilo.itemTD}>{tarefas.titulo}</Text>
       <Text style={estilo.itemTD}>{tarefas.descricao}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={estilo.delete}
        onPress={() => apagar(tarefas.id)}
        >
       <Text style={estilo.textoDelete}>Apagar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ItemTarefa