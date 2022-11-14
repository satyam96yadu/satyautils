import React from 'react';
import './style.css';
// var console = document.getElementById("console");



class Main extends React.Component {

    state={outputHtml:[]}




 multiplyMatrix=()=> {
    var a = [
        [10, 20, 3],
        [40, 50, 60],
        [77, 88, 99]
    ];

    var b = [
        [11, 22, 33],
        [33, 44, 55],
        [14, 15, 16]
    ];

    var c = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    var colors=[
        ["red","green","yellow"],
        ["blue","orange","purple"],
        ["grey","pink","cyan"],
    ]

    var messages=[
        ["Hi red","green","yellow"],
        ["blue","Hi orange","purple"],
        ["grey","pink","Hi cyan"],
    ]


    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            for (let x = 0; x < a.length; x++) {
                c[i][j] += a[i][x] * b[x][j];
            }
        }
    }



    var tmpArr=[];

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            // tmpOutput+=(c[i][j] + " ");
            tmpArr.push(<button 
                style={{backgroundColor:colors[i][j],margin:0,border:"2px solid #FFFFFF",padding:5,width:50,height:50}}
                onClick={()=>{
                    alert(messages[i][j]);
                }}>{c[i][j]}</button>);
        }
        // tmpOutput+="\n";
        tmpArr.push(<br/>);
    }


    return tmpArr;

}


componentDidMount(){
    //Whenever component loaded, it calls
    var tmpArrHtml=this.multiplyMatrix();
    this.setState({outputHtml:tmpArrHtml});
    // alert(output);
    
}

    render(){




    return (<form>
        <div className="console" disabled>{this.state.outputHtml}</div>
    </form>)
    }
}

export default Main // export default Main;