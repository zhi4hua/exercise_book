// 自定义类，在 HTML 的 Body 追加显示的变量值。
function showValue() {
  this.myBody = null;
  this.total = 0;
}

// 类方法，功能为－追加变量致 Body 标签当中
showValue.prototype.app = function(value1, showIndex) {
  this.myBody = document.getElementsByTagName('body')[0];
  var myHr = document.createElement('hr');
  var myP = document.createElement('p');

  if(showTndex)
    myP.innerHTML = ++this.total;
  myP.innerHTML = myP.innerHTML + '&#9' + value1;
  this.myBody.appendChild(myHr);
  this.myBody.appendChild(myP);
  if (this.total % 2 == 1) {
    myP.style='background:gray';
  }
}
