import React, { Component } from "react";
import { PassportImage, MyList, MyComputer, BallGame, EventHandlingDemo, MyCalculator, } from './AllWidgets';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css';


let router=createBrowserRouter([
    {
        path:"/",
        element:<MyCalculator/>
    },
    {
        path:"/game",
        element:<BallGame/>
    }
]);


  ReactDOM.render(routing, document.getElementById('root'));

class App extends Component {
    
    render() {
        return(<div style={{display:'flex',flexDirection:'column',border:'2px solid #00ff00',width:600,height:800}}>
            <div style={{background:'#CCCCCC',height:100}}>
                <a href="/">Calculator</a>
                <a href="/game">Game</a>
            </div>
            <div style={{border:'2px solid #000000',flex:1}}>
                <RouterProvider router={router}/>
            </div>
        </div>)

        
        return (<div className="passport-image-container">


            {/* <EventHandlingDemo/>


        <PassportImage 
        imgSrc='https://a-z-animals.com/media/tiger_laying_hero_background.jpg'
        name="TIGER"
        textalign="center"/>
        
<MyList items={[
    {name:"Apple",price:100},
    {name:"Mango",price:50},
    {name:"Banana",price:60}
    ]}/>

<MyComputer/> 
            <BallGame />*/}


            <MyCalculator />

        </div>)

    }
}

export default App;