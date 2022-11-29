document.querySelector('#reg').onclick = Registory; //обработчик нажатия

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
	totoday = [ today.getHours(),
				today.getMinutes(),
				today.getSeconds()
			  ];

	setCookie("reg", 1, expires);
	setCookie("name", name, expires);
	setCookie("c_c", 1, expires);
	setCookie("lastCon", totoday , expires);
	location.reload();

}

function unregister(){
	document.querySelector("p#name").textContent = "";
	document.querySelector("p#count").textContent = "Вы еще не зарегестрировались!";
	document.querySelector("p#time").textContent = "";	
}


function lastconn(lc){
	let today = new Date()
	let td = [  (today.getHours() -lc[0] < 0) ? 24 - (today.getHours() -lc[0]) : today.getHours() -lc[0],
				(today.getMinutes() - lc[1] < 0) ? 60 - (today.getHours() -lc[1]) : today.getHours() -lc[1],
				(today.getSeconds() - lc[2] < 0)  ? 60 - (today.getHours() -lc[2]) : today.getHours() -lc[2],
			  ];

	SetLastConnect(td);	
	}

function setinfo(){
	setName(getCookie("name"));
	SetCountConnect(getCookie("c_c"));
	let h = getCookie("lastCon").split(",");
	lastconn([Number(h[0]),Number(h[1]),Number(h[2])]);
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
					((time[0] >= 5 && time[0] <= 20) ? "ов": (time[0] == 1 || time[0] > 22) ? "": "а")
					+" "+time[1]+" минут"+ ((time[1] >= 10) ? (((Number(String(time[1]).split("")[1])) > 1 && (Number(String(time[1]).split("")[1])) <= 4)) ? 
						          "ы" : (((((String(time[1]).split("")[1]) >= 5) && (Number(String(time[1]).split("")[1])) <= 9 || (Number(String(time[1]).split("")[1])) == 0) ? "": "а")) : ((time[1] > 1) && (time[1] <= 4)) ? 
						          "ы" : (((time[1] >= 5) && (time[1] <= 9) || (time[1] == 0)) ? "": "а")) 
					
					+" "+time[2]+" секунд"+ ((time[2] >= 10) ? (((Number(String(time[2]).split("")[2])) > 1 && (Number(String(time[2]).split("")[2])) <= 4)) ? 
						          "ы" : (((((String(time[2]).split("")[1]) >= 5) && (Number(String(time[2]).split("")[1])) <= 9 || (Number(String(time[2]).split("")[1])) == 0) ? "": "а")) : ((time[2] > 1) && (time[2] <= 4)) ? 
						          "ы" : (((time[2] >= 5) && (time[2] <= 9) || (time[2] == 0)) ? "": "а"));
	document.querySelector("p#time").textContent = "Вы были на этой странице: "+ret;
	
}


function updatecookie(){
	let today = new Date()
	let expires = new Date()
	expires.setTime(today.getTime() + 1000*60*60*24*365)
	totoday = [ today.getHours(),
				today.getMinutes(),
				today.getSeconds()
			  ];
	//browser.cookies.remove("c_c");
	//browser.cookies.remove("lastCon");
	setCookie("c_c", Number(getCookie("c_c"))+1, expires);
	setCookie("lastCon", totoday , expires);	
}

//a = "минут"+ ((t >= 10) ? (((Number(String(t).split("")[1])) > 1 && (Number(String(t).split("")[1])) <= 4)) ? "ы" : (((((String(t).split("")[1]) >= 5) && (Number(String(t).split("")[1])) <= 9 || (Number(String(t).split("")[1])) == 0) ? "": "а")) : ((t > 1) && (t <= 4)) ? "ы" : (((t >= 5) && (t <= 9) || (t == 0)) ? "": "а"));
