var player1 = document.getElementById("p1");
var player2 = document.getElementById("p2");
var resetbt = document.getElementById("Rese");
var pl1 = document.getElementById("pla1");
var pl2 = document.getElementById("pla2");
var numinput = document.querySelector("input");
var change = document.getElementById("pch");
var p1score =0;
var p2score = 0;
var gameover = false;
var winningscore = 5;
var changescore = 5;


player1.addEventListener("click",function(){
	if(!gameover){
	p1score++;

	if(p1score===winningscore){
gameover=true;
pl1.style.color="green";
	}
	pl1.textContent=p1score;	
	}
	
});

player2.addEventListener("click",function(){
	if(!gameover){
	p2score++;
	if(p2score===winningscore){
gameover=true;
pl2.style.color="green";
	}
	pl2.textContent=p2score;
}
});

resetbt.addEventListener("click",function(){
	reset();
});

function reset(){
	p1score=0;
	p2score=0;
	pl1.textContent = p1score;
	pl2.textContent= p2score;
	pl1.style.color="black";
	pl2.style.color="black";
	gameover=false;
}
numinput.addEventListener("change",function () {
	change.textContent = this.value;
	winningscore = Number(this.value);
});

