import React from 'react'
import { FlatList, Text, View } from 'react-native'

const ListaTarefa = ({tarefas}) => {
  return (
    <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id + ''}
        renderItem={({ item }) => {
         return <Text>{item.titulo}</Text>
        }}
     />
  )
}

export default ListaTarefa