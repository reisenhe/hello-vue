<template>
  <div>
    <ProductList :list="productList" />
    <div style="border-top: 1px solid #444"></div>
    <CartList :productList="productList"
      :cartList="cartList"/>
  </div>
</template>

<script>
import event from './event'
import ProductList from './ProductList/index'
import CartList from './CartList/index'
export default {
  components: {
    ProductList,
    CartList,
  },
  mounted() {
    this.productList = [
      {
        id: 1,
        name: '商品1',
        price: 10,
        status: 1
      },
      {
        id: 2,
        name: '商品2',
        price: 15,
        status: 1
      },
      {
        id: 3,
        name: '商品3',
        price: 20,
        status: 1
      },
    ]
    this.cartList = [
      {
        id: 1,
        number: 1
      }
    ],

    event.$on('onAdd', this.onAdd)
    event.$on('onReduce', this.onReduce)
  },
  destroyed() {
    event.$off('onAdd')
    event.$off('onReduce')
  },
  data() {
    return {
      productList: [],
      cartList: []
    }
  },
  methods: {
    onAdd(product) {
      let item = this.cartList.find(item => item.id === product.id)
      if (item) {
        item.number ++
      } else {
        this.cartList.push({
          id: product.id,
          name: product.name,
          price: product.price,
          number: 1
        })
      }
    },
    onReduce(product) {
      let item = this.cartList.find(item => item.id === product.id)

      item.number --
      if (item.number <= 0) {
        this.cartList = this.cartList.filter(newItem => newItem.id !== item.id)
      }
    }
  },
}
</script>