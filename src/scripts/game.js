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
    this.load.image('ball', 'assets/sprites/pangball.png');
}

function create() {
    // https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Matter.World.html
    this.matter.world.setBounds(0, 0, config.width, config.height, 32, true, true, true, true);
}

function update() {
}


