import React from "react";
import { connect } from "react-redux"
import HomeStyle from "./Home.css";
import history from "../routes/history";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(props) {
        if (!history.has("/Home")) {
            var linkTag = document.createElement("link")
            linkTag.rel = "stylesheet"
            linkTag.type = "text/css"
            linkTag.href = "/build/home.css"
            document.getElementsByTagName("head")[0].appendChild(linkTag)
            history.add("/Home");
        }
        fetch("http://localhost:3014/api/getHomedata")
            .then(res => res.json())
            .then((data) => {
                this.props.prefetch(data)
            })
    }
    render() {
        console.log("HOME - this.props.items", this.props.items)
        console.log("History : ", history);
        var pageItems = this.props.items.data
        const pageData = pageItems.map((item) => {
            return <div className="home-data-div" key={Math.random()}>
                <div className="home-data-div-heading">{item.title}</div>
                <div className="home-data-div-data">{item.data}</div>
            </div>
        })
        //console.log(pageData)
        return (
            <React.Fragment>
                <div id="home-heading">Home</div>
                {pageData}
            </React.Fragment>
        )
    }
}

function matchDispatchToProps(dispatch) {
    return {
        prefetch: (data) => dispatch({ type: "PREFETCH", payload: data })
    }
}

function mapStateToProps(state) {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);