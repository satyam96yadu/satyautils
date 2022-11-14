import React from 'react';
import ReactDOM from 'react-dom/client';


function BasicCalculator()
{
    return(<div>
        <h1>This is calculator code</h1>
    <button>+</button>
    <button>-</button>
    <button>/</button>
    <button>*</button>
    </div>)
}

function ScientificCalculator(props)
{
    return(<div style={{background:props.myColor}}>

    <input type="text" value="Enter anything"/>
    <h1 style={{color:props.myTitleColor}}>{props.myTitle}</h1>
    <button type="button">%</button>
    <button>&</button>
    </div>)
}

class AdvanceCalculator extends React.Component{
    render(){
        return(<div>
            <h1 style={{color:this.props.textColor}}>Advance Calculator</h1>
            <button>Click Me</button>
        </div>)
    }   
}

function MyButton(props){
    return(<button style={{background:"black",color:"#FFFFFF",borderRadius:10}}>{props.children}</button>)
}


ReactDOM.createRoot(document.getElementById("root")).render(<div>

<MyButton>Click Again</MyButton>
<MyButton>Click Me</MyButton>
<MyButton>My Button</MyButton>
<MyButton>Awesome Button</MyButton>

<BasicCalculator/>

<ScientificCalculator myColor="orange" myTitle="My Scientific Calculator" myTitleColor="green"/>

<ScientificCalculator myColor="red" myTitle="Red Scientific Calculator" myTitleColor="grey"/>

<ScientificCalculator myColor="yellow" myTitle="Yellow Scientific Calculator" myTitleColor="purple"/>


<AdvanceCalculator textColor="blue"/>

</div>
);

