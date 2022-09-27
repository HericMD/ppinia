<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter";
export default {
  computed: {
    ...mapStores(useCounterStore),
    ...mapState(useCounterStore, ["doubleCount"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["decrement"]),
  },
};
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ doubleCount }}
    <button @click="decrement">-</button>
  </div>
</template>

<style></style>
