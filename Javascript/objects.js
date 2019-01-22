function listAll(){
	let list = [
	{name: 'Remy', cohort: 'Jan'},
	{name: 'Genevieve', cohort: 'March'},
	{name: 'Chuck', cohort: 'Jan'},
	{name: 'Osmund', cohort: 'June'},
	{name: 'Nikki', cohort: 'June'},
	{name: 'Boris', cohort: 'June'}
	];

	for(var i in list){
		console.log('NAME: '+list[i]['name']+' COHORT: '+list[i]['cohort'])
	}
	return true;
}
// listAll()

function listSome(){
	let list = {
		employees: [
		{'first_name':  'Miguel', 'last_name' : 'Jones'},
		{'first_name' : 'Ernie', 'last_name' : 'Bertson'},
		{'first_name' : 'Nora', 'last_name' : 'Lu'},
		{'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
		],
		managers: [
		{'first_name' : 'Lillian', 'last_name' : 'Chambers'},
		{'first_name' : 'Gordon', 'last_name' : 'Poe'}
		]
	};
	console.log('vyo')
	for(i in list){
		console.log(i)
		console.log(list[i])
	}
}

listSome()