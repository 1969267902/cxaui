<template>
  <div class="list">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class List extends Vue {}
</script>

<style lang='scss' scoped>
.list {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
}
</style>
