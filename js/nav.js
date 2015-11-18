/* 作者:志华
 * ---------
 * 时间:2015/11/5 PM
 */

// 主函数, 已经完成显示二级菜单背景的功能,但作者希望重写.
// window.onload = function() {
// 	var myUl = document.getElementsByTagName('ul')[1];
// 	var myLi = myUl.getElementsByTagName('li');

// 	for(var i = 0; i < myLi.length; ++i) {
// 		var carryOut = true;
// 		var childUl = myLi[i].getElementsByTagName('ul');

// 		// 如果没有子菜单不执行
// 		if(!childUl) {
// 			alert('没有子菜单框');
// 			break;
// 		}
// 		// 如果是最后一个不执行
// 		if(i == myLi[i].length - 1) {
// 			carryOut = false;
// 		}
// 		// 如果变量 carryOut 值为 false 不执行
// 		if (!carryOut) {
// 			break;
// 		};
// 			myLi[i].onmouseover = function() {
// 				var ta = document.getElementsByTagName('p')[1];
// 				ta.style.display = 'block';
// 			}
// 			myLi[i].onmouseout = function() {
// 				document.getElementsByTagName('p')[1].style.display = 'none';
// 			}
// 			continue;
// 	}
// }

// 网页加载完后调用自定义功能.
window.onload = init;

function init() {
	var myNav = document.getElementsByTagName('ul')[1];
	var myNavLi = myNav.getElementsByTagName('li');

	for(var i = 0; i < myNavLi.length; ++i) {
		var childli = myNavLi[i];
		childli.onmouseover = function() {
			document.getElementsByTagName('p')[1].style.display = 'block';
			var childUl = returnChildTagEntry(this, 'ul')[0];
			var childLi2 = returnChildTagEntry(childUl, 'li');
			// childUl.style.width = childLi2.length * this.style.width + 'px';
			// alert(this.style.paddingRight);
		}
		childli.onmouseout = function() {
			document.getElementsByTagName('p')[1].style.display = 'none';
			set(this, '');
		}
	}
}

// 计算对象内相应节点名为 node 后返回。
function sum(obj, node) {
	return obj.getElementsByTagName(node);
}

// 显示指定参数
function showTag(tag) {
	tag.style.display = 'block';
}

// 不显示指定参数
function hideTag(tag) {
	tag.style.display = 'none';
}

function set(value1, value2) {
	value1.style.background = value2;
}

// 返回标签 tag1 的子标签类型 childTag 的集合
function returnChildTagEntry(tag1, childTagType) {
	return tag1.getElementsByTagName(childTagType);
}