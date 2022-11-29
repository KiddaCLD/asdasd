out = document.getElementById("output");
butn1 = document.getElementById("coub");
butn2 = document.getElementById("sqrt");


flag = 0; //0 - квадрат //1 - куб

function S(line) {
	out.value = line * line;
}

function Q(line) {
	out.value = line * line * line;
}

function ww(fl){
	if (fl == 0){
		butn1.style = "border: 3px solid green;"	
		butn2.style = "border: 0;"
		flag = fl;	
	}
	else if (fl == 1) {
		butn1.style = "border: 0;"	
		butn2.style = "border: 3px solid green;"
		flag = fl;	
	}
}

function switchh(line) {
	if (flag == 1){
		S(line);		
	}
	else {
		Q(line);
	}
}