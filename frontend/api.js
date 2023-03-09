const API = 'http://192.168.1.2:3000/tarefas'

export const getTarefas = async () => {
        const ret = await fetch(API)
        return await ret.json()
}

export const getTarefa = async (id) => {
        const ret = await fetch(`${API}/${id}`);
        return await ret.json();
}

export const salvarTarefa = async (novaTarefa) => {
  const ret = await fetch(API, {
     method: 'POST',
     headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
     body: JSON.stringify(novaTarefa)
   });
   return await ret.json();
};

export const deleteTarefa = async (id) => {
   await fetch(`${API}/${id}`, {
      method: 'DELETE',
   });
};

export const updateTarefa = async(id, novaTarefa) => {
   await fetch(`${API}/${id}`, {
      method: 'PUT',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify(novaTarefa)
   });
}