function submitAnswers() {

	var total = 4;

	var score = 0;




	var q1 = document.forms["quizForm"]["q1"].value;

	var q2 = document.forms["quizForm"]["q2"].value;

	var q3 = document.forms["quizForm"]["q3"].value;

	var q4 = document.forms["quizForm"]["q4"].value;



	

	

	for(i = 1; i <= total; i++) {

		if(eval('q'+i) == null || eval('q'+i) == '') {

			alert('You missed question '+ i);

			return false;

		}

	}



	

	var answers = ["b", "b", "d", "c",];



	

	for(i = 1; i <= total; i++) {

		if(eval('q'+1) == answers[i - 1]) {

			score++;

		}

	}





	var results = document.getElementById('results');

	results.innerHTML = '<h3>Your score is <span>'+ score + '</span> out of <span>'+ total+'</span></h3>'

	alert('Your score was ' + score + 'out of ' + total);



	return false;

}