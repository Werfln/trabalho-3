<template>
  <div class="row justify-content-center">
    <h3 class="text-center">Produtos</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="text-center">Nome</th>
          <th class="text-center">Quantidade</th>
          <th class="text-center">Preço</th>
          <th class="text-center">Data de Registro</th>
          <th class="text-center">Registro do Produto</th>
          <th class="text-center">Editar</th>
          <th class="text-center">Excluir</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <!-- Percorre a variavel produtos e adiociona os produtos na tabela -->
        <tr v-for="produto in produtos" :key="produto.produto_id">
          <td>{{ produto.nome }}</td>
          <td>{{ produto.quantidade }}</td>
          <td>{{ produto.preco }}</td>
          <td>{{ produto.data_registro }}</td>
          <td>{{ produto.produto_registro }}</td>
          <td>
            <!-- Redireciona para a pagina de edição passando o ID no produto selecionado -->
            <router-link
              :to="{ name: 'edit', params: { id: produto.produto_id } }"
              class="btn btn-success"
            >
              Editar
            </router-link>
          </td>
          <td>
            <button @click="removeProduto(produto.produto_id)" class="btn btn-danger">
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import ProdutoService from '../services/ProdutoService';

export default {
  data() {
    // Quando carregar a página chama o metodo listAllProdutos()
    onMounted(() => {
      this.listAllProdutos();
    });

    return {
      produtos: [],
    };
  },
  methods: {
    async listAllProdutos() {
      // Faz a chamada para pegar todos os produtos
      const response = await ProdutoService.getProdutos();
      // Variavel produtos recebe os dados do BD
      this.produtos = response;
    },
    async removeProduto(id) {
      // Faz a chamada para deletar produto
      await ProdutoService.deleteProduto(id);
      // Redireciona para a página de listar
      this.listAllProdutos();
    },
  },
};
</script>

<style></style>
