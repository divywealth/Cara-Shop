import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    section1: true,
    section2: false,
    showcompleteNumbers: false,
    Products: [
      {
        id: 1,
        img: 'f1.jpeg',
        Designer: 'Normal-Shirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 85,
        size: '',
        quantity: ''
      },
      {
        id: 2,
        img: 'f2.jpeg',
        Designer: 'Normal-Shirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 50,
        size: '',
        quantity: ''
      },
      {
        id: 3,
        img: 'f3.jpeg',
        Designer: 'Normal-Shirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 80,
        size: '',
        quantity: ''
      },
      {
        id: 4,
        img: 'f4.jpeg',
        Designer: 'Normal-Shirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 40,
        size: '',
        quantity: ''
      },
      {
        id: 5,
        img: 'f5.jpeg',
        Designer: 'Normal-Shirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 70,
        size: '',
        quantity: ''
      },
      {
        id: 6,
        img: 'f6.jpeg',
        Designer: 'Normal-Shirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 60,
        size: '',
        quantity: ''
      },
      {
        id: 7,
        img: 'f7.jpeg',
        Designer: 'Normal-Shirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 79,
        size: '',
        quantity: ''
      },
      {
        id: 8,
        img: 'f8.jpeg',
        Designer: 'Normal-Shirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 79,
        size: '',
        quantity: ''
      },
      {
        id: 9,
        img: 'nf1.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 60,
        size: '',
        quantity: ''
      },
      {
        id: 10,
        img: 'nf2.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 80,
        size: '',
        quantity: ''
      },
      {
        id: 11,
        img: 'nf3.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 50,
        size: '',
        quantity: ''
      },
      {
        id: 12,
        img: 'nf4.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 20,
        size: '',
        quantity: ''
      },
      {
        id: 13,
        img: 'nf5.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: '$20',
        size: '',
        quantity: ''
      },
      {
        id: 14,
        img: 'nf6.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 20,
        size: '',
        quantity: ''
      },
      {
        id: 15,
        img: 'nf7.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 20,
        size: '',
        quantity: ''
      },
      {
        id: 16,
        img: 'nf8.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 20,
        size: '',
        quantity: ''
      },
    ],


    Featuredproducts: [
      {
        id: 1,
        img: 'f1.jpeg',
        Designer: 'Normal-Shirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 85,
        size: '',
        quantity: ''
      },
      {
        id: 2,
        img: 'f2.jpeg',
        Designer: 'Normal-Shirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 50,
        size: '',
        quantity: ''
      },
      {
        id: 3,
        img: 'f3.jpeg',
        Designer: 'Normal-Shirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 80,
        size: '',
        quantity: ''
      },
      {
        id: 4,
        img: 'f4.jpeg',
        Designer: 'Normal-Shirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 40,
      },
      {
        id: 5,
        img: 'f5.jpeg',
        Designer: 'Normal-Shirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 70,
        size: '',
        quantity: ''
      },
      {
        id: 6,
        img: 'f6.jpeg',
        Designer: 'Normal-Shirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 60,
        size: '',
        quantity: ''
      },
      {
        id: 7,
        img: 'f7.jpeg',
        Designer: 'Normal-Shirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 79,
        size: '',
        quantity: ''
      },
      {
        id: 8,
        img: 'f8.jpeg',
        Designer: 'Normal-Shirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 79,
        size: '',
        quantity: ''
      },
    ],


    Newarrival: [
      {
        id: 9,
        img: 'nf1.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 60,
        size: '',
        quantity: ''
      },
      {
        id: 10,
        img: 'nf2.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 80,
        size: '',
        quantity: ''
      },
      {
        id: 11,
        img: 'nf3.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 50,
        size: '',
        quantity: ''
      },
      {
        id: 12,
        img: 'nf4.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 20,
        size: '',
        quantity: ''
      },
      {
        id: 13,
        img: 'nf5.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 20,
        size: '',
        quantity: ''
      },
      {
        id: 14,
        img: 'nf6.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 20,
        size: '',
        quantity: ''
      },
      {
        id: 15,
        img: 'nf7.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 20,
        size: '',
        quantity: ''
      },
      {
        id: 16,
        img: 'nf8.jpeg',
        Designer: 'Normal-tShirt',
        Name: 'Cartoon Astronaut T-shirt',
        price: 20,
        size: '',
        quantity: ''
      },
    ],

    Carts: [],
    shippingFee: 0,
    cartTotals: 0
  },
  getters: {
    cartTotals(state) {
      for(let i=0; i<state.Carts.length; i++) {
        state.cartTotals += state.Carts[i].price
      }
      return state.cartTotals
    },
    shippingFee(state) {
      if(state.cartTotals >= 1 ) {
        state.shippingFee = 200
      }
      return state.shippingFee
    },
    totals(state) {
      return state.cartTotals + state.shippingFee
    }

  },
  mutations: {
    showSection2(state) {
      state.section1 = false
      state.section2 = true
    },
    showSection(state) {
      state.section1 = true
      state.section2 = false
    },
    AddToCart(state, product) {
      state.Carts.push(product)
      console.log(state.Carts)
    },
    handleSubmit(state) {

    },
    CancelFromCart(state, index) {
      state.Carts.splice(index,1)
    }
  },
  actions: {
  },
  modules: {
  }
})
