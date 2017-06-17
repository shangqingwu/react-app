import React,{Component} from 'react';
import './index.less';
export default class ChooseCity extends Component{
    chooseCity(e){
        this.props.changeCity(e.target.innerText);
    }
    render(){
        return (
            <div className="choose-city">
                <h3>选择城市</h3>
                <ul onClick={this.chooseCity.bind(this)}>
                    <li>北京</li>
                    <li>山东</li>
                    <li>河北</li>
                    <li>天津</li>
                    <li>黑龙江</li>
                    <li>河南</li>
                    {/*
                    <li onClick={this.props.changeCity.bind(this,"北京")}>北京</li>
                    <li onClick={this.props.changeCity.bind(this,"山东")}>山东</li>
                    <li onClick={this.props.changeCity.bind(this,"河北")}>河北</li>
                    <li onClick={this.props.changeCity.bind(this,"天津")}>天津</li>
                    <li onClick={this.props.changeCity.bind(this,"黑龙江")}>黑龙江</li>
                    <li onClick={this.props.changeCity.bind(this,"河南")}>河南</li>*/}
                </ul>
            </div>
        )
    }
}