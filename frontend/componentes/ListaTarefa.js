import React, { useState, useEffect} from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { deleteTarefa, getTarefas } from '../api';
import ItemTarefa from '../componentes/ItemTarefa';
import estilo from './Estilos';

const ListaTarefa = () => {

  const [ tarefas, setTarefas ] = useState([]);
  const [ recarrega, setRecarrega ] = useState(false);
  const focus = useIsFocused();

    const carregaTarefas = async () => {
      const dados = await getTarefas();
      setTarefas(dados)
    }

    useEffect(() => {
      carregaTarefas();
    }, [focus]);

    const apagar = async (id) => {
      await deleteTarefa(id);
      await carregaTarefas()
    }

  const renderItem =({item}) => {
    return <ItemTarefa tarefas={item} apagar={apagar}/>
};

const onRefresh = React.useCallback(async () => {
  setRecarrega(true);
  await carregaTarefas();
  setRecarrega(false);
})
  return (
    <FlatList
        style={estilo.lista}
        data={tarefas}
        keyExtractor={(item) => item.id + ''}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={recarrega}
            colors={['#78e08f']}
            onRefresh={onRefresh}
            progressBackgroundColor='#0a3d62'
          />
        }
     />
  )
}

export default ListaTarefa