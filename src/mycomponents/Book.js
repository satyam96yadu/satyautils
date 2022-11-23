import React from 'react';
class Book extends React.Component{
    componentDidMount(){
        if(this.props.match.params.bookId!=this.bookId){
            this.bookId=this.props.match.params.bookId;
        }
        console.log(">>>>>>>>>>>>>> "+this.bookId);
    }
    render(){
        return(<h1>Welcome to book store</h1>)
    }
}
export default Book;