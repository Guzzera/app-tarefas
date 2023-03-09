import { conectar } from '../BancoDados';

export const getTarefas = async (req, ret) => {
    const conexao = await conectar();
    const [rows] = await conexao.query("SELECT * FROM tarefas_bd");
    ret.json(rows);
};

export const getTarefa = async (req, ret) => {
    const conexao = await conectar();
    const [rows] = await conexao.query("SELECT * FROM tarefas_bd WHERE id =?", [
        req.params.id
    ]);

    ret.json(rows[0]);
};

export const getTarefaCount = async (req, ret) => {
    const conexao = await conectar();
    const [rows] = await conexao.query("SELECT COUNT(*) FROM tarefas_bd");
    ret.json(rows[0]["COUNT (*)"]);
};

export const saveTarefa = async (req, ret) => {
    const conexao = await conectar();
    const [resultado] = await conexao.query("INSERT INTO tarefas_bd(titulo, descricao) VALUES (?,?)",[
        req.body.titulo,
        req.body.descricao
    ]);
    ret.json({
        id: resultado.insertId,
        ...req.body,
    });
};

export const deleteTarefa = async (req, ret) => {
    const conexao = await conectar();
    await conexao.query("DELETE FROM tarefas_bd WHERE id = ?", [
        req.params.id,
    ]);
    ret.sendStatus(204);
};

export const updateTarefa = async (req, ret) => {
    const conexao = await conectar();
    await conexao.query("UPDATE tarefas_bd SET ? WHERE id = ?", [
        req.body,
        req.params.id
    ]);
    ret.sendStatus(204)
};