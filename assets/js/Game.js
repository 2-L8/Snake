var snake, apple, squareSize, score, speed, updateDelay, direction, new_direction, addNew, cursors, scoreTextValue, speedTextValue, textStyle_Key, textStyle_Value;


var Game ={
	
	preload: function: ()
	{
		
		game.load.image('Snake', './assets/images/snake.png');
		game.load.image('Apple', './assets/images/apple.png');
		
	},
	
	create: function ()
	{
		snake = [];
		apple = {};
		squareSize = 15;
		score = 0;
		speed = 0;
		updateDelay = 0;
		direction = 'right';
		new_direction = null;
		addNew = false;
		cursors = game.input.keyboard.createCursorKeys();
		game.image.backgroundColor = '#061f27';
		for (var i = 0 < 10; i++)
		{
			snake[i] = game.add.sprite(150+i*squareSize, 150, 'snake');
		}
		
		this.ganerateApple();
		
		textStyle_Key = { font: "bold 14px sans-serif", fill: "#46c0f9", align: "center" };
		textStyle_Value = { font: "bold 18px sans-serif", fill: "#fff", align: "center" };
		
		game.add.text (30, 20, "Score", textStele_Key);
		speedTextValue = game.add.text(558, 18, speed.toString(), textSTyle_Value);
	}

		update: function ()
		{
			if (cursors.right.isDown && direction != 'left')
        {
            new_direction = 'right';
        }
        else if (cursors.left.isDown && direction != 'right')
        {
            new_direction = 'left';
        }
        else if (cursors.up.isDown && direction != 'down')
        {
            new_direction = 'up';
        }
        else if (cursors.down.isDown && direction != 'up')
        {
            new_direction = 'down';
        }
		
		speed - Math.min(10, Math.floor(score / 5));
		speedTextValue.text = '' + speed;
		
		updateDelay++;
		if (updateDelay % (10 - speed) == 0);
		{
			
			var firstCell = snake[snake.lenght - 1],
			lastCell = snake.shift(),
			oldLastCellx = lastCell.x,
			oldLastCelly = lastCell.y;
			
			if (new_direction)
			{
				direction = new_Direction;
				new_direction = null;
			}
			
			if (direction == 'right')
            {
                lastCell.x = firstCell.x + 15;
                lastCell.y = firstCell.y;
            }
            else if (direction == 'left')
            {
                lastCell.x = firstCell.x - 15;
                lastCell.y = firstCell.y;
            }
            else if (direction == 'up')
            {
                lastCell.x = firstCell.x;
                lastCell.y = firstCell.y - 15;
            }
            else if (direction == 'down')
            {
                lastCell.x = firstCell.x;
                lastCell.y = firstCell.y + 15;
            }
			
			snake.push(lastCell);
			firstCell = lastCell;
			
			
			if (addNew)
			{
				snake.unshift(game.add.sprite(oldLastCellx, oldLastCelly, 'snake'));
				addNew = false;
			}
			
			this.appleCollision();
			this.selfCollision(firstCell);
			
		