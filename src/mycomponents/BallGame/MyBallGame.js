import React from "react";
import './BallGame.css';

const BALL_COLORS = ["#ff0000", "#00ff00", "#fff000", "pink", "purple", "cyan"];

const MILISECONDS = 38;
const BOX_WIDTH = 700;
const BOX_HEIGHT = 500;
var ballSpeedX = 3;
var ballSpeedY = 3;
var ballSize = 50;
const DIAMETRE = 20;
var xdistance = 10;
var ydistance = 10;
var xspeed = 5;
var yspeed = 10;
var ydirection = 1;
var xdirection = 1;
var width = 500;
var height = 500;

class BallGame extends React.Component {
    state = {
        ballX: 0,
        ballY: 0,
        running: 0,
        ballColor: "#00ff00"

    }

    changeBallColor = () => {
        // var z1=10; //global
        // let z2=20; //local
        // const Z3=30;

        let currentColorIndex = BALL_COLORS.indexOf(this.state.ballColor);

        currentColorIndex = (currentColorIndex < BALL_COLORS.length - 1) ? currentColorIndex + 1 : 0;

        this.setState({ ballColor: BALL_COLORS[currentColorIndex] });

        // console.log(z1+" "+z2+" "+Z3);
    }
    moveball = () => {
        // console.log(z1+" "+z2+" "+Z3);
        setTimeout(() => {



            if (this.state.running == 1) {


                xdistance += xspeed * xdirection;
                ydistance += yspeed * ydirection;

                if (ydistance > height - 20) {
                    ydirection = -ydirection;

                }
                if (ydistance < 0 + 20) {
                    ydirection = -ydirection;

                }
                if (xdistance > width - 20) {
                    xdirection = -xdirection;

                }
                if (xdistance < 0 + 20) {
                    xdirection = -xdirection;

                }


                if (this.state.ballX < 0 || this.state.ballX > BOX_WIDTH - ballSize) {
                    ballSpeedX = (-1 * ballSpeedX);

                    this.changeBallColor();
                }

                if (this.state.ballY < 0 || this.state.ballY > BOX_HEIGHT - ballSize) {
                    ballSpeedY = (-1 * ballSpeedY);

                    this.changeBallColor();
                }
                // console.log(ballSpeedX+"   "+ballSpeedY+" | "+this.state.ballX+"   "+this.state.ballY);

                this.setState({ ballX: this.state.ballX + ballSpeedX, ballY: this.state.ballY + ballSpeedY });
                this.moveball();

            }
        }, MILISECONDS);

    }
    componentDidMount() {
        this.moveball();

    }
    render() {

        return (<div>
            <div className="canvas" style={{ width: BOX_WIDTH, height: BOX_HEIGHT }}>

                <div className="ball" style={{ left: this.state.ballX, top: this.state.ballY, width: ballSize, height: ballSize, background: this.state.ballColor }}></div>


            </div>

            <button
                onClick={() => {
                    this.setState({ running: 1 });

                    if (this.state.running == 1) {
                        this.setState({ running: 0 });

                    }
                    else if (this.state.running == 0) {
                        this.setState({ running: 1 });
                        this.moveball();
                    }

                }}
            >{(this.state.running == 0) ? "play" : "pause"}</button>

            <label style={{ background: "green" }}>{this.state.running}</label>
        </div>

        )
    }

}
export default BallGame;