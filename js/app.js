console.log('the page is loaded');

const $uiRow = $('#uiRow')

class Tamagotchi {
	constructor(hunger, sleepiness, boredom, age, name, isDead) {
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;
		this.name = name;
		this.isDead = isDead;

	}
	feed () {
		if (this.isDead) {
			return
		}
		this.hunger -= 3;
		if (this.hunger < 0) {
			this.hunger = 0;
		}
		game.render();
	}
	sleep () {
		if (this.isDead) {
			return
		}
		this.sleepiness -= 3;
		if (this.sleepiness < 0) {
			this.sleepiness = 0;
		}
		game.render();
	}
	play () {
		if (this.isDead) {
			return
		}
		this.boredom -= 3;
		if (this.boredom < 0) {
			this.boredom = 0;
		}
		game.render();
	}
	birthday () {
		this.age++;
		game.changeSprite();
		this.hunger++;
		this.boredom++;
		this.sleepiness++;
		this.checkHealth();
		game.render();

	}
	checkHealth () {
		const $deathText = $('<h2 id="deathText"></h2>').text(this.name + " DIED")
		if (this.hunger === 10 || this.sleepiness === 10 || this.boredom === 10) {
			$('#sprite').remove();
			$('#display').prepend($deathText);
			$('#deathText').velocity("transition.expandIn", 1000)
			clearInterval(game.timer);
			this.isDead = true;
		}
	}
}


const game = {
	pet: null,
	init () {
		$('.uiDisp').css('opacity', 1);
		$('#display').append('<img src="tama-sprites/Babytchi_anim_gen1.gif" id="sprite">');	
		this.render();
	}, 
	render () {
		$('#hungerDisp').html(`Hunger<br>${this.pet.hunger}`);
		$('#sleepinessDisp').html(`Fatigue<br>${this.pet.sleepiness}`);
		$('#boredomDisp').html(`Boredom<br>${this.pet.boredom}`);
		$('#ageDisp').html(`Age<br>${this.pet.age}`);		
	},
	startTimer () {
		this.timer = setInterval(() => {
			game.pet.birthday()

		}, 1500);
	},
	changeSprite () {
		if (this.pet.age === 5) {
			$('#sprite').attr('src', 'tama-sprites/Marutchi_anim_gen1.gif');
		} 
		if (this.pet.age === 12 ) {
			if (this.pet.hunger >=4 || this.pet.sleepiness >= 3 || this.pet.boredom >= 3) {
				$('#sprite').attr('src', 'tama-sprites/Kuchitamatchi_anim_gen1.gif');
			} else {
				$('#sprite').attr('src', 'tama-sprites/Tamatchi_anim_gen1.gif');
			}
		}
		if (this.pet.age === 20) {
			if ($('#sprite').attr('src') === 'tama-sprites/Tamatchi_anim_gen1.gif') {
				if (this.pet.hunger > 8 || this.pet.sleepiness > 8 || this.pet.boredom > 8) {
					$('#sprite').attr('src', 'tama-sprites/Tarakotchi_anim_gen1.gif')
				} else if (this.pet.hunger > 7 || this.pet.sleepiness > 7 || this.pet.boredom > 7) {
					$('#sprite').attr('src', 'tama-sprites/Nyorotchi_anim_gen1.gif');
				} else if (this.pet.hunger > 6 || this.pet.sleepiness > 6 || this.pet.boredom > 6) {
					$('#sprite').attr('src', 'tama-sprites/Kuchipatchi_anim_gen1.gif');
				} else if (this.pet.hunger > 4 || this.pet.sleepiness > 4 || this.pet.boredom > 4) {
					$('#sprite').attr('src', 'tama-sprites/Maskutchi_anim_gen1.gif');
				} else if (this.pet.hunger > 2 || this.pet.sleepiness > 2 || this.pet.boredom > 2) {
					$('#sprite').attr('src', 'tama-sprites/Ginjirotchi_anim_gen1.gif');
				} else {
					$('#sprite').attr('src', 'tama-sprites/Mametchi_anim_gen1.gif');
				}
			} 
			else {
				if (this.pet.hunger > 8 || this.pet.sleepiness > 8 || this.pet.boredom > 8) {
					$('#sprite').attr('src', 'tama-sprites/Tarakotchi_anim_gen1.gif')
				} else if (this.pet.hunger > 2 || this.pet.sleepiness > 2 || this.pet.boredom > 2) {
					$('#sprite').attr('src', 'tama-sprites/Nyorotchi_anim_gen1.gif');
				} else {
					$('#sprite').attr('src', 'tama-sprites/Kuchipatchi_anim_gen1.gif');
				}
			}
		} if (this.pet.age === 60) {
			$('#sprite').attr('src', 'tama-sprites/Bill_anim_gen1.gif');
		}
	},
	animateSprite () {

	},
	createPet (name) {
		this.pet = new Tamagotchi(0, 0, 0, 0, name, false)
		if (this.pet.isDead) {
			console.log('your pet is dead');
			this.restart()
		} else {
			this.init()
		}
	},
	reset () {
		$('#deathText').remove();
		$('#sprite').remove();
	}

}

$('form').on('submit', (e) => {
	e.preventDefault();
	const value = $("input[name='tamaName']").val();
	if (game.pet != null) {
		game.reset()
	}
	game.createPet(value);
	game.startTimer();
	$("input[name='tamaName']").val('');
})

$('#buttonRow').on('click', (e) => {

	if (game.pet === null || e.target.id === 'buttonRow') {
		return
	}
	if (e.target.id === 'feed') {
		game.pet.feed();
	}
	if (e.target.id === 'lights') {
		game.pet.sleep();
	}
	if (e.target.id === 'play') {
		game.pet.play();
	}
})


















