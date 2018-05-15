let ajaxUrl = '//h5.2144.com/'
let userType = 0
// 屏幕自适应
const rootWord = function () {
  let htmlElement = document.documentElement,
    screenFun = function () {
      let w = htmlElement.clientWidth,
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
          htmlElement.style.fontSize = Math.floor(h*10000/75)/1000*.85+"px"
        }else{
          htmlElement.style.fontSize = Math.floor(w*10000/75)/1000+"px"
        }
    };
  screenFun();
  window.addEventListener('resize', screenFun, false);
}
// 公用提示
const errorMsgShow = function(msg){
  alert(msg);
}
// 设置cookie
const setCookie = function(c_name,value,expire) {
  var date=new Date()
  date.setSeconds(date.getSeconds()+expire)
  document.cookie=c_name+ "="+escape(value)+"; expires="+date.toGMTString()
  console.log(document.cookie)
}
const getCookie = function(c_name){
  if (document.cookie.length>0){
    let c_start=document.cookie.indexOf(c_name + "=")
    if (c_start!=-1){
      c_start=c_start + c_name.length+1
      let c_end=document.cookie.indexOf(";",c_start)
      if (c_end==-1) c_end=document.cookie.length
          return unescape(document.cookie.substring(c_start,c_end))
      }
    }
  return ""
}
const delCookie = function(c_name){
  setCookie(c_name, "", -1)
}

//export 可以导出常量、函数、文件、模块
export { ajaxUrl,userType, rootWord, errorMsgShow, setCookie, getCookie, delCookie }

// export default {
// 	errorMsgShow (msg) {
// 		alert(msg);
// 	}
// }
