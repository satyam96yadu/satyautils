import React from "react";
import './style.css';
class LoginForm extends React.Component {
    state = {
        email: "abc@gmail.com",
        password: "12345 ",
        errorMessage: ""
    }

    showError = (message) => {
        this.setState({ errorMessage: message });
        setTimeout(function () {
            this.setState({ errorMessage: "" });
        }.bind(this), 3000)
    }

    isContainsSpace=(email)=>{
        let isValid=email.indexOf(' ')==-1;
        return isValid;
    }
    validateFormData = (e) => {
        e.preventDefault();
        var email = this.state.email;

        var password = this.state.password;


        var isProperLength = false;
        var isCaptial = false;
        var isLower = false;
        var isSpecial = false;
        var isNumeric = false;

        if (password.length >= 8) {
            isProperLength = true;

        }

        for (let i = 0; i < password.length; i++) {
            let code = password.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                isCaptial = true;
            }
            else if (code >= 97 && code <= 122) {
                isLower = true;
            }
            else if (code >= 48 && code <= 57) {
                isNumeric = true;
            }

            else {
                isSpecial = true;
            }

        }


        let tmp="  Satyam Yadav  ";
        tmp=tmp.trim();

        // console.log("09".charCodeAt(1));

        var isProperLength = false;
        var isonedott = false;
        var isSpecial = false;
        var nonumeric = false;
        
        
        
        var nospace = false;
        if(email.indexOf(' ')==-1){
            nospace=true;
        }







        if(this.isContainsSpace(email)){
            this.showError("Space not allowed");
            return;
        }


        if (email.length >= 14) {
            isProperLength = true;

        }

        for (let i = 0; i < email.length; i++) {


            if (isonedott >= 0 && isonedott <= 1) {
                isonedott = true;
            }
            else if (nospace == 0) {

                nospace = true;

            }
            else if
                (nonumeric == 0) {


                nonumeric = true;

            }
            else {
                isSpecial = true;
            }


        }


        if (!email) {
            this.showError("Please enter valid email");
            return;
        } if (isProperLength == false) {
            this.showError("email should be of minimum 14 charcter");
            return;
        } if (isonedott == false) {
            this.showError("email can be contain only one dott");
            return;
        } if (isSpecial == false) {
            this.showError("email should contain only  one special charcter");
            return;
        } if (nospace == false) {
            this.showError("email do not contain space");
            return;
        } if (isNumeric == false) {
            this.showError("email should not start with any numeric value");
            return;
        }



        if (!password) {
            this.showError(" password could not be empty");
            return;
        }

        if (isProperLength == false) {
            this.showError("password should be of minimum 8 charcter");
            return;
        } if (isCaptial == false) {
            this.showError("password should contain at least one captial letter");
            return;
        } if (isLower == false) {
            this.showError("password should contain at leastone lower letter");
            return;
        } if (isSpecial == false) {
            this.showError("password should contain at least one special charcter");
            return;
        }
        alert("all ok");
    }

    render() {

        return (<form onSubmit={(e) => {
            this.validateFormData(e);
        }}
            className="login">
            <h1 className="title">login</h1>
            <div className="input-group">
                <label>EMAIL ID</label>
                <input type="text" placeholder="email" className="password" value={this.state.email} onChange={(e) => {
                    let val = e.target.value;
                    this.setState({ email: val });
                }}></input>
            </div>
            <div className="input-group">
                <label>PASSWORD</label>
                <input type="password" placeholder="password" className="password" value={this.state.password} onChange={(e) => {
                    let val = e.target.value;
                    this.setState({ password: val });
                }}></input>
            </div>

            <div className="btn-group">
                <button type="submit" >login</button>
            </div>

            <p className="errorMsg">{this.state.errorMessage}</p>



        </form>)
    }
}


export default LoginForm;





