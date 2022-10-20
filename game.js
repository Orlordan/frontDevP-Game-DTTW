const canvas = document.querySelector('.game');
const game = canvas.getContext('2d')
window.addEventListener('load', startGame);
function startGame() {
  //game.fillRect(0,0,100,100);
  //game.clearRect(0,0,50,50);
  //game.clearRect(0,0,50,100);
  game.font = '55px Verdana';
  game.fillStyle = 'blue';
  game.textAlign = 'center'; 
  game.fillText('Hola',100,100);
}