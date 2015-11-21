// 自定义类，在 HTML 的 Body 追加显示的变量值。
function showValue() {
  this.myBody = null;
  this.total = 0;
}

// 类方法，功能是将参数 value1 值显示在页面.
showValue.prototype.app = function(value1) {
  this.myBody = document.getElementsByTagName('body')[0];
  var myHr = document.createElement('hr');
  var myP = document.createElement('p');

  // if(showTndex == true)
  //   myP.innerHTML = ++this.total;
  myP.innerHTML = ++this.total + '&#9' + value1;
  this.myBody.appendChild(myHr);
  this.myBody.appendChild(myP);
  if (this.total % 2 == 1) {
    myP.style='background:gray';
  }
}
