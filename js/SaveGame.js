function saveGame() {
	var PlayerJson = JSON.stringify(Player)
	localStorage.setItem("game", PlayerJson)
}

function loadGame() {
	var currentState = localStorage.getItem("game")
	var returnObj = JSON.parse(currentState)

	Player = returnObj;
}
