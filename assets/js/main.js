var game;


game = new Phaser.Game(600,450, Phaser.Auto, '');



game.state.add('Menu' , Menu);

game.state.start('Menu');

game.state.add('Game_Over' , Game_Over);

