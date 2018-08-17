import React from "react";
import { connect } from "react-redux"
import LoginCompStyle from "./LoginComp.css";

class LoginComp extends React.Component {
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this)
    }

    logoutHandler = () => {
        if(this.props.items.isLoggedIn){
            this.props.items.isLoggedIn = false
            this.props.items.userData = {}
            fetch("http://localhost:3015/Logout", {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: {}
            })
            .then(res => res.json())
            .then((data)=>{
                console.log("--- CliEnt side resp for LoGoUt :", data)
            })
        }
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
                .then((data) => {
                    console.log("-------client side login respdata :", data)
                    if (data) this.props.loginUpdate(data)
                })
                .catch(error => console.log("error : ", error))
        } else {
            alert("Pls enter credentials again..!!");
        }
    }

    render() {
        var userInfo;
        if (this.props.items.isLoggedIn) {
            console.log("---- Login Comp - userData", this.props.items.userData)
            console.log("---- Login Comp - userInfo", this.props.items.userData.PersInfo)
            userInfo = this.props.items.userData.PersInfo
        }
        return (
            <div>
                <div id="alternate-login" onClick={this.logoutHandler}>logout</div>
                {
                    this.props.items.isLoggedIn ?
                        <div id="userinfo">
                            <div id="personal-info">Personal Info</div>
                            <span className="userinfo-text"><strong>Name :</strong>{userInfo.name}</span><br />
                            <span className="userinfo-text"><strong>Age :</strong>{userInfo.age}</span><br />
                            <span className="userinfo-text"><strong>Contact :</strong>{userInfo.contact}</span><br />
                            <span className="userinfo-text"><strong>Address :</strong>{userInfo.address}</span><br />
                        </div>
                        : <div id="login-comp">
                            <div id="login-comp-heading">Login</div>
                            <input type="text" id="login-comp-uname" placeholder="enter your email"></input>
                            <input type="password" id="login-comp-pwd" placeholder="Password here"></input>
                            <button type="submit" id="login-comp-submit" onClick={this.submitHandler} > SUBMIT </button>
                        </div>
                }
            </div>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return {
        loginUpdate: (data) => dispatch({ type: "LOGIN", payload: data })
    }
}

function mapStateToProps(state) {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginComp);