
    window.onload = init;
      // 被轮播的图片所在的Div
      var myImgDivs = returnDivsByClass(document.getElementsByTagName('div'), 'object');
      // 设置轮播间隔时间
      var intervalTime = 8.2;
      // 每次轮播时长
      var carouselTime = 0.6;
      // 当前显示图片 Div 的编号
      var showDivId = 0;
      // 帧数
      var framesPerSecond = 100;
      // 测试代码,可随时删除
      // var console = new showValue();

    function init() {
      var Timer = startCarousel();
      myImgDivs = returnDivsByClass(document.getElementsByTagName('div'), 'object');
      var myBox = returnDivsByClass(document.getElementsByTagName('div'), 'box')[0];
      var carousel_buttons = myBox.getElementsByTagName('a');

      myBox.style.height = myImgDivs[0].getElementsByTagName('img')[0].clientHeight + 'px';
      for(var i = 0, length; i < myImgDivs.length; ++i) {
        myImgDivs[i].style.left = myImgDivs[i].clientWidth * i + 'px';
        carousel_buttons[i].style.lineHeight = myBox.clientHeight + 'px';
      }
      // 获取"方向"按钮
      var directionsButtons = myBox.getElementsByTagName('a');
      var directionsButtonsTmp = new Array();
      var directionsButtonsTotal = 0;
      for (var i=0; i < directionsButtons.length && directionsButtonsTotal == 0; ++i) {
        // var text = directionsButtons[i].getAttribute('alt');
        if (directionsButtons[i].getAttribute('alt').indexOf('Slide') != -1) 
          directionsButtonsTmp.push(directionsButtons[i]);
      }
      myBox.onmouseover = function() {
        stopCarousel(Timer);
        for(var i = 0; i != directionsButtonsTmp.length; ++i) {
          directionsButtonsTmp[i].onclick = click(myImgDivs, !(i % 2) ? "左" : "right");
        }
      }
      myBox.onmouseout = function() {
        Timer = startCarousel();
      }
    }

    // 找Div 集合, 根据名称 className 找到标签 object1 下所有.
    function returnDivsByClass(objects, className) {
      var myReturnDivs = new Array();
      var myDivs = null;

      for (var i = objects.length - 1; i >= 0; i--) {
        if(objects[i].className == className)
          myReturnDivs.push(objects[i]);
      }
      return myReturnDivs;
    }

    // 轮播函数
    function carousel() {
      turnOffDiv(myImgDivs[showDivId]);
      showDivId = showDivId + 1 == myImgDivs.length ? 0 : showDivId + 1;
      showDiv(myImgDivs[showDivId]);
    }

    // 关闭当前显示的Div
    function turnOffDiv(divId) {
      // divId.style.display = 'none';
    }

    // 显示当前Div
    function showDiv(divId) {
      divId.style.display = 'block';
    }

    // 停止轮播
    function stopCarousel(key) {
      clearInterval(key);
    }

    // 开始计时机
    function startCarousel() {
      // return setInterval(carousel, intervalTime * 1000);
    }

    // 定位,将将标签的位置调整.
    function position(obj1, x, y) {
      obj1.style.left = x + 'px';
      console.app('第 ' + x + ' 个div的左边距为: ' + obj1.style.left);
    }

    // 移动 DIV 函数
    // 将参数 divName 的属性 disp.left 增加参数 distance (distance > 0 向右移动)
    function moveDiv(divName, distance) {
      var divLeft = parseInt(divName.style.left);
      var averagerDistance = distance / (framesPerSecond * 1.0);
      var averagerTime = carouselTime / (framesPerSecond * 1.0);
      var i = 0;

      function move() { 
        divName.style.left = parseInt(divName.style.left) + averagerDistance + 'px'; 
        ++i; 
        if (i >= framesPerSecond - 2) {
          stopCarousel(key); 
          var text = '已经执行了, 第' + i + '次';
          alert(text);
        }
      }
      var key = setInterval(move, 1000 * averagerTime);
    }

    // 单击事件
    // 单击 "左" 向左滑动, 反之向右滑动.
    // 特殊情况, 如果元素处在该方向的顶点时, 还向要求向空白滑动, 则到另一方向的顶点
    function click(myImgDivs, direction){
      return function() {
        switch(direction) {
          case "左": ;
          case "left": ;
          case "-1": direction = -1;
            break;
          case "右": ;
          case "right": ;
          case "1": direction = 1;
            break;
        }
        var left = parseInt(myImgDivs[0].style.left);
        var distance, total = 0; 
        var width = parseInt(myImgDivs[0].clientWidth)

        if (left == -1 * width && direction == -1 || left == 0 && direction == 1)
          direction = (-1) * direction * (myImgDivs.length - 1);
        distance = width * direction;
        for (var i = 0; i < myImgDivs.length; ++i)
          moveDiv(myImgDivs[i], distance);
      }
    }
