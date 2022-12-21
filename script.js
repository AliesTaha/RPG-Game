let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
	{
		name: "stick",
		power: 5
	},
	{
		name: "dagger",
		power: 30
	},
	{
		name: "claw hammer",
		power: 50
	},
	{
		name: "sword",
		power: 100
	}
];

const monsters = [
  {
    name: "slime",
    level: 2,
    health: 15
  },
  {
    name: "fanged beast",
    level: 8,
    health: 60
  },
  {
    name: "dragon",
    level: 20,
    health: 300
  }
];

const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store.\""
    },
	{
		name: "store",
		"button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
		"button functions": [buyHealth, buyWeapon, goTown],
		text: "You enter the store."
	},
	{
		name: "cave",
		"button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
		"button functions": [fightSlime, fightBeast, goTown],
		text: "You enter the cave. You see some monsters."
	},
	{
		name: "fight",
		"button text": ["Attack", "Dodge", "Run"],
		"button functions": [attack, dodge, goTown],
		text: "You are fighting a monster."
	},
	{
		name: "kill monster",
		"button text": ["Go to town square", "Go to town square", "Go to town square"],
		"button functions": [goTown, goTown, easterEgg],
		text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
	},
	{
		name: "lose",
		"button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
		"button functions": [restart, restart, restart],
		text: "You die. ☠️"
	},
	{
		name: "win",
		"button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
		"button functions": [restart, restart, restart],
		text: "You defeat the dragon! YOU WIN THE GAME! 🎉"
    },
	{
		name: "easter egg",
		"button text": ["2", "8", "Go to town square?"],
		"button functions": [pickTwo, pickEight, goTown],
		text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
	}
]


// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
    monsterStats.style.display = "none";
	button1.innerText = location["button text"][0];
	button2.innerText = location["button text"][1];
	button3.innerText = location["button text"][2];
	button1.onclick = location["button functions"][0];
	button2.onclick = location["button functions"][1];
	button3.onclick = location["button functions"][2];
    text.innerText = location.text;    
}

function addimg(linkimg){
	var imgElement = document.createElement("img");

	// Set the src attribute of the img element to the path or URL of the image you want to display
		imgElement.setAttribute("src", linkimg);
		imgElement.style.width='50%';
		imgElement.style.height='50%';
		imgElement.style.display='block';
		imgElement.style.margin='auto';
	// Append the img element to the body of the document
	setTimeout(function(){imgElement.style.display='none';}, 2800);
	document.body.appendChild(imgElement);
}
function goTown() {
    update(locations[0]);
	addimg("https://thumbs.dreamstime.com/b/vector-cartoon-illustration-man-leaving-big-city-civilization-walking-trip-nature-stick-figure-background-206863536.jpg");
}

function goStore() {
    update(locations[1]);
	addimg("https://www.kindpng.com/picc/m/731-7315550_cart-drawn-stick-man-shopping-supermarket-stick-man.png")
	// Create an img element
	
}

function goCave() {
    update(locations[2]);
	addimg("https://art.ngfiles.com/images/644000/644554_zzcoolman99zz_stickman-in-a-cave.jpg?f1537669836");
}

function buyHealth() {
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
    	healthText.innerText = health;       
    } else {
        text.innerText = "You do not have enough gold to buy health.";
    }
	addimg("https://images.assetsdelivery.com/compings_v2/zdeneksasek/zdeneksasek1804/zdeneksasek180400105.jpg")

}

function buyWeapon() {
    if (currentWeapon < weapons.length - 1) {
    	if (gold >= 30) {
            gold -= 30;
            currentWeapon++;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;
    		text.innerText = "You now have a " + newWeapon + ".";
            inventory.push(newWeapon);
            text.innerText += " In your inventory you have: " + inventory;
    	} else {
    		text.innerText = "You do not have enough gold to buy a weapon.";
    	} 
    } else {
		text.innerText = "You already have the most powerful weapon!";
        button2.innerText = "Sell weapon for 15 gold";
		button2.onclick = sellWeapon;
	}
	addimg("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25bd8768-e10c-45cf-955d-c451a5b4516c/d2otcw4-485a4734-c2f1-4a3f-823d-30899040ac49.png/v1/fill/w_900,h_507,q_80,strp/stickman_with_sword_by_stickgod_d2otcw4-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTA3IiwicGF0aCI6IlwvZlwvMjViZDg3NjgtZTEwYy00NWNmLTk1NWQtYzQ1MWE1YjQ1MTZjXC9kMm90Y3c0LTQ4NWE0NzM0LWMyZjEtNGEzZi04MjNkLTMwODk5MDQwYWM0OS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.czChkdncKfJCy1ylUnR63ebUtekryC3fQhWgzWJeOvQ");

}

function sellWeapon() {
	if (inventory.length > 1) {
		gold += 15;
		goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = "You sold a " + currentWeapon + ".";
        text.innerText += " In your inventory you have: " + inventory;
	} else {
    	text.innerText = "Don't sell your only weapon!";
  	}
	addimg("https://c8.alamy.com/comp/2F88MC6/angry-man-or-businessman-destroyed-computer-with-baseball-bat-vector-cartoon-stick-figure-illustration-2F88MC6.jpg");
}

function fightSlime() {
	fighting = 0;
	goFight();
	addimg("https://static.wikia.nocookie.net/stickmen-vs-terraria-bosses/images/8/87/BlackGuy3.png/revision/latest?cb=20211122085108");
}

function fightBeast() {
	fighting = 1;
	goFight();    
	addimg("https://cdn.xxl.thumbs.canstockphoto.com/cartoon-of-smiling-man-walking-in-to-open-mouth-of-a-monster-cartoon-stick-drawing-conceptual-illustration_csp62946220.jpg");
}

function fightDragon() {
	fighting = 2;
	goFight();
	addimg("https://thumbs.dreamstime.com/b/vector-cartoon-stick-figure-drawing-conceptual-illustration-man-doctor-medic-knight-wearing-face-mask-fighting-197217320.jpg");
}

function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block";
    monsterNameText.innerText = monsters[fighting].name;
	monsterHealthText.innerText = monsterHealth;
	addimg("https://media.tenor.com/hf_PgYSV0FIAAAAC/stickman-fight.gif");
}

function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
    
    if (isMonsterHit()) {
        health -= getMonsterAttackValue(monsters[fighting].level);
    } else {
		text.innerText += " You miss.";
	}
    
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
	healthText.innerText = health;
	monsterHealthText.innerText = monsterHealth;   
	if (health <= 0) {
		lose();
	} else if (monsterHealth <= 0) {
		fighting === 2 ? winGame() : defeatMonster();
	}

	if (Math.random() <= .1 && inventory.length !== 1) {
        text.innerText += " Your " + inventory.pop() + " breaks.";
        currentWeapon--;
	}

	addimg("https://i.imgur.com/WRXGW2p.png");

}

function getMonsterAttackValue(level) {
    let hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    return hit;

}

function isMonsterHit() {
	return Math.random() > .2 || health < 20;
}


function dodge() {
    text.innerText = "You dodge the attack from the " + monsters[fighting].name + ".";
addimg("https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/e5/bf/c3/e5bfc331-bb9c-3341-c815-cda47c5ecaa4/source/512x512bb.jpg");
}

function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7)
    xp += monsters[fighting].level;
    goldText.innerText = gold;
	xpText.innerText = xp;
    update(locations[4]);
	addimg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyB3Fdv7EjLoS9EfS36Kvv6l6Y7EHoKDO_YWXeZjPwdPldqYE8MxcQg7PsDDxbjEyO-PY&usqp=CAU");
}

function lose() {
    update(locations[5]);
	addimg("https://c8.alamy.com/comp/HT5CFX/cartoon-vector-doodle-dead-stickman-lying-on-the-ground-and-holding-HT5CFX.jpg");
}

function winGame() {
  update(locations[6]);
  addimg("https://c8.alamy.com/comp/2B3HNKH/champion-win-sports-competition-winner-first-place-gold-medal-and-cup-hand-drawn-stickman-cartoon-doodle-sketch-vector-graphic-illustration-2B3HNKH.jpg");
}

function restart() {
	xp = 0;
	health = 100;
	gold = 50;
	currentWeapon = 0;
	inventory = ["stick"];
	goldText.innerText = gold;
	healthText.innerText = health;
	xpText.innerText = xp;
	goTown();
}

function easterEgg() {
	update(locations[7]);
}

function pickTwo() {
 pick(2);
}

function pickEight() {
 pick(8);
}

function pick(guess) {
    let numbers = [];
    while (numbers.length < 10) {
        numbers.push(Math.floor(Math.random() * 11));
    }

    text.innerText = "You picked " + guess + ". Here are the random numbers:\n";

    for (let i = 0; i < 10; i++) {
        text.innerText += numbers[i] + "\n";
    }

    if (numbers.indexOf(guess) !== -1) {
        text.innerText += "Right! You win 20 gold!"
        gold += 20;
        goldText.innerText = gold;
    } else {
        text.innerText += "Wrong! You lose 10 health!"
        health -= 10;
        healthText.innerText = health
        if (health <= 0) {
          lose();
        }
    }
}