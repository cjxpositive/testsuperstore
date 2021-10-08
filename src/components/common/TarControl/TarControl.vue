<template>
<div id="tar-con">
   <div v-for="(item,index) in title" :key="item" :class="{active:pitchIndex===index}"
        class="tab-con-item" @click="btnClick(index)">
     <span>{{item}}</span>
   </div>
</div>
</template>

<script>
export default {
  name: "TarControl",
  data(){
    return{
      pitchIndex:0,
      index1:0
    }
  },
  methods:{
    btnClick(index){
      this.pitchIndex=index;
      this.$emit('tabClick',index)
    }
  },
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
#tar-con{
 display: flex;
  justify-content: space-around;
  width: 324px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  font-size: 14px;
}

.active{
  /**/
  color:pink;
  border-bottom: 3px solid pink;
}

span{
  padding: 0 10px;
}
</style>
