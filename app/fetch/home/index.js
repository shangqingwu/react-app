// 接口：/api/ad
import {get} from "../index";
export function getAd() {
    return get("/api/ad")
}
//获取列表数据，是一个对象；
export function getList(city,page) {
    return get("/api/list/"+city+"/"+page+"");
}
//页面调用：getAd().then(res=>res.json()).then(data=>console.log(data));可以得到 /api/ad 接口发送回来的ad.js文件中的数据；