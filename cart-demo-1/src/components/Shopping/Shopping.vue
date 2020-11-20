<template>
  <div>
    <ProductList :list="productList"
      @add="onAdd" />
    <CartList :list="cartList"/>
    <div>总价: {{totalPrice}}</div>
  </div>
</template>

<script>
import ProductList from './components/ProductList'
import CartList from './components/CartList'
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
  },
  data() {
    return {
      productList: [],
      cartList: [],
      totalPrice: 0
    }
  },
  methods: {
    onAdd(id) {
      console.log('get', id)
    }
  },
}
</script>