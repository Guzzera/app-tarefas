import { Router } from 'express';
import { deleteTarefa, getTarefa, getTarefaCount, getTarefas, saveTarefa, updateTarefa } from '../controllers/TarefaController';

const rota = Router()

/**
 * @swagger
 * tags:
 *  name: Tarefas
 *  description: endpoint Tarefas
 */

/**
 * @swagger
 * /tarefas:
 *  get:
 *    summary: Capta todas as tarefas
 *    tags: [Tarefas]
 */
rota.get('/tarefas', getTarefas);

/**
 * @swagger
 * /tarefas/count:
 *  get:
 *    summary: Capta o total de tarefas
 *    tags: [Tarefas]
 */
rota.get('/tarefas/count', getTarefaCount);

/**
 * @swagger
 * /tarefas:
 *  get:
 *    summary: Capta a tarefa pelo id
 *    tags: [Tarefas]
 */
rota.get('/tarefas/:id', getTarefa);

/**
 * @swagger
 * /tarefas:
 *  post:
 *    summary: Salva uma nova tarefa
 *    tags: [Tarefas]
 */
rota.post('/tarefas', saveTarefa);

/**
 * @swagger
 * /tarefas:
 *  delete:
 *    summary: Deleta uma tarefa
 *    tags: [Tarefas]
 */
rota.delete('/tarefas/:id', deleteTarefa);

/**
 * @swagger
 * /tarefas:
 *  put:
 *    summary: Atualiza a tarefa pelo id
 *    tags: [Tarefas]
 */
rota.put('/tarefas/:id', updateTarefa)

export default rota