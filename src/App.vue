<template>
  <div class="wrapper">
    <div class="list">
      <h1>Dear Santa,</h1>
      <h3>This year I have been very good. Here is my wish list:</h3>
      <input
        type="text"
        name="wishlistItem"
        placeholder="Write your wish here"
        v-model="wishlistItem"
        @keyup.enter="addToWishList"
      />
      <button class="add-item-btn" @click="addToWishList">Add item</button>
      <section class="list-items">
        <wish-list-item
          v-for="(item, index) in wishList"
          :key="index"
          :id="index"
          :listItem="item"
          @deleteItem="removeFromList(index)"
        ></wish-list-item>
      </section>
    </div>
    <div class="send">
      <h3>Merry Christmas! Love from...</h3>
      <input
        type="text"
        name="name"
        v-model="name"
        placeholder="Write your name"
      />
      <button class="send-btn">
        send to santa
      </button>
    </div>
  </div>
</template>

<script>
import WishListItem from "./components/WishListItem.vue";

export default {
  data() {
    return {
      wishlistItem: "",
      wishList: [],
      name: "",
    };
  },
  components: {
    WishListItem,
  },
  methods: {
    addToWishList() {
      this.wishList.push(this.wishlistItem);
      this.wishlistItem = "";
    },
    removeFromList(id) {
      this.wishList.splice(id, 1);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body,
html {
  height: 100%;
  font-family: "Gochi Hand", cursive;
  color: rgb(146, 19, 19);
}
.wrapper {
  height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
  background-image: url("../public/images/scroll.png");
  background-repeat: no-repeat;
  background-size: 98% 98%;
  background-position: center;
}

.list {
  width: 60%;
  margin-left: 30%;
  padding-top: 50px;
  height: 74vh;
  display: flex;
  flex-direction: column;
}

.send {
  width: 60%;
  margin-top: 4rem;
  margin-left: 30%;
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 3rem;
}

h3 {
  font-size: 1.7rem;
}

input {
  background: none;
  border: none;
  border-bottom: 2px solid rgb(146, 19, 19);
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  font-size: 1.7rem;
  font-family: "Gochi Hand", cursive;
}

input::placeholder {
  font-size: 1.2rem;
}

input:focus {
  outline: 2px solid rgb(146, 19, 19);
}

button {
  background-color: rgb(146, 19, 19);
  color: white;
  padding: 0.4rem 0.7rem;
  font-size: 1rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-family: "Gochi Hand", cursive;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  display: flex;
  align-self: flex-end;
  margin-top: 0.2rem;
}

button:hover {
  background-color: rgb(98, 20, 20);
}

.list-items {
  height: 100%;
  overflow-x: hidden;
}
</style>
