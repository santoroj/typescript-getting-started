function startGame() {
    // starting a new game
    var playerName = 'Audry';
    playerName = undefined;
    logPlayer(playerName);
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath! Starting new game...';
}
function logPlayer(name) {
    console.log("New game starting for player: ".concat(name));
}
document.getElementById('startGame').addEventListener('click', startGame);
