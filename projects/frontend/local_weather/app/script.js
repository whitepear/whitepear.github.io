function decimalClipper(a){a=a.toString(),a=a.split("");var b=a.indexOf(".");return a=a.slice(0,b+2),a=a.join("")}function geoSuccess(a){$(".welcome").hide();var b=a.coords.longitude,c=a.coords.latitude,d="http://api.openweathermap.org/data/2.5/weather?lat="+c+"&lon="+b+"&APPID=2a1dfced24bf88fa9d326596f4c84973";$.getJSON(d,function(a){kelvin=a.main.temp,celsius=kelvin-273.15,celsius=decimalClipper(celsius),fahrenheit=9*kelvin/5-459.67,fahrenheit=decimalClipper(fahrenheit),$(".temperature").html(celsius+"&deg;C"),$(".description").html(a.weather[0].description+' <img src="http://openweathermap.org/img/w/'+a.weather[0].icon+'.png" />'),$(".location").text(a.name);var b=a.weather[0].id;console.log(b),b>956?($(document.body).css("background","radial-gradient(circle, #8b8b83 20%, #ababa1)"),$(document.body).css("color","#fff"),$("#tempSwitch").css("border-color","#fff")):b>950?($(document.body).css("background","radial-gradient(circle, #cdcdc1 20%, #eeeee0)"),$(document.body).css("color","#444"),$("#tempSwitch").css("border-color","#444")):b>=900?($(document.body).css("background","radial-gradient(circle, #cd3700 20%, #ff4500)"),$(document.body).css("color","#fff"),$("#tempSwitch").css("border-color","#fff")):b>800?($(document.body).css("background","radial-gradient(circle, #cdcdc1 20%, #eeeee0)"),$(document.body).css("color","#444"),$("#tempSwitch").css("border-color","#444")):800==b?($(document.body).css("background","radial-gradient(circle, #87ceeb 20%, #6ca6cd)"),$(document.body).css("color","#fff"),$("#tempSwitch").css("border-color","#fff")):b>700?($(document.body).css("background","radial-gradient(circle, #eee5de 20%, #8b8682)"),$(document.body).css("color","#444"),$("#tempSwitch").css("border-color","#444")):b>=600?($(document.body).css("background","radial-gradient(circle, #eee9e9 20%, #8b8989)"),$(document.body).css("color","#444"),$("#tempSwitch").css("border-color","#444")):b>=500?($(document.body).css("background","radial-gradient(circle, #b9d3ee 20%,#6c7b8b)"),$(document.body).css("color","#fff"),$("#tempSwitch").css("border-color","#fff")):b>=300?($(document.body).css("background","radial-gradient(circle, #c6e2ff 20%, #9fb6cd)"),$(document.body).css("color","#444"),$("#tempSwitch").css("border-color","#444")):b>=200&&($(document.body).css("background","radial-gradient(circle, #616161 20%, #292929)"),$(document.body).css("color","#fff"),$("#tempSwitch").css("border-color","#fff")),$(".container").fadeIn(500)})}function geoFail(a){$(".welcome").hide(),1==a.code?console.log("PERMISSION_DENIED"):2==a.code?console.log("POSITION_UNAVAILABLE"):3==a.code?console.log("TIMEOUT"):console.log("Dunno what's going wrong here m8")}$(".container").hide();var celsiusOn=!0,celsius,fahrenheit,kelvin;$("#tempSwitch").click(function(){celsiusOn===!0?(celsiusOn=!1,$("#tempSwitch").html("&deg;C"),$(".temperature").hide(),$(".temperature").html(fahrenheit+"&deg;F"),$(".temperature").fadeIn(500)):(celsiusOn=!0,$("#tempSwitch").html("&deg;F"),$(".temperature").hide(),$(".temperature").html(celsius+"&deg;C"),$(".temperature").fadeIn(500))}),"geolocation"in navigator?navigator.geolocation.getCurrentPosition(geoSuccess,geoFail):($(".welcome").text("Geolocation is not supported in this browser."),console.log("FAIL"));