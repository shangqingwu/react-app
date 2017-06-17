let express = require("express");
let app = express();
app.listen(3000);

let ad = require("./home/ad");
app.get("/api/ad",function (req,res) {
   res.send(ad);
});

let list = require("./home/list");
// 获取列表，需要传递城市（展现该城市的数据）和页码（传进来几就展现第几张的数据）；
app.get("/api/list/:city/:page",function (req,res) {
   res.send(list);
});

let info = require("./detail/info");
//通过id获取商户信息
app.get("/api/detail/info/:id",function (req,res) {
   res.send(info);
});

let comment = require("./detail/comment");
// 获取评价列表，需要id和page；因为评价很多，所以必须要page；
app.get("api/detail/comment/:id/:page",function (req,res) {
   res.send(comment);
});