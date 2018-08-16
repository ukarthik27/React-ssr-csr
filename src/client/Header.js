import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import LoginComp from "./LoginComp";
import { connect } from "react-redux";

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        var userdiv;
        var userInfo;
        if (this.props.items.isLoggedIn) {
            console.log("----------", this.props.items.userData.userData)
            userInfo = this.props.items.userData.userData
            userdiv = <li className="nav-li"><Link id="nav-link" to="/Login">{userInfo.name}</Link></li>
        }
        else {
            userdiv = <li className="nav-li"><Link id="nav-link" to="/Login">-LoGiN-</Link></li>
        }
        return (
            <div id="header">
                <img id="logo" src='/static/download.png' alt="react" />
                <div id="navbar">
                    <Navbar />
                </div>
                <div id="user-name" >
                   {userdiv} 
                </div>
            </div>
        )
    }
}
function matchDispatchToProps(dispatch) {
    return {

    }
}

function mapStateToProps(state) {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Header);

