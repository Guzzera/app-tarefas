import { conectar } from "../BancoDados";

export const getTarefas = async (req, res) => {
  const conexao = await conectar();
  const [rows] = await conexao.execute("SELECT * FROM tarefas");
  res.json(rows);
};

export const saveTarefa = async (req, res) => {
  try {
    const conexao = await conectar();
    const [resultado] = await conexao.execute(
      "INSERT INTO tarefas(titulo, descricao) VALUES (?, ?)",
      [req.body.titulo, req.body.descricao]
    );

    const novoUsuario = {
      id: resultado.insertId,
      ...req.body,
    };
    res.json(novoUsuario);
  } catch (error) {
    console.error(error);
  }
};

export const getTarefa = async (req, res) => {
  const conexao = await conectar();
  const rows = await conexao.execute("SELECT * FROM tarefas WHERE id = ?", [
    req.params.id,
  ]);
  res.json(rows[0][0]);
};

export const deleteTarefa = async (req, res) => {
  const conexao = await conectar();
  const result = await conexao.execute("DELETE FROM tarefas WHERE id = ?", [
    req.params.id,
  ]);
  console.log(result);

  res.sendStatus(204);
};

export const updateTarefa = async (req, res) => {
  const conexao = await conectar();
  await conexao.query("UPDATE tarefas SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  res.sendStatus(204);
};

export const getTarefaCount = async (req, res) => {
  const conexao = await conectar();
  const [rows] = await conexao.execute("SELECT COUNT(*) FROM tarefas");
  res.json(rows[0]["COUNT(*)"]);
};