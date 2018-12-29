<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{ product.name }}</span>
        <span class="price">${{ product.price }}</span>
      </li>
    </ul>
    <button @click="reducePrice(4)">商品降价</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    computed: {
      // products(){
      //   return this.$store.state.products;
      // },
      // saleProducts(){
      //   return this.$store.getters.saleProducts;
      // }
      ...mapGetters([
        "saleProducts"
      ])
    },
    methods: {
      // reducePrice(amout){
      //   // this.$store.commit("reducePrice");
      //   this.$store.dispatch("reducePrice", amout);
      // }
      ...mapActions([
        "reducePrice"
      ])
    }
  }
</script>

<style scoped>
  #product-list-one{
    background-color: #fff8b1;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, .2);
    margin-bottom: 30px;
    padding: 10px 10px;
  }
  #product-list-one ul{
    padding: 0;
  }
  #product-list-one ul li{
    display: inline-block;
    margin-top: 10px;
    margin-right: 10px;
    padding: 10px;
    background-color: rgba(255, 255, 255, .7);
  }
  .price{
    font-weight: bold;
    color: #e8800c;
  }
</style>
