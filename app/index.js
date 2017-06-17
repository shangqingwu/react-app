import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/index";//页面级根组件，负责选择哪一个页面；
import  "./assets/index.less";
import {Provider} from "react-redux"; //要将store注入到应用中，可以监听store里面的state的改变；
import {configureStore} from "./store"; //导入store；

let store = configureStore({userInfo:{cityName:"上海"}});//生成store，并且可以传入初始状态{userInfo:{cityName:"上海"}}（由于reducers是合并之后的，所以返回的状态state也是合并之后的，所以设置默认初始状态的时候，必须写成上面这样；如果没有合并的话，就可以直接写{cityName:"上海"}了，但是在项目中肯定都会合并的）；-> 因为在./store/index.js中封装configureStore方法的时候设置了形参initState，在创建store的时候，作为了createStore的第二个参数；


ReactDOM.render(
    <Provider store={store}>{/*Provider的原理就是通过context进行组件之间的传递数据的，也是通过属性传递；*/}
    {/*必须把store注入到containers中的App组件中，因为只有当这个组件加载完成时，才会走RouterMap组件，才会通过路由展示Home组件的内容，App就相当于是最顶级的组件，将store注入到这个组件中，他下面的所有组件只要与redux建立上连接，就都可以拿到store中的状态了；*/}
        <App/>
    </Provider>,document.getElementById("root"));