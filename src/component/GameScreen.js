import React, { Component } from 'react'

const key = {
    LEFT:  37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
    SPACE: 32
}

class GameScreen extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            ctx: null,
            gameScreen: {
                width: 750,
                height: 375
            }
        }
        this.box = {
            width: 10,
            height: 10,
            x: 10,
            y: 10,
            speed: 0.5
        }
        this.keyPress = {
            left: false,
            right: false,
            up: false,
            down: false,
            space: false
        }

        setTimeout(this.initGameScreen, 1000); // 게임 스크린 딜레이 주기
    }

    async componentDidMount() {
        const ctx = document.getElementById("gameScreen").getContext("2d");
        await this.setState({ ctx: ctx });

        const t = this;
        
        window.onkeydown = function(e) {
            if(e.keyCode === key.LEFT) t.keyPress.left = true;
            if(e.keyCode === key.RIGHT) t.keyPress.right = true;
            if(e.keyCode === key.UP) t.keyPress.up = true;
            if(e.keyCode === key.DOWN) t.keyPress.down = true;
            if(e.keyCode === key.SPACE) t.keyPress.space = true;
        }

        window.onkeyup = function(e) {
            if(e.keyCode === key.LEFT) t.keyPress.left = false;
            if(e.keyCode === key.RIGHT) t.keyPress.right = false;
            if(e.keyCode === key.UP) t.keyPress.up = false;
            if(e.keyCode === key.DOWN) t.keyPress.down = false;
            if(e.keyCode === key.SPACE) t.keyPress.space = false;
        }
        

        // gameMain
        setInterval(function() {
            t.update();
            t.draw();
        }, 10);
    }

    update = () => {
        if(this.keyPress.left == true) this.box.x -= this.box.speed;
        if(this.keyPress.right == true) this.box.x += this.box.speed;
        if(this.keyPress.up == true) this.box.y -= this.box.speed;
        if(this.keyPress.down == true) this.box.y += this.box.speed;
    }

    draw = () => {
        this.state.ctx.clearRect(0, 0, this.state.gameScreen.width, this.state.gameScreen.height);

        this.drawBox();
    }

    drawBox = () => {
        const t = this;
        
        this.state.ctx.beginPath();
        this.state.ctx.rect(t.box.x, t.box.y, t.box.width, t.box.height);
        this.state.ctx.fillStyle = "green";
        this.state.ctx.fill();
        this.state.ctx.closePath();
    }

    
    render() {
        const gameScreen = {
            width: this.state.gameScreen.width,
            height: this.state.gameScreen.height,
            display: "block",
            margin: "0 auto",
            background: "rgba(0, 0, 0, 0.1)"
        }

        return (
            <canvas id="gameScreen" style={gameScreen}></canvas>
        )
    }
}

export default GameScreen;