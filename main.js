document.querySelector('#reg').onclick = Registory; //обработчик нажатия
flag = 0; // если 1 то пользователь зарегестрирован а если 0 то нет

if (getCookie("reg") == 1){
	setinfo()
}
else{
	unregister();
}


function setCookie(name, value, expire) {  
	document.cookie = name + "=" + escape(value) + ((expire == null) ? "" : ("; expires=" + expire.toGMTString()))
}

function getCookie(Name) {   
	var search = Name + "="
	if (document.cookie.length > 0) {
		offset = document.cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = document.cookie.indexOf(";", offset);
			if (end == -1)
				end = document.cookie.length;
			return unescape(document.cookie.substring(offset, end));
		}
	}
}


function Registory() {
	let today = new Date()
	let expires = new Date()
	expires.setTime(today.getTime() + 1000*60*60*24*365)
	let name = document.querySelector(".regreg").value;
	setCookie("reg", 1, expires);
	setCookie("name", name, expires);
	setCookie("c_c", 1, expires);
	setCookie("lastCon", today , expires);

}

function unregister(){
	document.querySelector("p#name").textContent = "Вы еще не зарегестрировались!";
	document.querySelector("p#count").textContent = "количество посещений: 1";
	document.querySelector("p#time").textContent = "Вы были на этой странице в последний раз: никогда ";	
}


function setinfo(){
	console.log(getCookie("name"))
	console.log(getCookie("reg"))
	console.log(getCookie("c_c"))
	console.log(getCookie("lastCon"))
}

function setName(name){
	document.querySelector("p#name").textContent = "Привет, "+name;		
}

function SetCountConnect(count){
	document.querySelector("p#count").textContent = "количество посещений: "+count;
}

function SetLastConnect(time){
	document.querySelector("p#time").textContent = "Вы были на этой странице: "+time;
}

