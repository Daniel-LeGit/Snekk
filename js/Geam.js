import { mainscene } from "./mainscene.js"

const config = {
    
    width: 750,
    height: 725,
    type: Phaser.auto,
    parent: "gamebox",
    scene: [mainscene]
    
}

new Phaser.Game(config);