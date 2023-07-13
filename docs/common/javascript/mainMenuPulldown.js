/* イベント・リスナのセット関数オブジェクトを定義 */
var addListener = function(elm, type, func) {
  if(! elm) { return false; }
  if(elm.addEventListener) { /* W3C準拠ブラウザ用 */
    elm.addEventListener(type, func, false);
  } else if(elm.attachEvent) { /* Internet Explorer用 */
    elm.attachEvent('on'+type, func);
  } else {
    return false;
  }
  return true;
};

/* HTMLがブラウザにロードされたときに実行する処理 */
var init = function() {
	//function writeMsg(){
	var noteObj = $$("div#mainMenu>ul>li"); // 各メニューを取得
	
	noteObj.each(function(obj){
		var openDesc = function() {
			//var desc = obj.down(); // a の親 (dt) の次の要素 (dd) を取得
			//Element.addClassName(desc, "pulldown");
			Element.addClassName(obj, "active");
		};
		var closeDesc = function() {
			//var desc = obj.down(); // a の親 (dt) の次の要素 (dd) を取得
			//Element.removeClassName(desc, "pulldown");
			Element.removeClassName(obj, "active");
		};
		
		var activeMenuKey = function(evt) {
			if (document.all) {
				// IE
	    		if (event.keyCode == 32) { // Space (#32) 又は Enter
					activeMenu();
				}
			}else{
				// その他
				if (evt.keyCode == 32) { // Space (#32) 又は Enter
					activeMenu();
				}
			}
		};
		
		//addListener(obj, "click", popup2);
		Event.observe(obj, "mouseover", openDesc, true);
		Event.observe(obj, "mouseout", closeDesc, true);
		Event.observe(obj, "keydown", activeMenuKey, true);
		//Event.observe(obj, "mouseout", nonActiveMenu, true);
	});
	
	//
	// 画像の拡大縮小
	//
	/*
	var albumImg = $$(".samnale");
	
	albumImg.each(function(obj){
		var imgBox = obj.up();
		var activeImg = function() {
			Element.addClassName(imgBox, "activeImg");
		};
		var nonActiveImg = function() {
			Element.removeClassName(imgBox, "activeImg");
		};
		var mainImg = obj.next();
		Event.observe(imgBox, "mouseover", activeImg, true);
		Event.observe(imgBox, "mouseout", nonActiveImg, true);
	});
	*/
};

/* windowオブジェクトにloadイベントが発生したらinit関数を実行 */
//Event.observe(window, "load", init, true);

// prototype.js を用いた DOMContentLoaded event のクロスブラウザ版
document.observe("dom:loaded", init);
//addListener(window, "load", init);
//console.log("debug"); // FireBug 表示用
