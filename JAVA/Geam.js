import { mainscene } from "./mainscene.js"

const config = {
    
    width: 900,
    height: 600,
    type: Phaser.auto,
    parent: "gamebox",
    scene: [mainscene]
    
}

new Phaser.Game(config);