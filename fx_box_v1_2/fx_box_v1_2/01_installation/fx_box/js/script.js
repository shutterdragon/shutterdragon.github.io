﻿window["oncontextmenu"]= function(){return false};jQuery(document)["ready"](function($){$(".checkbox")["on"]("click",function(){$(this)["toggleClass"]("active")});$(".js-delete")["on"]("click",function(){if($(this)["hasClass"]("active")){$(this)["removeClass"]("active")}else {$(this)["addClass"]("active")}});$(".js-help")["on"]("click",function(){$(".modal-help")["modal"]({fadeDuration:250,showClose:false})});$(".js-close")["on"]("click",function(){jQuery["modal"]["close"]()});var image= new Image();image["src"]= "http://the-orange-box.com/grpix/fxbox/fxbox_banner.png";image["onload"]= function(){$(".footer div")["html"]("<span onclick=\"GoTo('http://www.the-orange-box.com')\"></span>");$(".footer div span")["html"](image)}});function GoTo(url){cep["util"]["openURLInDefaultBrowser"](url)}