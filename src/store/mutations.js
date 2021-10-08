export default {
  addCounter(state,payload){
    payload.count++
  },
  addToCart(state,payload){
    //商品刚添加进来，属性为true
    payload.checked =true
    state.cartList.push(payload)
  }
}
