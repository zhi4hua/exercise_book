// 自定义类，在 HTML 的 Body 追加显示的变量值。
function showValue() {
  this.myBody = null;
  this.total = 0;
  this.index = 1;
  this.bgColor = 'gray';
}

// 类方法，功能为－追加变量致 Body 标签当中
showValue.prototype.app = function(value1, color, index1) {
  this.myBody = document.getElementsByTagName('body')[0];
  var myHr = document.createElement('hr');
  var myP = document.createElement('p');
  var text = this.index + '. ';

  if (typeof(index) == 'number')
  	this.index = parseInt(index);
  else if (index1 == false)
  	text = '';
  if (this.total % 2 != 0)
  	this.appendTag(this.myBody, myHr);
  this.appendTag(this.myBody, myP);
  if (this.index % 2 == 1) {
    if (color != undefined)
    	this.bgColor = color;
    myP.style.backgroundColor = this.bgColor;
  }
  myP.innerHTML = text + value1.toString();
  ++ this.index;
  ++ this.total;
}

// 添加 "标签" 方法
// 将标签 femaleTag 添加到 标签 subTag
showValue.prototype.appendTag = function(femaleTag, subTag) {
  femaleTag.appendChild(subTag);
}

// 添加 "文字" 方法
// 将字段 text 变量,添加到标签 femaleTag 当中
showValue.prototype.appendText = function(femaleTag, text) {
  femaleTag.innerHTML += text.toString();
}
