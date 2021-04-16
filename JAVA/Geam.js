import MainScene from "./mainscene.js"

const config = {
    
    width: 360,
    height: 360,
    type: Phaser.auto,
    parent: "gamebox",
    scene: [MainScene]
    
}

new Phaser.Game(config);