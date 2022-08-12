<template>
  <div class="not-found">
    <div>404</div>
    <NuxtLink to="/">走丢了，返回主页</NuxtLink>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.not-found {
  height: 90vh;
  width: 100%;
  margin: auto;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
