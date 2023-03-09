const API = 'http://192.168.1.3:3000/tarefas'

export const getTarefas = async () => {
        const res = await fetch(API)
        return await res.json()
}