class Ninja {
	constructor(name, health = 100, speed = 3, strength = 3){
	this.name = name
	this.health = health
	this.speed = speed
	this.strength = strength
	console.log(this.name+' ready!')
	}
	
	sayName(){
		console.log('Name: '+this.name);

	}
	showStats(){
		console.log('Health: '+this.health+'\nStrength: '+this.strength+'\nSpeed: '+this.speed)

	}
	drinkSake(){
		this.health += 10
		console.log('Health: '+this.health);

	}

}

class Sinsei extends Ninja{
	constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
		super(name, health, speed, strength)
		this.wisdom = wisdom
	}
	speakWisdom(){
		super.drinkSake()
		console.log('all is one, one is all...')
	}
	showStatsSen(){
		this.showStats();
			console.log(`Wisdom: ${this.wisdom}`)
		
	}

}

const sinsei = new Sinsei('Gandolf')

sinsei.showStats()
