import React from 'react';
import {render} from 'react-dom';//解构赋值 -> ReactDOM中的render方法；
import  './assets/index.less';
import App from './containers/index';
import {configureStore} from "./store";
import {Provider} from "react-redux";
let store = configureStore(/*{userInfo:{cityName:"上海"}}*/);//生成store，并且可以传入初始状态{userInfo:{cityName:"上海"}}（由于reducers是合并之后的，所以返回的状态state也是合并之后的，所以设置默认初始状态的时候，必须写成上面这样；如果没有合并的话，就可以直接写{cityName:"上海"}了，但是在项目中肯定都会合并的）；-> 因为在./store/index.js中封装configureStore方法的时候设置了形参initState，在创建store的时候，作为了createStore的第二个参数；]]
render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById("root"));
