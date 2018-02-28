function saveGame() {
	var PlayerJson = JSON.stringify(Player)
	localStorage.setItem("game", PlayerJson)
	console.log("You've saved current progress")
}

function loadGame() {
	var currentProgress = localStorage.getItem("game")
	Player = JSON.parse(currentProgress)
	console.log("You've loaded previous progress")
}

function resetGame() {
	Player = new PlayerClass;
	console.log("You've started a new game")
	saveGame();
}

$('#saveGame').click(saveGame);
$('#resetGame').click(resetGame);