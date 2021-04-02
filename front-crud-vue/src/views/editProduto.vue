<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Editar Produto</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateFormProduto()">

          <div class="form-group">
            <label class="font-weight-bold">Nome:</label>
            <input
              type="text"
              class="form-control"
              v-model="produtoForm.nome"
            >
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Quantidade:</label>
            <input
              type="text"
              class="form-control"
              v-model="produtoForm.quantidade"
            >
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Preço:</label>
            <input
              type="number"
              class="form-control"
              v-model="produtoForm.preco"
            >
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Data de Registro</label>
            <input
              type="date"
              class="form-control"
              v-model="produtoForm.data_registro"
            >
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Registro do Produto</label>
            <input
              type="text"
              class="form-control"
              v-model="produtoForm.produto_registro"
            >
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-primary">
              Editar Produto
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import ProdutoService from '../services/ProdutoService';

export default {
  data() {
    // Quando carregar a página chama o metodo getProdutoById()
    onMounted(() => {
      this.getProdutoById();
    });

    return {
      produtoForm: {},
    };
  },
  methods: {
    async getProdutoById() {
      const { id } = this.$route.params;
      // Faz a chamada para pegar os dados do produto selecionado pelo id
      const response = await ProdutoService.getProdutoId(id);
      // Variavel produtoForm recebe os dados do BD
      this.produtoForm = { ...response };
    },

    async updateFormProduto() {
      // Faz a chamada para atualizar um produto
      await ProdutoService.updateProduto(this.produtoForm);
      // Se tudo der certo redireciona para página de listar
      this.$router.push({
        name: 'list',
      });
    },
  },
};
</script>
