if (getCookie("reg") == 1){
	document.querySelector('#cls').onclick = obnul; 
	setinfo()
	
}
else{
	document.querySelector('#reg').onclick = Registory; //обработчик нажатия
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
	let name = document.querySelector(".regreg").value;
	
	if (name != "%251337" || name != "&nbsp" || name != "&nbsp&nbsp" || name != "&nbsp&nbsp&nbsp"){
		let today = new Date()
		let expires = new Date()
		expires.setTime(today.getTime() + 1000*60*60*24*365)
		setCookie("reg", 1, expires);
		setCookie("name", name, expires);
		setCookie("c_c", 1, expires);
		setCookie("lastCon", today , expires);
		location.reload();
	}
	else {
	console.log("Ошбика ввода имени! Введите нормальное имя блин");
	}
}

function unregister(){
	document.querySelector("p#name").textContent = "";
	document.querySelector("p#count").textContent = "Вы еще не зарегестрировались!";
	document.querySelector("p#time").textContent = "";	
}


function lastconn(h){
	const endTime = new Date(h);
  		let delta = Math.floor((new Date() - endTime) / 1000);
  		let days = Math.floor(delta / 86400);
  		// А теперь вычитаем из секунд количество дней, выраженных в секундах
  		delta -= days * 86400;
  		// В оставшихся секунд вычленяем количество полных часов
  		let hours = Math.floor(delta / 3600) % 24;
  		// Также их потом вычитаем, выразив в секундах
  		delta -= hours * 3600;
  		// Из оставшихся секунд берем минуты
  		let minutes = Math.floor(delta / 60) % 60;
  		delta -= minutes * 60;
  		let seconds = delta % 60;


	let td = [	hours,
				minutes,
				seconds
			  ];

	SetLastConnect(td);	
	}

function setinfo(){
	setName(getCookie("name"));
	SetCountConnect(getCookie("c_c"));
	let h = getCookie("lastCon");
	lastconn(h);
	updatecookie();
}

function setName(name){
	document.querySelector("p#name").textContent = "Привет, "+name;		
}

function SetCountConnect(count){
	document.querySelector("p#count").textContent = "количество посещений: "+count;
}

function SetLastConnect(time){
	ret = time[0]+" час"+
					((time[0] >= 5 && time[0] <= 20) || time[0]==0 ? "ов": (time[0] == 1 || time[0] > 22) ? "": "у")
					+" "+time[1]+" минут"+ ((time[1] >= 10) ? (((Number(String(time[1]).split("")[1])) > 1 && (Number(String(time[1]).split("")[1])) <= 4)) ? 
						          "ы" : (((((String(time[1]).split("")[1]) >= 5) && (Number(String(time[1]).split("")[1])) <= 9 || (Number(String(time[1]).split("")[1])) == 0) ? "": "а")) : ((time[1] > 1) && (time[1] <= 4)) ? 
						          "ы" : (((time[1] >= 5) && (time[1] <= 9) || (time[1] == 0)) ? "": "у")) 
					
					+" "+time[2]+" секунд"+ ((time[2] >= 10) ? (((Number(String(time[2]).split("")[2])) > 1 && (Number(String(time[2]).split("")[2])) <= 4)) ? 
						          "ы" : (((((String(time[2]).split("")[1]) >= 5) && (Number(String(time[2]).split("")[1])) <= 9 || (Number(String(time[2]).split("")[1])) == 0) ? "": "а")) : ((time[2] > 1) && (time[2] <= 4)) ? 
						          "ы" : (((time[2] >= 5) && (time[2] <= 9) || (time[2] == 0)) ? "": "у"));
	document.querySelector("p#time").textContent = "Вы были на этой странице: "+ret+" назад";
	
}

function obnul(){
	let today = new Date()
	let expires = new Date()
	expires.setTime(today.getTime() + 1000*60*60*24*365);
	setCookie("c_c", 0, expires);
	location.reload();
}

function updatecookie(){
	let today = new Date()
	let expires = new Date()
	expires.setTime(today.getTime() + 1000*60*60*24*365);
	
	setCookie("c_c", Number(getCookie("c_c"))+1, expires);
	setCookie("lastCon", today , expires);	
}

//a = "минут"+ ((t >= 10) ? (((Number(String(t).split("")[1])) > 1 && (Number(String(t).split("")[1])) <= 4)) ? "ы" : (((((String(t).split("")[1]) >= 5) && (Number(String(t).split("")[1])) <= 9 || (Number(String(t).split("")[1])) == 0) ? "": "а")) : ((t > 1) && (t <= 4)) ? "ы" : (((t >= 5) && (t <= 9) || (t == 0)) ? "": "а"));
