// 自定义类，在 HTML 的 Body 追加显示的变量值。
function showValue() {
  this.myBody = null;
  this.total = 0;
}

// 类方法，功能为－追加变量致 Body 标签当中
showValue.prototype.app = function(value1, color, index) {
  this.myBody = document.getElementsByTagName('body')[0];
  var myHr = document.createElement('hr');
  var myP = document.createElement('p');

  if (typeof(index) == "number")
    this.total = index;
  if (index == undefined)
    myP.innerHTML = ++this.total + '&#9' + value1;
  else if (index == false)
    myP.innerHTML = value1;

  this.myBody.appendChild(myHr);
  this.myBody.appendChild(myP);
  if (this.total % 2 == 1) {
    if (color == undefined)
      myP.style='background:gray';
    else
      myP.style='background-color:' + color.toLowerCase();
  }
}

// 添加 "标签" 方法
// 将标签 femaleTag 添加到 标签 subTag
showValue.prototype.appendTag(femaleTag, subTag) {
  femaleTag.appendChild(subTag);
}

// 添加 "文字" 方法
// 将字段 text 变量,添加到标签 femaleTag 当中
showValue.prototype.appendText(femaleTag, text) {
  femaleTag.innerHTML += text.toString();
}