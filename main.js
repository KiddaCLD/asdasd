document.querySelector('#reg').onclick = Registory; //обработчик нажатия
flag = 0; // если 1 то пользователь зарегестрирован а если 0 то нет

if (flag == 0){
	document.querySelector('.text').onload = unregister();
}
else{
	document.querySelector('.label').onload = SetCountConnect(2);
}


function setCookie(name, value, expire) {  
	document.cookie = name + "=" + escape(value) + ((expire == null) ? "" : ("; expires=" + expire.toGMTString()))
}


function Registory() {
	let today = new Date()
	let expires = new Date()
	let name = document.querySelector(".regreg").value;
	setCookie("name",name, 1000*60*60*24*365);
}

function unregister(){
	document.querySelector("p#name").textContent = "Вы еще не зарегестрировались!";
	document.querySelector("p#count").textContent = "количество посещений: 1";
	document.querySelector("p#time").textContent = "Вы были на этой странице в последний раз: никогда ";	
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

