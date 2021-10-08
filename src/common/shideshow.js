export function Move(obj, speed, target, attr, callback) {
  //关闭上一个定时器
  clearInterval(obj.timer);
  obj.time = (() => {
    let oldValue = parseInt(getStyle(obj, attr));
    console.log(oldValue)
    let newValue = parseInt(oldValue + speed + 'px');
    obj.style[attr] = newValue + 'px';
    if (newValue === target) {
      clearInterval(obj.time);
      callback() && callback;
    }
  }, 1000)

}

function getStyle(obj, name) {
  //该方法用于获取任意样式
  if (window.getComputedStyle) {
    return getComputedStyle(obj, null)[name];
  }
}
