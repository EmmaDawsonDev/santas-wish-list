<template>
  <div class="wrapper2">
    <img src="../../public/images/letter.png" alt="envelope image" />
    <section class="address">
      <p>To Santa,</p>
      <p>123 Elf Road</p>
      <p>The North Pole</p>
    </section>
    <section class="name">
      <p>Love name</p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper2 {
  height: 100vh;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;
  place-items: center;

  color: rgb(146, 19, 19);
}

img {
  width: 70%;
  max-width: 1000px;
  grid-row: 1;
  grid-column: 1;
}
section {
  margin-top: 5rem;
  grid-row: 1;
  grid-column: 1;
  text-align: center;
}

.address {
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
}

.name {
  margin-top: 500px;
}

p {
  font-size: 3rem;
}

.name p {
  font-size: 2.5rem;
}

@media (max-width: 1300px) {
  .name {
    margin-top: 40%;
  }
}

@media (max-width: 1000px) {
  img {
    width: 80%;
  }
}

@media (max-width: 800px) {
  img {
    width: 95%;
  }

  .name {
    margin-top: 50%;
  }
  p {
    font-size: 2.5rem;
  }

  .name p {
    font-size: 2rem;
  }
}

@media (max-width: 540px) {
  p {
    font-size: 2rem;
  }

  .name p {
    font-size: 1.5rem;
  }
}

@media (max-width: 430px) {
  p {
    font-size: 1.2rem;
  }
  .address {
    padding: 0.2rem 0.5rem;
  }
  .name p {
    font-size: 1rem;
  }
  .name {
    margin-top: 55%;
  }
}
</style>
