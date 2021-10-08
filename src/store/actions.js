export default {
  addCart1(context,payload){
    //查找之前数组中是否有该商品
    return new Promise((resolve,reject)=>{
      let oldProduct = context.state.cartList.find(item=>item.iid ===payload.iid)
      if(oldProduct){
        context.commit('addCounter',oldProduct)
        resolve('当前商品数量加一')
      }else{
        payload.count=1
        context.commit('addToCart',payload)
        resolve('商品添加成功')
      }
    })
  }
}
