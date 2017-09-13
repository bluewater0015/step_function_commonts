import 'whatwg-fetch';
import 'es6-promise';

function isObject(value) {
    return typeof value === 'object';
}
function isUndefined(value) {
    return typeof value === 'undefined';
}
// 将对象拼接成 
function dealData(jsonData) {
    // let str = '';
    // //console.log('jsonData',jsonData);
    // if(isObject(jsonData)){
    //     str+='?';
    //     let strs = '';
    //     for(let i in jsonData){
    //         strs += `${i}=${jsonData[i]}&`;
    //     }
    //     //console.log(strs);
    //     //strs.length = strs.length - 1;
    //     str += strs;
    //     //console.log(str);
    //     return str;
    // }else{
    //     return str;
    // }
    let result = '';
    if(jsonData){
        let item = '';
        for(item in jsonData){
            result += '&' + item + '=' + jsonData[item];
        }
        if(result){
            result = result.slice(1);
        }
    }
    console.log('result',result);
    return result;
}
function fetchData(url,data,type) {
    if(type == "POST"){
        //console.log('post-data',data);
        let requestUrl = data ? url + dealData(data) : url;

        //console.log('requestUrl',requestUrl);
        return fetch(requestUrl, {
            method: 'POST',
            //credentials: 'include',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            mode:'cors',
            body: data && JSON.stringify(data) || null
        })
    }else{
        let requestUrl = data ? url + dealData(data) : url;
        console.log('requestUrl',requestUrl);
        return fetch(requestUrl,{
            // headers: {
            //     'Content-Type': 'application/x-www-form-urlencoded'
            // },
            // credentials: 'include',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            mode:'cors'
        });
    }

}
export let RequestService = {
    get: function (url,data) {
        return fetchData(url,data)
    },
    post: function (url,data) {
        return fetchData(url,data,'POST')
    },
    request: fetchData
};

export default RequestService;
