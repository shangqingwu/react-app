//  fetch是用来获取数据的，有兼容性问题；
import "whatwg-fetch";
import "es6-promise";
export function get(url) {
    return fetch(url,{  // fetch执行，返回一个promise；
        Accept:"application/json"  // 接受的文件类型；
    })
}
function toUrlencoded(obj) { //将对象转化为formData格式（form表单）-> id=1&comment=2
    let arr = [];
    for (let key in obj){
        arr.push(`${key}=${obj[key]}`);
    }
    return arr.join("&");
}
export function post(url,obj) { //{id:1,comment:2} -> id=1&comment=2
    return fetch(url,{  // fetch执行，返回一个promise；
        method:"POST",  //请求方式；
        //格式：a=1&b=2&c=3
        headers:{  //设置请求头，为form表单提交；
            "Content-Type":"application/x-www-form-urlencoded" //格式：a=1&b=2&c=3
        },
        body:toUrlencoded(obj)  // 因为Content-Type设置的要求格式是a=1&b=2&c=3，所以往里面传递的格式也必须是这种格式的；但是上面的Content-Type也可以改成"application/json"，这样的话，body就直接传递JSON.stringify(obj)就可以了，不用转成查询字符串格式了；
    })
}