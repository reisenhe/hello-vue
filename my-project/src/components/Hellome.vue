<template>
  <div class="hellome">
    <h1>{{ msg }}</h1>
    <p v-text="title"></p>
    <button v-on:click="clearStore" >点击清空</button>
    <input type="text" v-model='newItems' @keyup.enter='addNew'>
    <ul>
      <li v-for="(item, index) in items" v-bind:class = "{ finish: item.isFinished }" v-on:click = "doThis(item)">{{ index }} - {{ item.label }}</li>
    </ul>
  </div>
</template>

<script>
import storeM from '../store'
export default {
  name: 'hellome',
  data () {
    return {
      msg: '欢迎来到magnet:?xt=urn:btih:',
      title: '这是一个备忘录，点击切换完成状态，打字输入新事项',
      items: storeM.fetch(),
      newItems: ' '
    }
  },
  watch: {
    items: {
      handler: function (items) {
        storeM.save(items)
      },
      deep: true
    }
  },
  methods: {
    doThis: function (item) {
      item.isFinished = !item.isFinished
    },
    addNew: function () {
      this.items.push({label: this.newItems, isFinished: false})
      this.newItems = ' '
    },
    clearStore: function () {
      this.items = []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
button{ font-size: 12px; line-height: 20px; }
.finish{ text-decoration: line-through; }
</style>
