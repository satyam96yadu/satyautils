import React from "react";
import './MySanke.css';


class SankeGmae extends React.Component{

    componentDidMount(){
        this.myComputer();
    }
    
    myGame=()=>{
        var a=10;
        var b=20;
        for(var i=0;i<10;i++){
            for(var j=0;j<=b;j++){
                console.log("*");
            }
            console.log("---");
        }
    }
    render(){
        return(<div className="Game">





        </div>)
    }
}
export default SankeGmae;