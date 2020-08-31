let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-game',
    physics: {
        default: 'matter',
        matter: {
            gravity: {y: 1},
            enableSleep: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

function preload() {
    this.load.image('ball', 'src/assets/sprites/general/ball.png');
}

function create() {
    // https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Matter.World.html
    this.matter.world.setBounds(0, 0, config.width, config.height, 32, true, true, false, true);

    for (var i = 0; i < 64; i++)
    {
        var ball = this.matter.add.image(400, -400, 'ball');
        ball.setCircle();
        ball.setFriction(0.005);
        ball.setBounce(1);
    }
}

function update() {
}


