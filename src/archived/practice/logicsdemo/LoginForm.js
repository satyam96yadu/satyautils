import React from "react";
import './style.css';
class LoginForm extends React.Component{
    state={
        email:"abc@gmail.com",
        password:"123456"
    }

    validateFormData=(e)=>{
        e.preventDefault();
        var email=this.state.email;
        var password=this.state.password;

        alert(email+" "+password);

    }
    render(){

        return(<form onSubmit={(e)=>{
            this.validateFormData(e);    
        }}>
            <h1>login</h1>
        <div className="login">
        <input type="text" placeholder="email"className="password" value={this.state.email} onChange={(e)=>{
            let val=e.target.value;
            this.setState({email:val});
        }}></input>
        <input type="password" placeholder="password" className="password" value={this.state.password} onChange={(e)=>{
            let val=e.target.value;
            this.setState({password:val});
        }}></input>
        
        <button type="summit" className="click">summit</button>
        </div>
        <h1>{this.state.email}</h1>
        <h1>{this.state.password}</h1>
        </form>)
    }
}


export default LoginForm;





