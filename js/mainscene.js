import Snaek from "./snaek.js"

export default class MainScene extends Phaser.Scene {
    constructor(){
        super("MainScene");
    }
    
    preload() {}

    create(){
        
        this.snaek = new Snaek(this);
            
    }
    
    update(time){
        
        this.snaek.update(time);
        
    }
    
}