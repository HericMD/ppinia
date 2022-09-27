import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const nome_completo = ref("nome completo");
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  function decrement() {
    count.value--;
  }
  function altera_nome(nome) {
    nome_completo.value = nome;
  }

  return {
    nome_completo,
    altera_nome,
    count,
    doubleCount,
    increment,
    decrement,
  };
});
