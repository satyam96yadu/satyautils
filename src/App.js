import React, { Component } from "react";
import { PassportImage, MyList, MyComputer, BallGame, EventHandlingDemo, MyCalculator } from './AllWidgets';

import './App.css';
class App extends Component {
    render() {
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