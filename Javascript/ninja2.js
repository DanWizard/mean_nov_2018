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
	this.punch = function(puncher){
		this.puncher = puncher
		this.health -= 5
		console.log(this.name+' was punched by '+this.puncher.name+'\nHealth: '+this.health)
	}
	this.kick = function(kicker){
		this.kicker = kicker
		damage = 15 * strength
		this.health += -(15*strength)
		console.log(this.name+' was kicked by '+this.kicker.name+'\nHealth: '+this.health)
	}
}

const Naruto =  new Ninja('Naruto')
const ninja = new Ninja('Guy')

Naruto.kick(ninja)