import snaek from "./snaek.js"

export class mainscene extends Phaser.Scene {
    constructor(){
        super("mainscene");
    }
    
    preload() {}

    create(){
        
        this.snaek = new snaek(this);
            
    }
    
    update(time){
        
        this.snaek.update(time);
        
    }
    
}