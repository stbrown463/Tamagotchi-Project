console.log('the page is loaded');

const $screen = $('#screen')

class Tomagotchi {
	constructor(hunger, sleepiness, boredom, age) {
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;
	}
	init () {
		const $hungerDisp = $('')
	} 
}

const myPet = new Tomagotchi(0, 0, 0, 1);
console.log(myPet);