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
		this.render();
	} 
	render () {
		$('#hungerDisp').text(`Hunger: ${this.hunger}`);
		$('#sleepinessDisp').text(`Sleepiness: ${this.sleepiness}`);
		$('#boredomDisp').text(`Boredom: ${this.boredom}`);
		$('#ageDisp').text(`Age: ${this.age}`);
		
	}
	feed () {
		this.hunger--;
		this.render();
	}
	sleep () {
		this.sleepiness--;
		this.render();
	}
	play () {
		this.boredom--;
		this.render();
	}
	birthday () {
		this.age++;
		this.hunger++;
		this.boredom++;
		this.sleepiness++;
		this.checkHealth();
		this.render();
	}
	checkHealth () {
		const $deathText = $('<h2 id="deathText"></h2>').text("You Died")
		if (this.hunger === 10 || this.sleepiness === 10 || this.boredom === 10) {
			$('#sprite').append($deathText);
			clearInterval(game.timer);
		}
	}
}

const myPet = new Tamagotchi(0, 0, 0, 0);

myPet.init()

const game = {
	timer: setInterval(() => {
		myPet.birthday()
	}, 600),
	reset () {

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





