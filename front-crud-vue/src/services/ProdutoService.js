import Api from './Api';

export default {
  /* Método responsável por criar um novo(a) 'Produto'
  * (POST): localhost/3000/api/produtos
  */
  async createNewProduto(produto) {
    try {
      const response = await Api().post('/produtos', produto);
      return response.data;
    } catch (e) {
      return console.log(e);
    }
  },

  /* Método responsável por listar todos os 'Produtos'
  * (GET): localhost/3000/api/produtos
  */
  async getProdutos() {
    try {
      const response = await Api().get('/produtos');
      return response.data;
    } catch (e) {
      return console.log(e);
    }
  },

  /* Método responsável por listar por id um 'Produto'
  * (GET): localhost/3000/api/produtos/:id
  */
  async getProdutoId(id) {
    try {
      const response = await Api().get(`/produtos/${id}`);
      return response.data;
    } catch (e) {
      return console.log(e);
    }
  },

  /* Método responsável por atualizar um 'Produto' por id
  * (PUT): localhost/3000/api/produtos/:id
  */
  async updateProduto(produto) {
    try {
      const id = produto.produto_id;
      const response = await Api().put(`/produtos/${id}`, produto);
      return response.data;
    } catch (e) {
      return console.log(e);
    }
  },

  /* Método responsável por excluir um 'Produto' por id
  * (DELETE): localhost/3000/api/produtos/:id
  */
  async deleteProduto(id) {
    try {
      const response = await Api().delete(`/produtos/${id}`);
      return response.data;
    } catch (e) {
      return console.log(e);
    }
  },

};
