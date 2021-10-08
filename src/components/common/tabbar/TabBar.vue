<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",

}
</script>

<style scoped>
#tab-bar{
  position:fixed;
  display: flex;
  background-color:white;
  left: 0;
  right: 0;
  bottom: 0;
  /*  设置阴影*/
  box-shadow:0 -2px 1px rgba(0,0,0,0.1);
}


</style>
