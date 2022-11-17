import React, { useState } from "react";


class PassportImage extends React.Component {


    render() {
        return (<div style={{ display: 'flex', flexDirection: 'column', width: 250, alignItems: 'center', margin: 25 }}>

            <img src={this.props.imgSrc}
                style={{
                    justifyContent: this.props.MyContent,
                    height: 200,
                    width: "90px",
                    padding: 10,
                    border: '2px solid #000000'
                }}></img>
            <h1 style={{ background: "rgba(0,0,0,0.75)", color: "#fff", textAlign: this.props.textalign, margin: 0, width: '100%' }}>{this.props.name}</h1>
        </div>)

    }
}


class MyList extends React.Component {



    render() {




        return (<table border="1px">
            <thead>
                <tr><th>Sr.No.</th><th>Name</th><th>Price</th></tr>
            </thead>
            <tbody>
                {this.props.items && this.props.items.map((item, index) => {
                    return (<tr key={"row" + index}><td>{index + 1}</td><td>{item.name}</td><td>{item.price}</td></tr>)
                })}
            </tbody>
        </table>);



        return (<ul>
            {this.props.items.map((item, index) => {
                return (<li>{index + 1}{". "}{item.name}{" "}{"Rs. " + item.price}</li>)
            })}
        </ul>);



        var htmlContent = [];
        if (this.props.items) {
            for (let i = 0; i < this.props.items.length; i++) {
                htmlContent.push(<li>{this.props.items[i]}</li>);
            }
        }

        return (<ul>
            {htmlContent}
        </ul>)
    }

}

class MyComputer extends React.Component {
    state = {
        inputFields: [
            { type: "text", placeholder: "Enter name" },
            { type: "email", placeholder: "Enter email" },
            { type: "number", placeholder: "Enter age" },
            { type: "button", value: "Add new field" },
        ]
    }
    render() {
        var i = 0;
        const I = 0;
        let abc = "abc";



        return (<div>
            {this.state.inputFields.map((item, index) => {

                if (item.type == "button") {
                    return (<input type={item.type} value={item.value} onClick={() => {
                        const myList = this.state.inputFields;

                        myList.push({ type: "text", placeholder: "My Text Field" });

                        this.setState({ inputFields: myList });
                    }} />)
                }

                return (<input type={item.type} placeholder={item.placeholder} key={"input" + index} />)

            })}

        </div>)


    }




}



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

class MyCalculator extends React.Component {
    state = {
        consoleInput: 0, a: 0, b: 0, op: undefined
    }

    clickHandler = (event) => {
        let temp = (this.state.consoleInput * 10) + parseInt(event.target.value);
        this.setState({ consoleInput: temp });

    }
    onClickOp = (event) => {
        this.setState({ a: this.state.consoleInput, op: event.target.value });

    }
    onClickEqual = (event) => {

        if (this.state.op) {
            let a = this.state.a;
            let b = parseInt(this.state.consoleInput);
            let result = 0;

            switch (this.state.op) {
                case '+':
                    result = a + b;
                    break;

                case '-':
                    result = a - b;
                    break;

                case '/':
                    result = a / b;
                    break;

                case '*':
                    result = a * b;
                    break;

            }
            this.setState({ consoleInput: result });

        }

    }
    clearDisplay = () => {
        this.setState({ consoleInput: 0 });
    }
    render() {

        return (<div>

            <div class="btns">

                <div className="btns-main">

                    <input type="text" value={this.state.consoleInput} className="answer" disabled />
                    <input type="button" value="1" className="cbtn" onClick={this.clickHandler} />
                    <input type="button" value="2" className="cbtn" onClick={this.clickHandler} />
                    <input type="button" value="3" className="cbtn" onClick={this.clickHandler} />
                    <input type="button" value="4" className="cbtn" onClick={this.clickHandler} />
                    <input type="button" value="5" className="cbtn" onClick={this.clickHandler} />
                    <input type="button" value="6" className="cbtn" onClick={this.clickHandler} />
                    <input type="button" value="7" className="cbtn" onClick={this.clickHandler} />
                    <input type="button" value="8" className="cbtn" onClick={this.clickHandler} />
                    <input type="button" value="9" className="cbtn" onClick={this.clickHandler} />
                    <input type="button" value="." className="cbtn" onClick={this.clickHandler} />
                    <input type="button" value="0" className="cbtn" onClick={this.clickHandler} />
                    <input type="button" value="=" className="cbtn" onClick={this.onClickEqual} />
                    <input type="button" value="CLR" className="cbtn" onClick={this.clearDisplay} />
                    <input type="button" value="/" className="cbtn" onClick={this.onClickOp} />
                    <input type="button" value="*" className="cbtn" onClick={this.onClickOp} />
                    <input type="button" value="-" className="cbtn" onClick={this.onClickOp} />
                    <input type="button" value="+" className="cbtn" onClick={this.onClickOp} />

                </div>


            </div>

        </div>)
    }

}


class EventHandlingDemo extends React.Component {


    render() {

        return (<React.Fragment>

            <input type="text"
                onClick={() => {
                    console.log("Textfield clicked!");
                }}


                onFocus={() => {
                    console.log("Focused!");
                }}


                onKeyDown={() => {
                    console.log("Some key is pressing!");
                }}

                onChange={() => {
                    console.log("Text changed!");
                }}

                onKeyUp={() => {
                    console.log("You pressed some key");
                }}

                onBlur={() => {
                    console.log("Blur");
                }}

            />


            <select onChange={(event) => {
                console.log(event.target.value);
            }}>
                <option>Select</option>
                <option>India</option>
                <option>Australia</option>
                <option>UK</option>
                <option>USA</option>
            </select>

            <input
                style={{ textTransform: "uppercase" }}
                onFocus={(event) => {
                    event.target.select();
                }}
                type="text" onKeyDown={(event) => {
                    // event.target.value;

                    if (event.key == 'L') {
                        event.preventDefault();
                    }

                }} />

            <button
                draggable
                onDrag={() => {
                    console.log("You dragging a button");
                }}
                onDragStart={() => {
                    console.log("Dragging started");
                }}
                onDragEnd={() => {
                    console.log("Dragging stopped");
                }}
                onClick={() => {
                    alert("Hi!");
                }}>Click Me</button>


            <div
                onMouseOver={(event) => {
                    console.log(event.pageX + " " + event.pageY);
                }}
                onMouseOut={() => {
                    console.log("Mouse Gone");
                }}
                style={{ background: "yellow", width: 100, height: 100 }}
                onDragStart={() => {
                    console.log("Something dropped on me");
                }}>

            </div>
        </React.Fragment>)
    }
}

export { PassportImage, MyList, MyComputer, BallGame, EventHandlingDemo, MyCalculator };