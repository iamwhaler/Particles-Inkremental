function saveGame() {
	var PlayerJson = JSON.stringify(Player)
	localStorage.setItem("game", PlayerJson)
	console.log("Progress has been saved")
}

function loadGame() {
	var currentProgress = localStorage.getItem("game")
	Player = JSON.parse(currentProgress)
	console.log("Progress has been loaded")
}

function resetGame() {
	Player = new PlayerClass;
	console.log("Previous progress has been reset")
	saveGame();
}

$('#saveGame').click(saveGame);
$('#resetGame').click(resetGame);