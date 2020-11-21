<template>
    <div>
        <CartItem v-for="item in list" 
            :key="item.id" 
            :item="item"/>
        <div>总价: {{totalPrice}}</div>
    </div>
</template>

<script>
import CartItem from './CartItem'
export default {
    props: {
        productList: Array,
        cartList: Array
    },
    components: {
      CartItem
    },
    computed: {
        list() {
            return this.cartList.map(product => {
                let prd = this.productList.find(prd => prd.id === product.id)
                return {
                    ...product,
                    name: prd.name,
                    price: prd.price
                }
            })
        },
        totalPrice() {
            return this.list.reduce((total, item)=> {
                return Math.round((total + (item.number * item.price)) * 100) / 100
            }, 0)
        }
    },
}
</script>