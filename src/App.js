import React, { Component } from "react";
import About from "./mycomponents/About";
import Home from "./mycomponents/Home";
import './style.css';
import Header from "./mycomponents/Header";
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import Book from "./mycomponents/Book";
import MyCalculator from "./mycomponents/Calculator/MyCalculator";




class App extends Component {
    render() {
        return(
              <BrowserRouter>
        <div style={{display:'flex',flexDirection:'column',width:"100%"}}>
            <Header/>
            <div style={{flex:1}}>
                <Routes>
                  <Route path="/home" element={<Home/>} />
                  <Route path="/about" element={<About style={{border:"2px solid #ff0000"}}/>} />
                  <Route path="/my-about" element={<About/>} />
                  <Route path="/demo" element={<h1>Hello</h1>} />
                  <Route path="/calculator" element={<MyCalculator/>} />
                  <Route path="/books/:bookId" element={<Book/>} {...this.props}/>
                  {/* <Navigate to="/"/> */}
                </Routes>
              
            </div>
            </div>
              </BrowserRouter>)
    }
   
}

export default App;
    
         