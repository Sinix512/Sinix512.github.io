function Roll(min, max) {
	var num = min + Math.floor(Math.random() * (max - min));
	if(num == 0)
	{
		alert("不去");
	}
	else
	{
		alert("去");
	}
}
