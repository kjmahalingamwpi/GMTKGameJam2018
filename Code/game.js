// initialize game
game = new Phaser.Game(
  1280,
  720,
  Phaser.CANVAS,
  ''
);

gameManager = new GameManager();

// Add game states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('instructions', instructionState)

// Start boot state
game.state.start('boot');
