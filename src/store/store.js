import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      { name: "键盘", price: 200 },
      { name: "鼠标", price: 100 },
      { name: "耳机", price: 50 },
      { name: "硬盘", price: 40 }
    ]
  },
  getters: {
    saleProducts: (state) => {
      return state.products.map((product) => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2
        }
      });
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.map((product) => {
        product.price -= payload;
      });
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(function () {
        context.commit("reducePrice", payload);
      }, 1000);
    }
  }
});
