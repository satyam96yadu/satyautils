import React from "react";

class Jpractice extends React.Component {
    //constructor() {

    //  console.log("constructor called")

    //}

    componentDidMount() {

        console.log("class mounted")




    }
    componentWillMount() {

        console.log("class will mounted")



    }
    componentWillUnmount() {

        console.log("compen will unmounted")

        // alert("page unloding")


    }



    render() {
        console.log("render called")


        return (<div>world</div>)
    }
}

export default Jpractice;
