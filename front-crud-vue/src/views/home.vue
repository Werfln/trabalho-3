<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
          <h3>Adicionar Produto</h3>
      </div>
      <div class="card-body">
        <form
          v-on:submit.prevent="handleSubmitForm()"
        >
          <!-- NOME: -->
          <div class="form-group">
            <label class="font-weight-bold">Nome:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Insira o nome do produto"
              v-model="produto.nome"
            />
            <div class="alert"
              v-if="v$.nome.$error"
            >
              Nome é um campo requerido!!
            </div>
          </div>

          <!-- QUANTIDADE: -->
          <div class="form-group">
            <label class="font-weight-bold">Quantidade:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Insira a quantidade do produto"
              v-model="produto.quantidade"
            />
            <div class="alert"
              v-if="v$.quantidade.$error"
            >
              Quantidade é um campo requerido!!
            </div>
          </div>

          <!-- PREÇO: -->
          <div class="form-group">
            <label class="font-weight-bold">Preço:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Insira o preço do produto"
              v-model="produto.preco"
            />
            <div class="alert"
              v-if="v$.preco.$error"
            >
              Preço é um campo requerido!!
            </div>
          </div>

          <!-- DATA: -->
          <div class="form-group">
            <label class="font-weight-bold">Data:</label>
            <input
              type="date"
              class="form-control"
              v-model="produto.data_registro"
            />
            <div class="alert"
              v-if="v$.data_registro.$error"
            >
              Data é um campo requerido!!
            </div>
          </div>

          <!-- PRODUTO REGISTRO: -->
          <div class="form-group">
            <label class="font-weight-bold">Registro do Produto:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Insira o registro do produto"
              v-model="produto.produto_registro"
            />
            <div class="alert"
              v-if="v$.produto_registro.$error"
            >
              Registro do Produto: é um campo requerido!!
            </div>
          </div>

          <div class="form-group">
            <button
              @click="submitNewEmployee"
              class="btn btn-primary"
            >
              Adicionar Produto
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import ProdutoService from '../services/ProdutoService';

export default {
  setup() {
    const produto = reactive({
      nome: '',
      quantidade: '',
      preco: '',
      data_registro: '',
      produto_registro: '',
    });

    // Regras do Vuelidate
    const rules = computed(() => ({
      nome: { required },
      quantidade: { required },
      preco: { required },
      data_registro: { required },
      produto_registro: { required },
    }));

    // Verifica possíveis erros com o Vuelidate
    const v$ = useVuelidate(rules, produto);

    return {
      produto,
      v$,
    };
  },
  methods: {
    handleSubmitForm() {
    },

    async submitNewEmployee() {
      try {
        this.v$.$validate();
        // Se tiver erros não continua
        if (this.v$.$error) {
          return;
        }
        // Faz a chamada para adicionar produto
        await ProdutoService.createNewProduto(this.produto);
        // Se tudo der certo redireciona para página de listar
        this.$router.push({
          name: 'list',
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
  .alert {
    color: rgba(230, 7, 7, 0.863);
  }
</style>
