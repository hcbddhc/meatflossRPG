var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var menuUp = false;
var programStarted = false;
var cutsceneEnded = false;
var gameStarted = false;
var inCutscene = false;
var inConversation = false;
var inBattle = false;
var gameOver = false;
var canClick = true;
var canMove = false;
var conversationCanEscape = false;
var conversationCanCon = false;
var canChoose = false;
var haveRedPearl = false;
var haveBluePearl = false;
var boss = new Image();
boss.src = "images/boss.jpg";
var openingPic = new Image();
openingPic.src = "images/openingPic.jpg";
var inBattle1 = false;
var inBattle2 = false;
var inBattle3 = false;
var protagonist = {
	health : 100,
	positionX : 200,
	positionY : 235,
	potionAmount : 0,
	weapon : "fist",
	lightAttack : 1,
	heavyAttack : 5,
	money : 100
}
function mouseClickEvent(event){
	"use strict";
	if(programStarted == false){
		openingCutscene();
		programStarted = true;
		inCutscene = true;
	}else if(inCutscene == true && canClick == true){
		continueSlide();
	}else if(inCutscene == true && cutsceneEnded == true && event.offsetX > 200 && event.offsetX < 650 && event.offsetY > 100 && event.offsetY < 350){
		canClick = true;
		gameStarted = true;
		canMove = true;
		ctx.clearRect(0, 0, 800, 600);
		audio.loop = false;
		audio.currentTime = 137;
		loadArea();
		alert("WASD: move, E: interact");
	}
	
}
var redMonster = {
	health : 30,
	attack : 10,
	positionX :600
}
var blueMonster ={
	health : 50,
	attack : 12,
	positionX : 600
}
var meatfloss ={
	health : 100,
	attack : 15,
	positionX : 600
}
var areaX = 0;
var areaY = 0;
var village1resetYes = true;
var village2resetYes = true;
var village3resetYes = true;
var village1StartOrEnd = 0;
var village2StartOrEnd = 0;
var village3StartOrEnd = 0;
function loadArea(){
	//village1
	if(areaX ==0 && areaY ==0){
	    if(village1resetYes){
			village1resetYes = false;
			canClick = true;
	        audio = new Audio("sounds/village.mp3");
	        audio.loop = true;
	        audio.play();
			if(village1StartOrEnd ==0){
				 ctx.clearRect(0, 0, 800, 600);
			     area1Village();
				 ctx.beginPath();
				 ctx.fillStyle = "black";
		         ctx.arc(protagonist.positionX, protagonist.positionY, 7, 0, 2*Math.PI);
		         ctx.fill();
		         ctx.stroke();
		         ctx.fillSytle = "black";
		         ctx.fillRect(protagonist.positionX - 5 , protagonist.positionY + 7, 10, 20);
		         ctx.fillRect(protagonist.positionX - 2, protagonist.positionY + 25, 5, 20);
			     drawInv();
			}else if(village1StartOrEnd == 1){
				ctx.clearRect(0, 0, 800, 600);
			     area1Village();
				 ctx.beginPath();
				 ctx.fillStyle = "black";
		         ctx.arc(protagonist.positionX, protagonist.positionY, 7, 0, 2*Math.PI);
		         ctx.fill();
		         ctx.stroke();
		         ctx.fillSytle = "black";
		         ctx.fillRect(protagonist.positionX - 5 , protagonist.positionY + 7, 10, 20);
		         ctx.fillRect(protagonist.positionX - 2, protagonist.positionY + 25, 5, 20);
			     drawInv();
			}
			}else{
			ctx.clearRect(0, 0, 800, 600);
			area1Village();
			ctx.beginPath();
		    ctx.fillStyle = "black";
		    ctx.arc(protagonist.positionX, protagonist.positionY, 7, 0, 2*Math.PI);
		    ctx.fill();
		    ctx.stroke();
		    ctx.fillSytle = "black";
		    ctx.fillRect(protagonist.positionX - 5 , protagonist.positionY + 7, 10, 20);
		    ctx.fillRect(protagonist.positionX - 2, protagonist.positionY + 25, 5, 20);
			drawInv();
		}
		
		//village2
	}else if(areaX == 0 && areaY == 1){
		
		if(village2resetYes){
			village2resetYes = false;
			canClick = true;
			if(village1StartOrEnd ==0){
				 ctx.clearRect(0, 0, 800, 600);
			     area2Village();
				 ctx.beginPath();
				 ctx.fillStyle = "black";
		         ctx.arc(protagonist.positionX, protagonist.positionY, 7, 0, 2*Math.PI);
		         ctx.fill();
		         ctx.stroke();
		         ctx.fillSytle = "black";
		         ctx.fillRect(protagonist.positionX - 5 , protagonist.positionY + 7, 10, 20);
		         ctx.fillRect(protagonist.positionX - 2, protagonist.positionY + 25, 5, 20);
			     drawInv();
			}else if(village1StartOrEnd == 1){
				ctx.clearRect(0, 0, 800, 600);
			     area2Village();
				 ctx.beginPath();
				 ctx.fillStyle = "black";
		         ctx.arc(protagonist.positionX, protagonist.positionY, 7, 0, 2*Math.PI);
		         ctx.fill();
		         ctx.stroke();
		         ctx.fillSytle = "black";
		         ctx.fillRect(protagonist.positionX - 5 , protagonist.positionY + 7, 10, 20);
		         ctx.fillRect(protagonist.positionX - 2, protagonist.positionY + 25, 5, 20);
			     drawInv();
			}
			
		}else{
			ctx.clearRect(0, 0, 800, 600);
			area2Village();
			ctx.beginPath();
		    ctx.fillStyle = "black";
		    ctx.arc(protagonist.positionX, protagonist.positionY, 7, 0, 2*Math.PI);
		    ctx.fill();
		    ctx.stroke();
		    ctx.fillSytle = "black";
		    ctx.fillRect(protagonist.positionX - 5 , protagonist.positionY + 7, 10, 20);
		    ctx.fillRect(protagonist.positionX - 2, protagonist.positionY + 25, 5, 20);
			drawInv();
		}
		
		//village3
	}else if(areaX == 0 && areaY == 2){
		
		if(village3resetYes){
			village3resetYes = false;
			canClick = true;
			if(village3StartOrEnd ==0){
				 ctx.clearRect(0, 0, 800, 600);
			     area3Village();
				 ctx.beginPath();
				 ctx.fillStyle = "black";
		         ctx.arc(protagonist.positionX, protagonist.positionY, 7, 0, 2*Math.PI);
		         ctx.fill();
		         ctx.stroke();
		         ctx.fillSytle = "black";
		         ctx.fillRect(protagonist.positionX - 5 , protagonist.positionY + 7, 10, 20);
		         ctx.fillRect(protagonist.positionX - 2, protagonist.positionY + 25, 5, 20);
			     drawInv();
			}else if(village3StartOrEnd == 1){
				 audio = new Audio("sounds/village.mp3");
	             audio.loop = true;
	             audio.play();
				ctx.clearRect(0, 0, 800, 600);
			     area3Village();
				 ctx.beginPath();
				 ctx.fillStyle = "black";
		         ctx.arc(protagonist.positionX, protagonist.positionY, 7, 0, 2*Math.PI);
		         ctx.fill();
		         ctx.stroke();
		         ctx.fillSytle = "black";
		         ctx.fillRect(protagonist.positionX - 5 , protagonist.positionY + 7, 10, 20);
		         ctx.fillRect(protagonist.positionX - 2, protagonist.positionY + 25, 5, 20);
			     drawInv();	
		  }
		}else{
			ctx.clearRect(0, 0, 800, 600);
			area3Village();
			ctx.beginPath();
		    ctx.fillStyle = "black";
		    ctx.arc(protagonist.positionX, protagonist.positionY, 7, 0, 2*Math.PI);
		    ctx.fill();
		    ctx.stroke();
		    ctx.fillSytle = "black";
		    ctx.fillRect(protagonist.positionX - 5 , protagonist.positionY + 7, 10, 20);
		    ctx.fillRect(protagonist.positionX - 2, protagonist.positionY + 25, 5, 20);
			drawInv();
		}
	}
}

function drawNPC(x, y){
	    ctx.beginPath();
		ctx.fillStyle = "blue";
		ctx.arc(x, y, 7, 0, 2*Math.PI);
		ctx.fill();
		ctx.stroke();
		ctx.fillSytle = "black";
		ctx.fillRect(x - 5 , y + 7, 10, 20);
		ctx.fillRect(x - 2, y + 25, 5, 20);
}

function drawInv(){
	ctx.fillStyle = "Grey";
	ctx.fillRect(600, 500, 800, 600);
	ctx.fillStyle ="red";
	ctx.fillRect(630, 520, 20, 20);
	ctx.fillStyle = "black";
	ctx.fillRect(636, 513, 8, 8);
	ctx.font = "20px Arial";
	ctx.fillText("X " + protagonist.potionAmount, 660, 535);
	ctx.font = "17px Arial";
	ctx.fillText("Weapon: " + protagonist.weapon, 625, 560);
	ctx.fillText("$: " + protagonist.money, 625, 580);
}

var combatNum = 1;
var combatZone1 = new Image();
combatZone1.src = "images/combatZone1.jpg";
function loadCombatZone(){
	if(haveRedPearl == false){
		canMove = false;
        inBattle1 = true;
		audio.loop = false;
		protagonist.positionX = 200;
		protagonist.positionY = 335;
		audio.currentTime = 223;
		ctx.clearRect(0, 0, 800, 600);
		 audio = new Audio("sounds/normalCombat.mp3");
	     audio.loop = true;
	     audio.play();
		combat1();
	}else if(haveRedPearl == true && haveBluePearl == false){
		canMove = false;
        inBattle2 = true;
		audio.loop = false;
		protagonist.positionX = 200;
		protagonist.positionY = 335;
		audio.currentTime = 223;
		ctx.clearRect(0, 0, 800, 600);
		 audio = new Audio("sounds/normalCombat.mp3");
	     audio.loop = true;
	     audio.play();
		combat2();
	}else if(haveRedPearl == true && haveBluePearl == true){
		canMove = false;
        inBattle3 = true;
		audio.loop = false;
		protagonist.positionX = 200;
		protagonist.positionY = 335;
		audio.currentTime = 223;
		ctx.clearRect(0, 0, 800, 600);
		 audio = new Audio("sounds/normalCombat.mp3");
	     audio.loop = true;
	     audio.play();
		combat3();
	}
}

document.onkeydown = function(event){
	if(canMove == true && event.keyCode == 87 && gameStarted == true){
		if(protagonist.positionY > 234){
			protagonist.positionY = protagonist.positionY - 5;
		    loadArea();
		}
	}else if(canMove == true &&event.keyCode == 65&& gameStarted == true){
		if(protagonist.positionX > 95){
			protagonist.positionX = protagonist.positionX - 5;
		    loadArea();
		}
	}else if(canMove == true &&event.keyCode == 83 && gameStarted == true){
		if(protagonist.positionY < 414){
			protagonist.positionY = protagonist.positionY + 5;
		    loadArea();
		}
	}else if(canMove == true &&event.keyCode == 68&& gameStarted == true){
		if(protagonist.positionX < 750){
			protagonist.positionX = protagonist.positionX + 5;
		    loadArea();
		}
	}else if(canMove == true &&event.keyCode == 69 && gameStarted == true){
		triggerEvent();
	}else if(inConversation == true &&event.keyCode == 27&& conversationCanEscape == true){
		conversationCanEscape = false;
		inConversation = false;
		canMove = true;
		loadArea();
	}else if(inConversation == true &&event.keyCode == 27&& conversationCanEscape == true){
		conversationCanCon = true;
		
	}else if(event.keyCode == 49 && inConversation == true && canChoose == true){
		
		eventChoice = 1;
		triggerEvent();
	}else if(event.keyCode == 50 && inConversation == true && canChoose == true){
		eventChoice = 2;
		triggerEvent();
	}else if(event.keyCode == 51 && inConversation == true && canChoose == true){
		eventChoice = 3;
		triggerEvent();
	}else if(event.keyCode == 49 && inBattle1 == true && canChoose == true){
		
		combatChoice1 = 1;
		combat1();
	}else if(event.keyCode == 50 && inBattle1 == true && canChoose == true){
		combatChoice1 = 2;
		combat1();
	}else if(event.keyCode == 51 && inBattle1 == true && canChoose == true){
		combatChoice1 = 3;
		combat1();
	}else if(event.keyCode == 49 && inBattle2 == true && canChoose == true){
		
		combatChoice2 = 1;
		combat2();
	}else if(event.keyCode == 50 && inBattle2 == true && canChoose == true){
		combatChoice2 = 2;
		combat2();
	}else if(event.keyCode == 51 && inBattle2 == true && canChoose == true){
		combatChoice2 = 3;
		combat2();
	}else if(event.keyCode == 49 && inBattle3 == true && canChoose == true){
		
		combatChoice3 = 1;
		combat3();
	}else if(event.keyCode == 50 && inBattle3 == true && canChoose == true){
		combatChoice3 = 2;
		combat3();
	}else if(event.keyCode == 51 && inBattle3 == true && canChoose == true){
		combatChoice3 = 3;
		combat3();
	}
}

var eventChoice = 0;
function triggerEvent(){
	//village1
	if (areaX == 0 && areaY == 0){
		if(area1VillageEvent1Triggered == 0 && protagonist.positionX >230 && protagonist.positionX < 300 && protagonist.positionY > 200 && protagonist.positionY < 280){
		 canMove = false;
		 inConversation = true;
   		  protagonist.potionAmount += 3;
		  area1VillageEvent1Triggered = 1;
		  ctx.fillStyle = "grey";
		  ctx.fillRect(0, 400, 800, 400);
		  ctx.fillStyle = "black";
		  ctx.fillText("here are some potions, good luck in your quest.", 150, 450);
		  ctx.fillText("press 'ESC' to continue", 450, 550);
		  conversationCanEscape = true;
	    }else if(area1VillageEvent1Triggered == 1 && protagonist.positionX >230 && protagonist.positionX < 300 && protagonist.positionY > 200 && protagonist.positionY < 280){
		 canMove = false;
		 inConversation = true;
		  ctx.fillStyle = "grey";
		  ctx.fillRect(0, 400, 800, 400);
		  ctx.fillStyle = "black";
		  ctx.fillText("good luck in your quest.", 150, 450);
		  ctx.fillText("press 'ESC' to continue", 450, 550);
		  conversationCanEscape = true;
	    }
	}
	
	//village2
	if(areaX == 0 && areaY == 1){
		if(area2VillageEvent1Triggered == 0 && protagonist.positionX >90 && protagonist.positionX < 190 && protagonist.positionY > 185 && protagonist.positionY < 265){
		 canMove = false;
		 inConversation = true;
		  area2VillageEvent1Triggered = 1;
		   if(eventChoice == 1){
			  ctx.fillStyle = "grey";
		      ctx.fillRect(0, 400, 800, 400);
			  ctx.fillStyle = "black";
			   ctx.fillText("Here is your broken sword.", 150, 450);
			  protagonist.weapon = "broken sword";
		      protagonist.lightAttack = 2;
			  conversationCanEscape = true;
			  canchoose = false;
			  eventChoice = 0;
		      ctx.fillText("press 'ESC' to continue", 450, 550);
		  }else if(eventChoice == 2){
			  ctx.fillStyle = "grey";
		      ctx.fillRect(0, 400, 800, 400);
			  ctx.fillStyle = "black";
			   ctx.fillText("Here is your rusty axe.", 150, 450);
			  protagonist.weapon = "rusty axe";
		      protagonist.heavyAttack = 5;
			  canchoose = false;
			  conversationCanEscape = true;
		      ctx.fillText("press 'ESC' to continue", 450, 550);
			  eventChoice = 0;
		  }else{
			  area2VillageEvent1Triggered = 0;
			  ctx.fillStyle = "grey";
		      ctx.fillRect(0, 400, 800, 400);
		       ctx.fillStyle = "black";
		      ctx.fillText("Do you want a broken sword or a rusty axe?", 150, 450);
		      ctx.fillText("1.Broken sword", 170, 470);
		      ctx.fillText("2.Rusty axe", 170, 490);
		      canChoose = true;
		  }
		  
	    }else if(area2VillageEvent1Triggered == 1 && protagonist.positionX >90 && protagonist.positionX < 190 && protagonist.positionY > 185 && protagonist.positionY < 265){
			 canMove = false;
		     inConversation = true;
   			 ctx.fillStyle = "grey";
		      ctx.fillRect(0, 400, 800, 400);
			  ctx.fillStyle = "black";
			   ctx.fillText("What? You want another weapon?", 150, 450);
			   ctx.fillText("hahaha....no", 150, 480);
			  canchoose = false;
		      ctx.fillText("press 'ESC' to continue", 450, 550);
			  conversationCanEscape = true;
		}else if(protagonist.positionX >370 && protagonist.positionX < 470 && protagonist.positionY > 185 && protagonist.positionY < 265){
			var r = Math.floor(Math.random() * 5)+1;
			 canMove = false;
			 canChoose = false;
		     inConversation = true;
   			 ctx.fillStyle = "grey";
		      ctx.fillRect(0, 400, 800, 400);
			  ctx.fillStyle = "black";
			  if(r == 1){
				  ctx.fillText("Need supplies? Talk to Blue , he has some weapons for free.", 150, 450);
			      ctx.fillText("Or you can talk to Blueblue if you need potions.", 150, 480);
			  }else if(r == 2){
				  ctx.fillText("Your know...This is the remaining of an evil beast.", 150, 450);
			      ctx.fillText("A terrifying sight indeed...", 150, 480);
			  }else if(r == 3){
				  ctx.fillText("Is it just me, or are the conversations in the village", 150, 450);
			      ctx.fillText("actually that repetitve?", 150, 480);
			  }else if(r == 4){
				  ctx.fillText("Hello there.", 150, 450);
			      
			  }else if(r == 5){
				  ctx.fillText("Why does the evil beast lock itself in a cave?", 150, 450);
			      ctx.fillText("Really... What's the point of that?", 150, 480);
			  }
			   
		      ctx.fillText("press 'ESC' to continue", 450, 550);
			  conversationCanEscape = true;
		}else if(protagonist.positionX >510 && protagonist.positionX < 610 && protagonist.positionY > 165 && protagonist.positionY < 245){
			 canMove = false;
		     inConversation = true;
   			if(eventChoice == 1){
				eventChoice = 0;
			  ctx.fillStyle = "grey";
		      ctx.fillRect(0, 400, 800, 400);
			  ctx.fillStyle = "black";
			  if(protagonist.money >= 20){
				  ctx.fillText("Here is your health potion, thanks.", 150, 450);
			      protagonist.potionAmount += 1;
		          protagonist.money -= 20;
			  }else if(protagonist.money < 20){
				  ctx.fillText("What? Out of coins? Get out of here!", 150, 450);
			  }
			  
			  conversationCanEscape = true;
			  canchoose = false;
		      ctx.fillText("press 'ESC' to continue", 450, 550);
		  }else if(eventChoice == 2){
			  eventChoice = 0;
			  ctx.fillStyle = "grey";
		      ctx.fillRect(0, 400, 800, 400);
			  ctx.fillStyle = "black";
			   ctx.fillText("Hmph, stop wasting my time.", 150, 450);
			  canchoose = false;
			  conversationCanEscape = true;
		      ctx.fillText("press 'ESC' to continue", 450, 550);
		  }else{
			  
			  ctx.fillStyle = "grey";
		      ctx.fillRect(0, 400, 800, 400);
		       ctx.fillStyle = "black";
		      ctx.fillText("Hi there friend! You want to buy a health potion($20)?", 150, 450);
		      ctx.fillText("1.Yes", 170, 470);
		      ctx.fillText("2.No", 170, 490);
		      canChoose = true;
		  }
			 
		}
	}
	if(areaX == 0 && areaY == 2){
		if(protagonist.positionX >670 && protagonist.positionX < 730 && protagonist.positionY > 370 && protagonist.positionY < 430){
			 canMove = false;
			 canChoose = false;
		     inConversation = true;
   			 ctx.fillStyle = "grey";
		      ctx.fillRect(0, 400, 800, 400);
			  ctx.fillStyle = "black";
			  ctx.fillText("You will need the red and blue pearl to enter the beast's lair.", 150, 450);
			  ctx.fillText("These pearls are locating in the caves nearby. ", 150, 480);
			  ctx.fillText("Be careful however, rumors say there are monsters living within.", 150, 510);
			  ctx.fillText("Just exit the gate and I will show you the way when you're ready. ", 150, 540);
			  canchoose = false;
			  conversationCanEscape = true;
		      ctx.fillText("press 'ESC' to continue", 470, 570);
	     }
	}
	
}


var countTimeCutscene = 0;
var cutsceneTimer = null;
var slide = 1;

function continueSlide(){
	slide = slide + 1;
	openingCutscene();
}

function cutsceneBossOpening(){
	"use strict";
	if(countTimeCutscene < 30){
		var count = 750 - (countTimeCutscene * 5);
		
	    ctx.clearRect(0, 0, 800, 600);
	    ctx.drawImage(boss, 700, count, -600, -500); 
		ctx.drawImage(openingPic, 0, 300, 800, 300);
		ctx.fillStyle = "Black";
		ctx.font = "30px Arial";
		ctx.fillText("Until... The evil beast seeks to destroy your village.", 50, 50);
	    countTimeCutscene = countTimeCutscene + 1;
	}else{
		clearInterval(cutsceneTimer);
		ctx.font = "15px Arial";
		ctx.fillText("Click to continue.", 650, 550);
		canClick = true;
	}
	
	
}
var audio = new Audio("sounds/introSequence.mp3");
function openingCutscene(){
	"use strict";
	
	audio.loop = true;
	audio.play();
	if(slide == 1){
		ctx.clearRect(0, 0, 800, 600);
		 ctx.drawImage(openingPic, 0, 300, 800, 300);
		 ctx.font = "30px Arial";
		 ctx.fillStyle = "black";
		 ctx.fillText("You and the villagers in x village lived peacefully.", 50, 50);
		  ctx.font = "15px Arial";
		 ctx.fillText("Click to continue.", 650, 550);
		
	}else if(slide == 2){
		canClick = false;
		cutsceneTimer = setInterval(cutsceneBossOpening, 200);
		
		 
	}else if(slide == 3){
		ctx.clearRect(0, 0, 800, 600);
		ctx.fillStyle = "red";
		ctx.beginPath();
		ctx.arc(200, 300, 50, 0, 2*Math.PI);
		ctx.fill();
		ctx.stroke();
		ctx.fillStyle = "blue";
		ctx.beginPath();
		ctx.arc(600, 300, 50, 0, 2*Math.PI);
		ctx.fill();
		ctx.stroke();
		 ctx.font = "20px Arial";
		 ctx.fillStyle = "black";
		 ctx.fillText("You must defeat the beast, but if you wish to enter the beast's lair, ", 50, 50);
		 ctx.fillText(" you will need the red pearl and the blue pearl.", 50, 100);
		  ctx.font = "15px Arial";
		 ctx.fillText("Click to continue.", 650, 550);
	}else if(slide == 4){
		canClick = false;
		cutsceneEnded = true;
		ctx.clearRect(0, 0, 800, 600);
		 ctx.font = "30px Arial";
		 ctx.fillStyle = "black";
		 ctx.fillText("The whole village is counting on you, ", 50, 50);
		 ctx.fillText("you must not fail!", 50, 100);
		 ctx.fillStyle = "red";
		 ctx.fillRect(200, 200, 450, 150);
		 ctx.fillStyle = "black";
		 ctx.font = "50px Arial";
		 ctx.fillText("Click to Start Quest!", 200, 300);
		 

	}
	
}

var area1VillagePic = new Image();
area1VillagePic.src = "images/area1Village.jpg";
area1VillageEvent1Triggered = 0;
function area1Village(){
	"use strict";
	ctx.drawImage(area1VillagePic, 0, 0, 800, 600);
	drawNPC(260, 235);
	ctx.font ="20px arial";
	if(protagonist.positionX >230 && protagonist.positionX < 300 && protagonist.positionY > 200 && protagonist.positionY < 280){
		ctx.fillStyle = "grey";
		ctx.fillRect(280, 80, 200, 25);
	    ctx.fillStyle = "black";
		ctx.fillText("Press e to interact", 300, 100);
	}
	if(protagonist.positionX > 740){
		areaY = 1;
		protagonist.positionX = 125;
	    protagonist.positionY = 350;
		village1StartOrEnd = 1;
		loadArea();
	}
	
}


var area2VillagePic = new Image();
area2VillagePic.src = "images/area2Village.jpg";
area2VillageEvent1Triggered = 0;
area2VillageEvent2Triggered = 0;


function area2Village(){
	"use strict";
	ctx.drawImage(area2VillagePic, 0, 0, 800, 600);
	drawNPC(120, 220);
	if(protagonist.positionX >90 && protagonist.positionX < 190 && protagonist.positionY > 185 && protagonist.positionY < 265){
		ctx.fillStyle = "grey";
		ctx.fillRect(280, 80, 200, 25);
	    ctx.fillStyle = "black";
		ctx.fillText("Press e to interact", 300, 100);
	}
	
	drawNPC(400, 220);
	if(protagonist.positionX >370 && protagonist.positionX < 470 && protagonist.positionY > 185 && protagonist.positionY < 265){
		ctx.fillStyle = "grey";
		ctx.fillRect(280, 80, 200, 25);
	    ctx.fillStyle = "black";
		ctx.fillText("Press e to interact", 300, 100);
	}
	
	drawNPC(540, 200);
	if(protagonist.positionX >510 && protagonist.positionX < 610 && protagonist.positionY > 165 && protagonist.positionY < 245){
		ctx.fillStyle = "grey";
		ctx.fillRect(280, 80, 200, 25);
	    ctx.fillStyle = "black";
		ctx.fillText("Press e to interact", 300, 100);
	}
	if(protagonist.positionX < 100){
		areaY = 0;
		protagonist.positionX = 739;
		protagonist.positionY = 350;
		village2StartOrEnd = 0;
		loadArea();
	}
	if(protagonist.positionX > 740){
		areaY = 2;
		protagonist.positionX = 125;
	    protagonist.positionY = 350;
		village2StartOrEnd = 1;
		loadArea();
	}
}

var area3VillagePic = new Image();
area3VillagePic.src = "images/area3Village.jpg";
function area3Village(){
	"use strict";
	ctx.drawImage(area3VillagePic, 0, 0, 800, 600);
	drawNPC(700, 400);
	ctx.font ="20px arial";
	
	if(protagonist.positionX > 670 && protagonist.positionX < 730 && protagonist.positionY > 370 && protagonist.positionY < 430){
		ctx.fillStyle = "grey";
		ctx.fillRect(280, 80, 200, 25);
	    ctx.fillStyle = "black";
		ctx.fillText("Press e to interact", 300, 100);
	}
	if(protagonist.positionX < 100){
		areaY = 1;
		protagonist.positionX = 739;
	    protagonist.positionY = 350;
		village3StartOrEnd = 1;
		loadArea();
	}
	if(protagonist.positionX > 740){
		
		protagonist.positionX = 200;
		protagonist.positionY = 335;
		village3StartOrEnd = 1;
		loadCombatZone();
	}
	
}
combatChoice1 = 0;
function combat1(){
	"use strict";
	
	
	canChoose = true;
	inBattle1 = true;
    ctx.clearRect(0, 0, 800, 600);
	ctx.drawImage(combatZone1, 0, 0, 800, 600);
	ctx.fillStyle = "grey";
	ctx.fillRect(0, 0, 800, 100);
    ctx.fillRect(0, 450, 800, 150);
	ctx.fillStyle ="black";
	ctx.fillText("Choose action:", 100, 480);
	ctx.font = "18px Arial";
	ctx.fillText("1. Light attack", 120, 510);
	ctx.fillText("2. Heavy attack", 120, 540);
	if(protagonist.potionAmount > 0){
		ctx.fillText("3. Heal", 120, 570);
	}
	ctx.fillStyle ="red";
	ctx.beginPath();
	ctx.arc(redMonster.positionX, 355, 50, 0, 2*Math.PI);
	ctx.stroke();
	ctx.fill();
	ctx.fillStyle = "black";
	ctx.fillRect(redMonster.positionX- 40, 330, 30, 10);
	ctx.beginPath();
	ctx.arc(redMonster.positionX - 35, 350, 5, 0, 2*Math.PI);
	ctx.fillStyle = "black";
	ctx.fill();
	ctx.stroke();
	ctx.font = "20px Arial";
	ctx.fillStyle = "red";
	ctx.fillText("Your health: " + protagonist.health, 100, 80);
	ctx.fillText("Monster's health: " + redMonster.health, 600, 80);
	ctx.beginPath();
				 ctx.fillStyle = "black";
		         ctx.arc(protagonist.positionX, protagonist.positionY, 7, 0, 2*Math.PI);
		         ctx.fill();
		         ctx.stroke();
		         ctx.fillSytle = "black";
		         ctx.fillRect(protagonist.positionX - 5 , protagonist.positionY + 7, 10, 20);
		         ctx.fillRect(protagonist.positionX - 2, protagonist.positionY + 25, 5, 20);
			     drawInv();
	if(combatChoice1 == 1){
			var pDamage = Math.floor(Math.random() * 5) + protagonist.lightAttack;
			var mDamage = Math.floor(Math.random() * 3) + redMonster.attack;
			protagonist.health -= mDamage;
			redMonster.health -= pDamage;
			combatChoice1 = 0;
			if(redMonster.health <= 0){
		      alert("You defeated the red monster, and  received the red pearl and $ 60");
		
		       village3resetYes = true;
			   haveRedPearl = true;
			  areaX = 0;
			  areaY = 2;
			  village3StartOrEnd = 1;
			  audio.loop = false;
			  protagonist.money += 60;
		      protagonist.positionX = 700;
		      protagonist.positionY = 335;
		      audio.currentTime = 116;
			  canMove = true;
			  inBattle1 = false;
		      loadArea();
	        }else if(protagonist.health <= 0){
		     gameOver();
	        }else {
				combat1();
			}
			
	}else if(combatChoice1 == 2){
			var pDamage = Math.floor(Math.random() * 2) + protagonist.heavyAttack;
			var mDamage = Math.floor(Math.random() * 3) + redMonster.attack;
			protagonist.health -= mDamage;
			redMonster.health -= pDamage;
			combatChoice1 = 0;
			if(redMonster.health <= 0){
		      alert("You defeated the red monster, and  received the red pearl and $ 60");
			   haveRedPearl = true;
			  canMove = true;
		      village3resetYes = true;
			  areaX = 0;
			  areaY = 2;
			  protagonist.money += 60;
			  village3StartOrEnd = 1;
			  audio.loop = false;
		      protagonist.positionX = 700;
		      protagonist.positionY = 335;
		      audio.currentTime = 116;
			  inBattle1 = false;
		      loadArea();
	        }else if(protagonist.health <= 0){
		     gameOver();
	        }else {
				combat1();
			}
	}else if(combatChoice1 == 3&& protagonist.potionAmount > 0){
			var pDamage = 0;
			var mDamage = Math.floor(Math.random() * 3) + redMonster.attack;
			protagonist.health +=50;
			protagonist.potionAmount -= 1;
			protagonist.health -= mDamage;
			redMonster.health -= pDamage;
			combatChoice1 = 0;
				combat1();
			
	}
	
	
	
	
	
}

combatChoice2 = 0;
function combat2(){
	"use strict";
	
	
	canChoose = true;
	inBattle2 = true;
    ctx.clearRect(0, 0, 800, 600);
	ctx.drawImage(combatZone1, 0, 0, 800, 600);
	ctx.fillStyle = "grey";
	ctx.fillRect(0, 0, 800, 100);
    ctx.fillRect(0, 450, 800, 150);
	ctx.fillStyle ="black";
	ctx.fillText("Choose action:", 100, 480);
	ctx.font = "18px Arial";
	ctx.fillText("1. Light attack", 120, 510);
	ctx.fillText("2. Heavy attack", 120, 540);
	if(protagonist.potionAmount > 0){
		ctx.fillText("3. Heal", 120, 570);
	}
	ctx.fillStyle ="blue";
	ctx.beginPath();
	ctx.arc(blueMonster.positionX, 355, 50, 0, 2*Math.PI);
	ctx.stroke();
	ctx.fill();
	ctx.fillStyle = "black";
	ctx.fillRect(blueMonster.positionX- 40, 330, 30, 10);
	ctx.beginPath();
	ctx.arc(blueMonster.positionX - 35, 350, 5, 0, 2*Math.PI);
	ctx.fillStyle = "black";
	ctx.fill();
	ctx.stroke();
	ctx.font = "20px Arial";
	ctx.fillStyle = "red";
	ctx.fillText("Your health: " + protagonist.health, 100, 80);
	ctx.fillText("Monster's health: " + blueMonster.health, 600, 80);
	ctx.beginPath();
				 ctx.fillStyle = "black";
		         ctx.arc(protagonist.positionX, protagonist.positionY, 7, 0, 2*Math.PI);
		         ctx.fill();
		         ctx.stroke();
		         ctx.fillSytle = "black";
		         ctx.fillRect(protagonist.positionX - 5 , protagonist.positionY + 7, 10, 20);
		         ctx.fillRect(protagonist.positionX - 2, protagonist.positionY + 25, 5, 20);
			     drawInv();
	if(combatChoice2 == 1){
			var pDamage = Math.floor(Math.random() * 5) + protagonist.lightAttack;
			var mDamage = Math.floor(Math.random() * 3) + blueMonster.attack;
			protagonist.health -= mDamage;
			blueMonster.health -= pDamage;
			combatChoice2 = 0;
			if(blueMonster.health <= 0){
		      alert("You defeated the blue monster, and  received the blue pearl and $ 80");
		      haveBluePearl = true;
		       village3resetYes = true;
			  areaX = 0;
			  areaY = 2;
			  protagonist.money += 80;
			  village3StartOrEnd = 1;
			  audio.loop = false;
		      protagonist.positionX = 700;
		      protagonist.positionY = 335;
		      audio.currentTime = 116;
			  canMove = true;
			  inBattle2 = false;
		      loadArea();
	        }else if(protagonist.health <= 0){
		     gameOver();
	        }else {
				combat2();
			}
			
	}else if(combatChoice2 == 2){
			var pDamage = Math.floor(Math.random() * 2) + protagonist.heavyAttack;
			var mDamage = Math.floor(Math.random() * 3) + blueMonster.attack;
			protagonist.health -= mDamage;
			blueMonster.health -= pDamage;
			combatChoice2 = 0;
			if(blueMonster.health <= 0){
		      alert("You defeated the blue monster, and  received the red pearl and $ 80");
			  haveBluePearl = true;
			  canMove = true;
		      village3resetYes = true;
			  areaX = 0;
			  areaY = 2;
			  protagonist.money += 80;
			  village3StartOrEnd = 1;
			  audio.loop = false;
		      protagonist.positionX = 700;
		      protagonist.positionY = 335;
		      audio.currentTime = 116;
			  inBattle2 = false;
		      loadArea();
	        }else if(protagonist.health <= 0){
		     gameOver();
	        }else {
				combat2();
			}
			
	}else if(combatChoice2 == 3&& protagonist.potionAmount > 0){
			var pDamage = 0;
			var mDamage = Math.floor(Math.random() * 3) + blueMonster.attack;
			protagonist.health +=50;
			protagonist.health -=mDamage;
			protagonist.potionAmount -= 1;
			blueMonster.health -= pDamage;
			combatChoice2 = 0;
				combat2();
			
	}
}

combatChoice3 = 0;
var finalArea = new Image();
finalArea.src = "images/finalArea.jpg";
function combat3(){
	"use strict";
	canChoose = true;
	inBattle3 = true;
    ctx.clearRect(0, 0, 800, 600);
    ctx.drawImage(finalArea, 0, 0, 800, 600);
	
	ctx.fillStyle = "grey";
	ctx.fillRect(0, 0, 800, 100);
    ctx.fillRect(0, 450, 800, 150);
	ctx.fillStyle ="black";
	ctx.fillText("Choose action:", 100, 480);
	ctx.font = "18px Arial";
	ctx.fillText("1. Light attack", 120, 510);
	ctx.fillText("2. Heavy attack", 120, 540);
	if(protagonist.potionAmount > 0){
		ctx.fillText("3. Heal", 120, 570);
	}
	
	ctx.font = "20px Arial";
	ctx.fillStyle = "red";
	ctx.fillText("Your health: " + protagonist.health, 100, 80);
	ctx.fillText("Monster's health: " + meatfloss.health, 600, 80);
	ctx.beginPath();
				 ctx.fillStyle = "black";
		         ctx.arc(protagonist.positionX, protagonist.positionY, 7, 0, 2*Math.PI);
		         ctx.fill();
		         ctx.stroke();
		         ctx.fillSytle = "black";
		         ctx.fillRect(protagonist.positionX - 5 , protagonist.positionY + 7, 10, 20);
		         ctx.fillRect(protagonist.positionX - 2, protagonist.positionY + 25, 5, 20);
			     drawInv();
				 var bossCombat = new Image();
	bossCombat.src="images/bossCombat.jpg";
	ctx.drawImage(bossCombat, 350, 150, 600, 300);
	if(combatChoice3 == 1){
			var pDamage = Math.floor(Math.random() * 5) + protagonist.lightAttack;
			var mDamage = Math.floor(Math.random() * 3) + meatfloss.attack;
			protagonist.health -= mDamage;
			meatfloss.health -= pDamage;
			combatChoice3 = 0;
			if(meatfloss.health <= 0){
		      victory();
	        }else if(protagonist.health <= 0){
		     gameOver();
	        }else {
				combat3();
			}
			
			
	}else if(combatChoice3 == 2){
			var pDamage = Math.floor(Math.random() * 2) + protagonist.heavyAttack;
			var mDamage = Math.floor(Math.random() * 3) + meatfloss.attack;
			protagonist.health -= mDamage;
			meatfloss.health -= pDamage;
			combatChoice3 = 0;
			if(meatfloss.health <= 0){
				
		     victory();
	        }else if(protagonist.health <= 0){
		     gameOver();
	        }else {
				combat3();
			}
			
	}else if(combatChoice3 == 3 && protagonist.potionAmount > 0){
			var pDamage = 0;
			var mDamage = Math.floor(Math.random() * 3) + meatfloss.attack;
			protagonist.health +=50;
			protagonist.health -=mDamage;
			protagonist.potionAmount -= 1;
			meatfloss.health -= pDamage;
			combatChoice3 = 0;
				combat3();
			
	}
}
function gameOver(){
	ctx.clearRect();
	canChoose = false;
	canMove = false;
	inBattle = false;
	ctx.font = "30px Arial";
	ctx.fillText("GAME OVER", 400, 300);
	
			  audio.loop = false;
		     
		      audio.currentTime = 116;
		      
}
function victory(){
	alert("Congratulations! You win!");
	ctx.clearRect();
	inBattle3 = false;
	canChoose = false;
	canMove = false;
	inBattle = false;
	ctx.font = "30px Arial";
	ctx.fillText("You Win!", 400, 300);
	
			  audio.loop = false;
		     
		      audio.currentTime = 116;
		      
}



function setup(){
	"use strict";
	ctx.font = "50px Arial";
	ctx.fillText("Click anywhere to start", 150, 300);
	
	
	
}