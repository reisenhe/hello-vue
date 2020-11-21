<template>
  <div class="li">
      <div class="show-part">{{item.name}}({{item.number}})</div>
      <div class="act-part">
          <button @click="add">增加</button>
          <button @click="reduce">减少</button>
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
        add() {
            event.$emit('onAdd', this.item)
        },
        reduce() {
            event.$emit('onReduce', this.item)
        }
    },
}
</script>