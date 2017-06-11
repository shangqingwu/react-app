1. 先安装包；
2. 配置文件：
- webpack.config.js 
- .babelrc
- package.json
3. app新建index.js和html文件；
- index.js是打包的入口文件；
- index.html是plugin自动生成要使用的模板文件；要把所有组件渲染到这个文件中；
4. 新建文件夹：components、containers、routes：
- components：存放所有的木偶组件，也就是傻组件，只用来显示到页面中；
- containers：
- 1. 里面有Home文件夹，放的是首页的信息；里面又有subpage文件夹，放的是智能组件，也就是聪明组件，用于获取后台数据，传给木偶组件，显示到页面中；
- 2. 里面有index.js文件，用于获取到路由中的信息，也就是RouterMap组件，并且引入到app的index文件中，将App组件，渲染到页面；
- routes：放的是所有的路由信息；当我访问的页面路径是/的时候，就显示Home智能组件；
5. 在Home组件中分为头部、轮播图、数据列表三部分，先写头部；
- 头部HomeHeader不需要获取后台信息，所以放到傻（木偶）组件里就可以；
- HomeHeader组件：必须建文件夹，因为还要放样式；
- 将HomeHeader组件引入Home组件中，就可以将HomeHeader组件显示在页面中了；
6. 把公共样式放到asset文件夹中，并在app下的index中引入；app下的index.js就是要渲染到页面中，所以在这里面引入公共样式就可以；
7. 写完头部就要写轮播图了，轮播图要引入插件；写完轮播图之后，把Slider组件引入containers的Home组件中；
8. ① 通过请求路径获取数据，所以要先mock假数据（新建mock文件夹），并且写服务器端server.js；
② 通过fetch来获取数据，由于fetch有兼容性问题，要自己封装兼容的，通过引入插件es6-promise和whatwg-fetch封装get方法，在fetch下新建Home文件夹，里面index文件是通过传入不同的路径调用get方法，并得到执行的结果，我们用的就是这个结果，fetch执行完返回一个promise，可以直接调用then方法；
③ 需要获取数据，所以要在智能组件assets中新建Ad.js；
- 通过fetch的home中的getAd方法执行，调用两次then方法，第一次是将response转为json格式，第二次是拿到结果data数据，由于要在render中使用data数据，所以就要在constructor中定义一个状态data，把获取到的数据赋给data，在render中就可以直接循环data渲染页面了；
9. 由于此时在页面上展示出来的城市北京cityName是在Home组件中写死的，在平级组件中无法传递，别的组件要是想要获取到这个值很麻烦，所以就要把cityName存到redux的store里面的state中，这要别的组件只要想用，就直接与redux建立连接（connect属于react-redux里面的属性）就可以了；
10. 先把cityName存到redux中：
 - 1. 新建action-types文件夹，存放所有action的类型；
 - 2. 新建actions文件夹，里面存放所有的Action Creator，Action Creator执行返回action；
 - 3. 新建reducers文件夹，里面存放所有的reducer，有了action之后，就需要通过reducer来接收处理action规则要做的事情，返回新状态state；
    - 由于一个项目中只能有一个store和一个state，而store是通过createStore(reducer)创建出来的，state是通过reducer处理之后产生的，所以只能有一个reducer，但是我们派发多个action动作，就会有多个reducer来执行，所以要把多个reducer通过combineReducers({reducer名字})这个方法将多个reducer合并成一个大的reducers；
 - 4. 新建store文件夹，将合并后的reducers引进来，通过createStore(reducers)创建store；但是创建store的时候，还可以通过传递参数来配置store；-> 需要写一个configureStore方法来配置store返回一个创建后的store；
    - createStore可以有第二个参数，用来设置默认状态initState；
    - 第三个参数，可以在浏览器中下一个Redux DevTool插件，用来查看当前redux的所有状态；-> 如果下了这个插件的话，就必须写第三个参数window.devToolsExtension?window.devToolsExtension():undefined ；如果没下这个插件的话，就不用写第三个参数了；
 - 5. 在最外层app文件夹下的index中，将configureStore方法引进来，创建store，并通过Provider将store属性将store传递进去，注入到App中，这样所有的组件都可以通过connect与redux建立连接，获取redux中的state了；
 - 6. 新建local文件夹，在index中写getStorage方法，获取本地存储的信息，在containers中的index文件的App组件加载完的时候，如果localStorage中有cityName这个属性值说明，已经存入，直接将其通过派发update的action（App与redux建立完连接之后，通过this.props.userActions.update({cityName})）存入redux中的state中；如果没有cityName，则给它赋一个默认值，也存到redux中，展示到页面中；
11. 写List列表组件，需要从后台获取数据，并且展示到Home页面中，是一个智能组件，所以要在Home文件夹下的subpage文件夹中新建List.js文件存放List组件；
- 1. 首先先写后台server，当访问/api/list/:city/:page路径的时候，返回当前城市的当前页的list商品列表数据；
- 2. 在fetch的home文件夹的index文件中添加getList方法获取list的数据，需要传递city和page两个参数；
- 3. 在List组件加载完成时就要获取到list中的数据，将getList从fetch的home文件夹的index中引进来，在componentDidMount中调用getList方法，经过两次then方法，得到data数据，data数据是一个对象，需要解构赋值成{hasMore,data}，需要在私有空间constructor中定义一个状态接收这两个属性，data为空数组[]，hasMore默认为true；data更新的时候要拼接老data，不能直接赋值，老数据会被覆盖掉，这样就不会出现商品个数增加的效果了；
- 4. 获取到数据之后，要将数据展示到页面上，就要在傻组件中写，在components文件夹中新建ListComponent文件夹，通过ListComponent组件展示数据；将ListComponent组件引进List组件中，并且如果data有长度的话，就通过属性将data传给子组件ListComponent，没有的话，就显示正在加载；
- 5. ListComponent组件接收到data后，通过map映射展示；data是一个数组，里面可以分为一个个的小商品，所以可以再用一个小傻组件接收data中的每一条对象，在ListComponent文件夹中新建ListItem文件夹，在map循环的时候，将data中的每一项小data传给ListItem，小data是一个对象，需要通过this.props.data来接收，每次写都很麻烦，所以将对象中的每一个属性都解构出来，直接通过属性名就可以用了，在ListItem中写结构；
12. 在页面底部（List组件中），点击加载更多，会继续加载更多；需要新建一个傻组件LoadMore，用于点击按钮，并且展示页面；将LoadMore引到List组件中，List组件需要通过属性将hasMore、isLoading、loadMore通过属性传递给LoadMore组件，如果还有更多数据（hasMore为true），显示加载更多，在点击了加载更多的时候，如果加载状态为未加载（isLoading为false，正在加载的话就不能再次发送请求获取数据了），再次获取数据（执行LoadMore()方法），并把数据传给ListComponent组件展示到页面中；
 
