<template>
  <div id="app">
    <ProductListOne></ProductListOne>
    <ProductListTwo></ProductListTwo>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne'
import ProductListTwo from './components/ProductListTwo'

export default {
  name: 'App',
  components: {
    ProductListOne, ProductListTwo
  }
}
</script>

<style>
body{
  color: #555;
}
</style>
