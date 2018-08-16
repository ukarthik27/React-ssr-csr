import React from "react";
import { connect } from "react-redux"
import LoginCompStyle from "./LoginComp.css";

class LoginComp extends React.Component {
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler = () => {
        var user_obj = {}
        user_obj.email = document.getElementById("login-comp-uname").value;
        user_obj.password = document.getElementById("login-comp-pwd").value;
        if (user_obj.email.length !== 0 && user_obj.password.length !== 0) {
            fetch("http://localhost:3015/LoginValidate", {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(user_obj)
            })
                .then(response => response.json())
                .then((data)=>{
                    console.log("-------client side login respdata :", data)
                    if(data) this.props.loginUpdate(data)
                })
                .catch(error => console.log("error : ", error))
            console.log("++++ user obj : ", user_obj)
        } else {
            alert("Pls enter credentials again..!!");
        }
    }

    render() {
        if(this.props.items.isLoggedIn)
        console.log("----userInfo",this.props.items.userData)
        return (
            <div>
            <div id="login-comp">
                <div id="login-comp-heading">Login</div>
                <input type="text" id="login-comp-uname" placeholder="enter your email"></input>
                <input type="password" id="login-comp-pwd" placeholder="Password here"></input>
                <button type="submit" id="login-comp-submit" onClick={this.submitHandler} > SUBMIT </button>
            </div>
            <div id="userInfo">

            </div>
            </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return {
        loginUpdate:  (data) => dispatch({ type: "LOGIN", payload: data })
    }
}

function mapStateToProps(state) {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginComp);