import React,{Component} from 'react';
//路由的两种类型：加井号#（HashRouter，一般开发用这个），不加井号#（BrowserRouter浏览器自带的），如果使用BrowserRouter的话，需要在服务器端进行配置，否则报错；
import {
    HashRouter as Router,//提供一个路由容器，里面存放小路由；
    Route, //单个route小路由
    Switch
} from 'react-router-dom';
import Home from '../containers/Home';//默认找index.js文件；
import Detail from '../containers/Detail';
import Login from '../containers/Login';
import User from '../containers/User';
import City from '../containers/City';
import Search from '../containers/Search';
export default class RouterMap extends Component{  //必须把名字改成RouterMap，要不然别的页面拿不到；
    render(){
        return (
            <div>
                <Router>
                    {/* Router里面只能放一个根元素，所以要用一个div包起来；*/}
                    <Switch>
                        {/*用div包起来的时候，写在一起的话，会先匹配/ 再匹配/detail/:id ，都符合条件的话就都显示在一个页面中，所以要加一个Switch 组件，只匹配一个，就不往后匹配了；*/}
                        {/*Switch匹配到/，就不匹配详情页了，所以要在/ 路径那里，加一个exact绝对匹配，匹配整个路径；*/}
                        <Route exact path="/" component={Home}/> {/*如果路由是/ ，则找Home这个组件；*/}
                        <Route path="/detail/:id" component={Detail}/>
                        {/*点击先跳转到登录页，登录后 再回到登录之前的页面，在login路径后可能需要保存上次点击login的路径,如果登录过在登录跳转到用户页面*/}
                        <Route path="/login/:route?" component={Login}/>{/* :route? 可以写也可以不写,瞎写也可以；也能匹配上；*/}
                        <Route path="/user" component={User}/>
                        <Route path="/city" component={City}/> {/*路径没有大小写，写大写也会转成小写的*/}
                        <Route path="/search/:kind/:keyword?" component={Search}/> {/*写任何东西都要先从路由开始写；*/}
                        {/*路由重复，不会报错，他会把所有页面都渲染出来；*/}
                    </Switch>
                </Router>
            </div>
        )
    }
}