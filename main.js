document.querySelector('#reg').onclick = Registory; //обработчик нажатия
flag = 0; // если 1 то пользователь зарегестрирован а если 0 то нет

if (flag == 0){
	document.querySelector('.text').onload = unregister();
}
else{
	document.querySelector('.label').onload = SetCountConnect(2);
}


function Registory() {
	let g = document.querySelector(".regreg").value;
	setName(g)
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

