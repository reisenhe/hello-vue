<template>
  <ul>
      <li v-for="item in list" :key="item.id">
          <ProductItem :item="item"/>
      </li>
  </ul>
</template>

<script>
import ProductItem from './ProductItem';
export default {
    components: {
        ProductItem
    },
    props: {
        list: Array
    }
}
</script>