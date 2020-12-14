<template>
  <section>
    <p>{{ listItem }}</p>
    <span @click="removeItem(id)">X</span>
  </section>
</template>

<script>
export default {
  props: {
    listItem: String,
    id: Number,
  },
  methods: {
    removeItem(index) {
      this.$emit("deleteItem", index);
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  width: 75%;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
section:first-of-type {
  margin-top: 0.5rem;
}

p,
span {
  font-size: 1.7rem;
}
span:hover {
  color: rgb(98, 20, 20);
  cursor: pointer;
}

@media (max-width: 420px) {
  p,
  span {
    font-size: 1.2rem;
  }
}
</style>
