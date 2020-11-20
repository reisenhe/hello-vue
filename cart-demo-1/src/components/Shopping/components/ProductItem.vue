<template>
  <div class="li">
      <div class="show-part">{{item.name}}-{{item.price}}</div>
      <div class="act-part">
          <button @click="addToCart">加入购物车</button>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        item: Object
    },
    methods: {
        addToCart() {
            this.$emit('add', this.item.id)
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