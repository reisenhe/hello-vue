<template>
  <div class="li">
      <div class="show-part">{{item.name}}-{{item.price}}</div>
      <div class="act-part">
          <button @click="addToCart">加入购物车</button>
      </div>
  </div>
</template>

<script>
import event from '../event'
export default {
    props: {
        item: Object
    },
    methods: {
        addToCart() {
            event.$emit('onAdd', this.item)
        }
    }
}
</script>

<style >
    .li{
        display: flex;
    }
    .show-part{
        flex: 1;
    }
</style>