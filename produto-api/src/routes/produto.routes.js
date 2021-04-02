const router = require('express-promise-router')()
const produtoController = require('../controllers/produto.controller')

// ==> Definindo as rotas do CRUD = 'Employee'

// ==> Rota responsável por criar um novo Produto: (POST): localhost:3000/api/produtos/
router.post('/produtos', produtoController.createProduto)

// ==> Rota responsável por listar todos os Produtos: (GET): localhost:3000/api/produtos/
router.get('/produtos', produtoController.listProdutos)

// ==> Rota responsável por listar um produto por ID: (GET): localhost:3000/api/produtos/id
router.get('/produtos/:id', produtoController.produtoById)

// ==> Rota responsável por atualizar um produto por ID: (PUT): localhost:3000/api/produtos/id
router.put('/produtos/:id', produtoController.updateProdutoById)

// ==> Rota responsável por excluir/deletar um produto por ID: localhost:3000/api/produtos/id
router.delete('/produtos/:id', produtoController.deleteProdutoById)

module.exports = router