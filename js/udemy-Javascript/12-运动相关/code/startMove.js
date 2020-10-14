/*
 * obj: 操作对象
 */
function startMove(obj, json) {
	clearInterval(obj.timer);

	// 速度
	var speed = 0;
	// 操作的属性
	var currentValue = 0;

	obj.timer = setInterval(function() {
		
		var isStop = true;
		
		// 修改属性值
		for(key in json){
			// 1、当前值
			if(key == 'opacity'){
				currentValue = parseInt(getStyle(obj, key)*100);
			} else {
				currentValue = parseInt(getStyle(obj, key));
			}
	
			// 2、速度
			speed = (json[key] - currentValue) / 7;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
	
			// 3、运动处理
			currentValue += speed;
			if(key == 'opacity'){
				obj.style.opacity = currentValue / 100;
					obj.style.filter = 'alpha(opacity:'+currentValue+')';
			} else {
				obj.style[key] = currentValue + 'px';
			}
			
			// 4、是否停止时钟
			if(json[key] != currentValue){
				isStop = false;
			}
		}
		
		// 判断是否要停止失踪
		if(isStop){
			clearInterval(obj.timer)
		}
	}, 30)
}

function getStyle(obj, att) {
	return window.getComputedStyle ? getComputedStyle(obj)[att] : obj.currentStyle[att];
}