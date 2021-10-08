<template>
<!--     判断值是否为空，为空则不执行 -->
    <div v-if="Object.keys(param).length !== 0" class="params-wrap">
      <div v-for="(item, index) in param.rule">
        <div v-for="(list, index) in item" class="flex">
          <div v-for="(listitem, index) in list" class="rule-list-item">
            {{listitem}}
          </div>
        </div>
      </div>
      <div v-for="(info, index) in param.info" :key="index" class="flex info-list-wrap">
        <div class="key">{{info.key}}</div>
        <div class="info-list-tit">{{info.value}}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props:{
    param:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped lang="less">
.params-wrap{
  border-top: 5px solid #eee;
}
 .flex{
   border-bottom: 3px solid #eee;
   margin-left: 11%;
 }
 .rule-list-item{
   width: 100%;
   display: flex;
   justify-content: space-between;
   font-size: 13px;
   color: black;
   padding-bottom: 4%;
   padding-top: 4%;
 }
 .info-list-wrap{
   font-size: 13px;
   color: black;
   padding-bottom: 4%;
   padding-top: 4%;
   margin-left: 11%;
   .key{
     width:25%;
   }
    .info-list-tit{
       margin-left: 11%;
       width: 60%;
       color:deeppink;
    }

 }
</style>
