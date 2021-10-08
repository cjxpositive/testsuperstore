<template>
  <div class="toast" v-show="toastShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {
      message:'',
      toastShow: false
    }
  },
  // props:{
  //   message: {
  //     type: String,
  //     default: ''
  //   },
  //   toastShow:{
  //     type:Boolean,
  //     default: false
  //   }

  // },
  methods:{
    show(message,duration){
      this.toastShow = true;
      this.message = message;
      setTimeout(()=>{
        this.toastShow = false;
        this.message='';
      },duration)
    }
    // this.toastShow =true
    // this.message=res
    // setTimeout(()=>{
    //   this.toastShow=false
    //   this.message=''
    // },2000)
  }
}
</script>

<style scoped lang="less">
.toast {
  position: fixed;
  width: 50%;
  height: 28px;
  left: 25%;
  top: 60%;
  text-align: center;
  line-height: 28px;
  font-size: 14px;
  background-color: black;
//这只透明度
  opacity: 0.9;
  color: white;
  z-index:11;
}
</style>
