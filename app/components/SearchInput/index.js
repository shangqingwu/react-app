import React, {Component} from 'react';
export default class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || ""//如果传了用传的，没传就用空的""
        }
    }

    change(e) {
        this.setState({
            value:e.target.value
        })
    }

    search(e) {
        /*if (e.keyCode !== 13) {
            return;
        }
        this.props.toSearch(this.state.value);*/
        if (e.keyCode == 13) {
            this.props.toSearch(this.state.value);
        }
    }

    render() {
        //受控组件用value属性与状态建立连接，必须得写 一个onChange方法，在里面将state的值重新设置为输入框中的值，必须要设置，否则就不可编辑状态；
        return (
            <input type="text" value={this.state.value} onChange={this.change.bind(this)}
                   onKeyUp={this.search.bind(this)}/>
        )
    }
}