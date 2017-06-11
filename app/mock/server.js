let express = require("express");
let app = express();
app.listen(3000);
let Ad = require("./home/ad");
app.get("/api/ad",function (req,res) {
   res.send(Ad);
});
let List = require("./home/list");
// 获取列表，需要传递城市（展现该城市的数据）和页码（传进来几就展现第几张的数据）；
app.get("/api/list/:city/:page",function (req,res) {
   res.send(List);
});