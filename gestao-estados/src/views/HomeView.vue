<script>
import { mapStores, mapState, mapActions } from "pinia";

import { useCounterStore } from "@/stores/counter";

export default {
  data() {
    return {
      nome: "Heric",
      nome_temp: "",
    };
  },
  computed: {
    ...mapStores(useCounterStore),
    ...mapState(useCounterStore, ["count", "nome_completo"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["increment", "altera_nome"]),
  },
};
</script>

<template>
  <main>
    <h1>Main page</h1>
    <input type="text" v-model="nome_temp" />
    <button @click="altera_nome(nome_temp)">Salvar</button>
    <hr />
    {{ nome }} --- {{ nome_completo }}
    <hr />
    {{ count }} <button @click="increment">+</button>
  </main>
</template>
