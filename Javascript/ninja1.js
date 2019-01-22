function Ninja(name, health = 100, strength = 3, speed = 3){
	this.name = name
	this.health = health
	var speed = speed
	var strength = strength
	this.sayName = function(){
		console.log(this.name)
	}
	this.showStats = function(){
		console.log('Health: '+this.health+'\nStrength: '+strength+'\nSpeed: '+speed)
	}
	this.drinkSake = function(){
		this.health += 10
		console.log('Health: '+this.health)
	}
}

const Naruto =  new Ninja('Naruto')
Naruto.drinkSake()