import React,{Component} from 'react';
import {
    HashRouter as Router,
    Route
} from "react-router-dom";
import Home from "../containers/Home/index";
export default class RouterMap extends Component{
    render(){
        return (
            <div>
                <Router>
                    <div>
                        <Route path="/" component={Home}/>
                    </div>
                </Router>
            </div>
        )
    }
}