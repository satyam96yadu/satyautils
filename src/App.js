import React, { Component } from "react";
import About from "./mycomponents/About";
import Home from "./mycomponents/Home";
import './style.css';
import Header from "./mycomponents/Header";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

let router=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/About",
        element:<About/>
    },

    {
        path:"/Home",
        element:<Home/>
}
]);

class App extends Component {
    render() {
        return(
        <div style={{display:'flex',flexDirection:'column',width:"100%"}}>
            <Header/>
            <div style={{flex:1}}>
                <RouterProvider router={router}/>
            </div>
      
        </div>)
    }
   
}

export default App;
    
         