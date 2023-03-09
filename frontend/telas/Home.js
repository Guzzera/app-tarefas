import React, { useEffect, useState } from 'react';
import { getTarefas } from '../api';
import ListaTarefa from '../componentes/ListaTarefa';
import Layout from '../componentes/Layout';


const Home = () => {

    const [ tarefas, setTarefas ] = useState([]);

    const carregaTarefas = async () => {
      const dados = await getTarefas();
      setTarefas(dados)
    }

    useEffect(() => {
      carregaTarefas();
    }, [])

  return (
    <Layout>
     <ListaTarefa tarefas={tarefas}/>
    </Layout>
  )
}

export default Home