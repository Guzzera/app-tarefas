import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { getTarefa, salvarTarefa, updateTarefa } from '../api';
import estilo from '../componentes/Estilos';
import Layout from '../componentes/Layout';

const Form = ({navigation, route}) => {
  const [ tarefa, setTarefa] = useState({
    titulo: '',
    descricao: ''
  });
  
  const [ edicao, setEdicao ] = useState(false);

  const mudar = (nome, valor) => setTarefa({...tarefa, [nome]: valor});
  const enviar = async () => {
    try {
      if(!edicao) {
        await salvarTarefa(tarefa);
      } else {
        await updateTarefa((route.params.id, tarefa))
      }
      navigation.navigate('Home')
    } catch(erro) {
         console.error(erro);
    }
  };

  useEffect(() => {
    if(route.params && route.params.id) {
      navigation.setOptions({ headerTitle: 'Atualizar Tarefa'});
      setEdicao(true);
      (async () => {
       const tarefa = await getTarefa(route.params.id);
       setTarefa({titulo: tarefa.titulo, descricao: tarefa.descricao})
      })();
    }
  },[])

  return (
    <Layout>
      <TextInput
        style={estilo.input}
        placeholder='Defina o Título'
        placeholderTextColor='#546574'
        onChangeText={(texto) => mudar('titulo', texto)}
        value={tarefa.titulo}
      />
      <TextInput
        style={estilo.input}
        placeholder='Defina a Descrição'
        placeholderTextColor='#546574'
        onChangeText={(texto) => mudar('descricao', texto)}
        value={tarefa.descricao}
      />
      {
        !edicao ? (
          
      <TouchableOpacity
        style={estilo.botaoSalvar}
        onPress={enviar}
        >
       <Text style={estilo.textoBotao}>Salvar Tarefa</Text>
      </TouchableOpacity>
        ): (
      <TouchableOpacity
        style={estilo.botaoAtualizar}
        onPress={enviar}
      >
       <Text style={estilo.textoBotao}>Atualizar Tarefa</Text>
      </TouchableOpacity>
        )}
    </Layout>
  )
}

export default Form