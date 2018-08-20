import React from "react";
import { connect } from "react-redux";
import AboutStyle from "./About.css";
import history from "../routes/history";

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(props) {
        if (!history.has("/About")) {
            var linkTag = document.createElement("link")
            linkTag.rel = "stylesheet"
            linkTag.type = "text/css"
            linkTag.href = "/build/about.css"
            document.getElementsByTagName("head")[0].appendChild(linkTag)
            history.add("/About")
        }
        fetch("http://localhost:3015/aboutpagedata")
            .then(res => res.json())
            .then((data) => {
                var state_obj = {
                    pagedata: data,
                    pageType: "about"
                }
                this.props.prefetch(state_obj)
            })
    }
    render() {
        console.log("About : this.props.items", this.props.items)
        console.log("History : ", history)
        var pageItems = this.props.items.data
        const pageData = pageItems.map((item) => {
            return <div className="about-data-div" key={Math.random()}>
                <div className="about-data-div-heading">{item.Title}</div>
                <div className="about-data-div-data" >{item.data}</div>
            </div>
        })
        //console.log(pageData)
        return (
            <React.Fragment>
                <div id="about-heading">About</div>
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

export default connect(mapStateToProps, matchDispatchToProps)(About);