console.log('the page is loaded');

const $uiRow = $('#uiRow')

class Tamagotchi {
	constructor(hunger, sleepiness, boredom, age) {
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;
	}
	init () {
		const $hungerDisp = $('<h3 id="hungerDisp"></h3>')
		$uiRow.append($hungerDisp);
		const $sleepinessDisp = $('<h3 id="sleepinessDisp"></h3>')
		$uiRow.append($sleepinessDisp);
		const $boredomDisp = $('<h3 id="boredomDisp"></h3>')
		$uiRow.append($boredomDisp);
		const $ageDisp = $('<h3 id="ageDisp"></h3>')
		$uiRow.append($ageDisp);
		$('#sprite').append('<img src="tama-sprites/Babytchi_anim_gen1.gif">');	
		this.render();
	} 
	render () {
		$('#hungerDisp').text(`Hunger: ${this.hunger}`);
		$('#sleepinessDisp').text(`Sleepiness: ${this.sleepiness}`);
		$('#boredomDisp').text(`Boredom: ${this.boredom}`);
		$('#ageDisp').text(`Age: ${this.age}`);
		
	}
	feed () {
		this.hunger -= 3;
		if (this.hunger < 0) {
			this.hunger = 0;
		}
		this.render();
	}
	sleep () {
		this.sleepiness -= 3;
		if (this.sleepiness < 0) {
			this.sleepiness = 0;
		}
		this.render();
	}
	play () {
		this.boredom -= 3;
		if (this.boredom < 0) {
			this.boredom = 0;
		}
		this.render();
	}
	birthday () {
		this.age++;
		game.changeSprite();
		this.hunger++;
		this.boredom++;
		this.sleepiness++;
		this.checkHealth();
		this.render();

	}
	checkHealth () {
		const $deathText = $('<h2 id="deathText"></h2>').text("YOU DIED")
		if (this.hunger === 10 || this.sleepiness === 10 || this.boredom === 10) {
			$('img').remove();
			$('#sprite').prepend($deathText);
			clearInterval(game.timer);
		}
	}
}

const myPet = new Tamagotchi(0, 0, 0, 0);

myPet.init()

const game = {
	timer: setInterval(() => {
		myPet.birthday()
	}, 1000),
	reset () {

	},
	changeSprite () {
		if (myPet.age === 5) {
			$('img').attr('src', 'tama-sprites/Marutchi_anim_gen1.gif');
		} 
		if (myPet.age === 12 ) {
			if (myPet.hunger >=4 || myPet.sleepiness >= 3 || myPet.boredom >= 3) {
				$('img').attr('src', 'tama-sprites/Kuchitamatchi_anim_gen1.gif');
			} else {
				$('img').attr('src', 'tama-sprites/Tamatchi_anim_gen1.gif');
			}
		}
		if (myPet.age === 20) {
			if ($('img').attr('src') === 'tama-sprites/Tamatchi_anim_gen1.gif') {
				if (myPet.hunger > 8 || myPet.sleepiness > 8 || myPet.boredom > 8) {
					$('img').attr('src', 'tama-sprites/Tarakotchi_anim_gen1.gif')
				} else if (myPet.hunger > 7 || myPet.sleepiness > 7 || myPet.boredom > 7) {
					$('img').attr('src', 'tama-sprites/Nyorotchi_anim_gen1.gif');
				} else if (myPet.hunger > 5 || myPet.sleepiness > 5 || myPet.boredom > 5) {
					$('img').attr('src', 'tama-sprites/Kuchipatchi_anim_gen1.gif');
				} else if (myPet.hunger > 4 || myPet.sleepiness > 4 || myPet.boredom > 4) {
					$('img').attr('src', 'tama-sprites/Maskutchi_anim_gen1.gif');
				} else if (myPet.hunger > 2 || myPet.sleepiness > 2 || myPet.boredom > 2) {
					$('img').attr('src', 'tama-sprites/Ginjirotchi_anim_gen1.gif');
				} else {
					$('img').attr('src', 'tama-sprites/Mametchi_anim_gen1.gif');
				}
			} 
			else {
				if (myPet.hunger > 8 || myPet.sleepiness > 8 || myPet.boredom > 8) {
					$('img').attr('src', 'tama-sprites/Tarakotchi_anim_gen1.gif')
				} else if (myPet.hunger > 2 || myPet.sleepiness > 2 || myPet.boredom > 2) {
					$('img').attr('src', 'tama-sprites/Nyorotchi_anim_gen1.gif');
				} else {
					$('img').attr('src', 'tama-sprites/Kuchipatchi_anim_gen1.gif');
				}
			}
		} if (myPet.age === 30) {
			$('img').attr('src', 'tama-sprites/Bill_anim_gen1.gif');
		}
	},
	someMethod () {

	}
}

$('#buttonRow').on('click', (e) => {
	if (e.target.id === 'buttonRow') {
		return
	}
	if (e.target.id === 'feed') {
		myPet.feed();
	}
	if (e.target.id === 'lights') {
		myPet.sleep();
	}
	if (e.target.id === 'play') {
		myPet.play();
	}
})

// const baby = new Image();
// baby.src = '../tama-sprites/Babytchi_anim_gen1.gif';
// $('#sprite').append('<img src="tama-sprites/Babytchi_anim_gen1.gif">');
















