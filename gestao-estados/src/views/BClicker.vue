<script>
export default {
  data() {
    return {
      dinheiros: 0,
    };
  },
};
</script>
<template>
  <button @click="dinheiros += 1">+</button>
  <h1>{{ dinheiros }}</h1>
  <button @click="dinheiros -= 10">auto-clicker (10 dinheiros)</button>
</template>
