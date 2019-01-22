class Bike {
    price: number
    max_speed: number
    miles: number

	constructor(price:number = 0, max_speed:number, miles:number){
	this.price = price
	this.max_speed = max_speed
	this.miles = miles
	console.log(+' ready!')
	}
	
    displayInfo() {
        console.log(`Price: ${this.price}\nMax Speed: ${this.max_speed}\nMiles: ${this.miles}`);
        return this
    }

    ride(){
    	console.log(`riding...`)
    	this.miles += 10
    	return this
    }
    reverse(){
    	console.log(`reversing`)
    	this.miles -= 10
    }
}
	
