const rootWord = function () {
  let htmlElement = document.documentElement,
    screenFun = function () {
      var w = htmlElement.clientWidth,
          h = htmlElement.clientHeight;
        if(h <= 320){
          h = 375;
        }else if(h >= 640){
          h = 640;
        }
        if(w <= 320){
          w = 375;
        }else if(w >= 640){
          w = 640;
        }
        if(w >= h){
          htmlElement.style.fontSize = Math.floor(h*10000/75)/1000*.85+"px";
        }else{
          htmlElement.style.fontSize = Math.floor(w*10000/75)/1000+"px";
        }
    };
  screenFun();
  window.addEventListener('resize', screenFun, false);
}

const errorMsgShow = function(msg){
  alert(msg);
}

export {rootWord, errorMsgShow}

// export default {
// 	errorMsgShow (msg) {
// 		alert(msg);
// 	}
// }
