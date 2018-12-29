<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="product in products">
        <span class="name">{{ product.name }}</span>
        <span class="price">${{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      products(){
        return this.$store.state.products;
      },
      // saleProducts(){
      //   return this.$store.getters.saleProducts;
      // }
    }
  }
</script>

<style scoped>
  #product-list-two{
    background-color: #d1e4ff;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, .2);
    margin-bottom: 30px;
    padding: 10px 10px;
  }
  #product-list-two ul{
    list-style: none;
    padding: 0;
  }
  #product-list-two ul li{
    margin-top: 10px;
    margin-right: 10px;
    padding: 10px;
    background-color: rgba(255, 255, 255, .7);
  }
  .price{
    font-weight: bold;
    color: #860ce8;
    display: block;
  }
</style>
