$(document).ready(function(){
	$.get('https://opentdb.com/api.php?amount=10&category=22',	 displayName)
	function displayName(data){
		// answers = [];
		// console.log('yo')
		for(i in data['results']){
			questions.push(data['results'][i]['question']);
			console.log(questions);
			tag = document.createElement('P');
			text_for_tag = document.createTextNode(data['results'][i]['question']);
			tag.appendChild(text_for_tag);
			element = document.getElementById('Father');
			element.appendChild(tag);
			answers.push(data['results'][i]['correct_answer'])
			for(v in data['results'][i]['incorrect_answers']){
				answers.push(data['results'][i]['incorrect_answers'][v]);
			}
			for(z in answers){
				console.log(answers[z]);
				ans = document.createElement('P');
				text_for_ans = document.createTextNode(answers[z]);
				ans.appendChild(text_for_ans);
				element.appendChild(ans);
			}
			answers = []	
		}
	};

});
