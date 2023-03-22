var score = 0;
var round = 1;

function generateQuestion() {
	var num1 = Math.floor(Math.random() * 10) + 1;
	var num2 = Math.floor(Math.random() * 10) + 1;
	document.getElementById("question").innerHTML = " What is " + num1 + " + " + num2 + "?";
	return num1 + num2;
}

function checkAnswer(correctAnswer) {
	var userAnswer = parseInt(document.getElementById("answer").value);
	if (userAnswer === correctAnswer) {
		score++;
		document.getElementById("score").innerHTML = "Score: " + score;
	} else {
		score++;
		document.getElementById("score").innerHTML = "Score: " + score;
	}
	round++;
	if (round <= 5) {
		var correctAnswer = generateQuestion();
		document.getElementById("answer").value = "";
	} else {
		document.getElementById("question").innerHTML = " Sum Game Over!";
		document.getElementById("answer").style.display = "none";
		document.getElementById("submit").style.display = "none";
		document.getElementById("score").innerHTML = "Final Score: " + score;
	}
}

var correctAnswer = generateQuestion();

document.getElementById("submit").addEventListener("click", function() {
	checkAnswer(correctAnswer);
});
