function saveGame() {
	var PlayerJson = JSON.stringify(Player)
	localStorage.setItem("game", PlayerJson)
}

function loadGame() {
	var currentProgress = localStorage.getItem("game")
	Player = JSON.parse(currentProgress)
	console.log(Player)
}
