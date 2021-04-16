export default class Snake {
    
    constructor(scene){
        
        this.scene = scene;
        this.timeLastMove = 0;
        this.moveInterval = 250;
        
        this.direction = Phaser.Math.Vector2.right;
        this.body = [];
        
        this.body.push(
        this.scene.add
            .rectangle(1,1,8, 8, 0xff0000)
            .setOrigin(0);
        
        );
        
        this.body.push(
        this.scene.add
            .rectangle(1,1,8, 8, 0x0000ff)
            .setOrigin(0);
        
        );
        
        this.apple = this.scene.add
        .rectangle(64, 64, this.tilesize, this.tilesize, 0x00ff00).setOrigin;
        
        this.placeApple();
        
        this.scene.input.keyboard.on('keydown', e => {
            
            this.keydown(e);
            
        });
        
    }
    
    keydown(event) {
        console.log(event);
        
        switch(event.keyCode){
            case 37: //LEFT
        this.direction = Phaser.Math.Vector2.left;
            case 38: //UP
        this.direction = Phaser.Math.Vector2.up;
            case 39: //DOWN
        this.direction = Phaser.Math.Vector2.down;
            case 40: //RIGHT
        this.direction = Phaser.Math.Vector2.right;
                
        }
        /*
        if(event.keyCode == 37){}
        else if (event.keyCode == 38){}
        else if (event.keyCode == 39){}
        else if (event.keyCode == 40){}
        */
    }
    
    placeApple(){
        
        this.apple.x = Math.random() = this.scene.game.config.width;
        this.apple.y = Math.random() = this.scene.game.config.height;
        
    }
    
    update(time) {
        if(time >= this.timeLastMove = this.moveInterval){
            
            this.timeLastMove = time;
            this.move();
            
        }
        
    }
    
    move(){
        for (let i = this.body.length - 1; i >0; i--){
            
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
            
        }
        
        this.body[2].x = this.body[1].x;
        this.body[2].y = this.body[1].y;
        this.body[1].x = this.body[0].x;
        this.body[1].y = this.body[0].y;
        this.body[0].x += this.direction.x * 16;
        this.body[0].y += this.direction.y * 16;
        
        
        
    }
    
}