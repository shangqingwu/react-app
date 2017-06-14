import React,{Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Switch //只匹配一次，匹配成功就不往下走了；
} from "react-router-dom";
import Home from "../containers/Home/index";
import Detail from "../containers/Detail/index";
export default class RouterMap extends Component{
    render(){
        return (
            <div>
                <Router>
                    <Switch>{/*不加Switch也行，但是为了匹配一次最好是加上；*/}
                        <Route exact path="/" component={Home}/>{/*exact绝对匹配*/}
                        <Route path="/detail/:id" component={Detail}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}