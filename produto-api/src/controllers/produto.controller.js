const db = require('../config/database')

// ==> Método responsável por criar um novo 'Produto':
exports.createProduto = async(req, res) => {
  const { nome, quantidade, preco, data_registro, produto_registro } = req.body
  const { rows } = await db.query(
    'INSERT INTO produto (nome, quantidade, preco, data_registro, produto_registro) VALUES ($1, $2, $3, $4, $5)',
    [nome, quantidade, preco, data_registro, produto_registro]
  )

  res.status(201).send({
    message: 'Produto Criado Com Sucesso!!',
    body: {
      produto: { nome, quantidade, preco, data_registro, produto_registro }
    }
  })
}

// ==> Método responsável por listar todos os 'Produtos':
exports.listProdutos = async(req, res) => {
  const response = await db.query(
    `SELECT produto_id, nome,  quantidade, preco, produto_registro, to_char(data_registro, 'yyyy-MM-dd') as data_registro FROM produto ORDER BY nome asc`
  )
  res.status(201).send(response.rows)
}

// ==> Método responsável por listar um 'Produto' por ID:
exports.produtoById = async (req, res) => {
  const { id } = req.params;
  const { rows } = await db.query(
    `SELECT produto_id, nome,  quantidade, preco, produto_registro, to_char(data_registro, 'yyyy-MM-dd') as data_registro FROM produto WHERE produto_id = $1`,
    [id]
  );
  if (!rows.length) {
    throw 'produto_not_found';
  }
  res.status(200).send(rows[0]);
};

// ==> Método responsável por atualizar um 'Produto' por ID:
exports.updateProdutoById = async (req, res) => {
  const { id } = req.params;
  const { nome, quantidade, preco, data_registro, produto_registro } = req.body;
  const { rows } = await db.query(
    `UPDATE produto SET nome = $1, quantidade = $2, preco = $3, data_registro = $4, produto_registro = $5 WHERE produto_id = $6`,
    [nome, quantidade, preco, data_registro, produto_registro, id]
  );
  res.status(200).send({
    message: "Produto Atualizado Com Sucesso!!"
  });
};

// ==> Método responsável por excluir/deletar um 'Produto' por ID:
exports.deleteProdutoById = async(req, res) => {
  const produtoId = req.params.id
  await db.query(
    'DELETE FROM produto WHERE produto_id = $1',
    [produtoId]
  )

  res.status(200).send({
    message: 'Produto Excluido Com Sucesso!!'
  })
}