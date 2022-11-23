import React  from "react";
import './calculator.css';

class MyCalculator extends React.Component {
    state = {
        consoleInput: 0, a: 0, b: 0,op:undefined,isConsoleGarbage:false 
        
        }

    clickHandler = (event) => {
        if(this.state.isConsoleGarbage){
            this.state.consoleInput="";
            this.state.isConsoleGarbage=false;
           
        }

        let temp= (this.state.consoleInput * 10) + parseInt(event.target.value);
        
        this.setState({ consoleInput: temp });
    
    
    }

    onClickOp = (event) => {
    
        this.setState({ a: this.state.consoleInput, op: event.target.value,isConsoleGarbage:true  });

    }
    onClickEqual = () => {

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

               default:

                console.log ("wrong number")
                break

            }
            
            this.setState({ consoleInput: result });
        }
    }

    clearDisplay = () => {
        this.setState({ consoleInput: 0 });
    }
    render() {
        if(this.state.show==false){
        
return(<button
    onClick={() => {
        this.setState({show:true});
         }}
> Open Calculator</button>)
        }

        return (    <div class="calculator">
                        <input type="text" value={this.state.a+this.state.op+this.state.consoleInput} className="exp-console" disabled />
                        <input type="text" value={this.state.consoleInput} className="ans-console" disabled />

                    <div class="btns">
                        <div className="btns-main">
                        <input type="button" value="AC" className="cbtn" onClick={this.clearDisplay} />
                        <input type="button" value="%" className="cbtn" onClick={this.clearDisplay} />
                        <input type="button" value="CLR" className="cbtn" onClick={this.clearDisplay} />
                        
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
                        </div>
                        <div class="btns-op">
                            <input type="button" value="/" className="cbtn" onClick={this.onClickOp} />
                            <input type="button" value="*" className="cbtn" onClick={this.onClickOp} />
                            <input type="button" value="-" className="cbtn" onClick={this.onClickOp} />
                            <input type="button" value="+" className="cbtn" onClick={this.onClickOp} />
                        </div>
                    </div>
            </div>)
    }

}
export default MyCalculator;