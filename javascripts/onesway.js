function Roll(min, max) {
	var num = min + Math.floor(Math.random() * (max - min));
	if(num == 0)
	{
		document.getElementById('rollzone').innerHTML = document.getElementById('rollzone').innerHTML + "<br>维维要去";
	}
	else
	{
		document.getElementById('rollzone').innerHTML = document.getElementById('rollzone').innerHTML + "<br>维维不要去";
	}
}

function clearContent() {
	document.getElementById('rollzone').innerHTML = "";
}

function RollNum(min, max) {
	var num = min + Math.floor(Math.random() * (max - min));
	addRollRes(num);
}

function addRollRes(num){
	document.getElementById('rollzone').innerHTML = document.getElementById('rollzone').innerHTML + "<br>维维扔出了" + num;
}
