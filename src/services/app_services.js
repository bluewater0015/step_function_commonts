
import RequestService from './base_services';

import serverConfig from '../config';
const serviceUrl = serverConfig.server.main_url
function makeUrl(url) {
    if(url){
        return serviceUrl + url
    }
    return serviceUrl;

}
export default function getList(options) {
    return RequestService.get(
        //makeUrl('api/vod/song/suggest?'),
        //makeUrl('task/getTaskSubjectList?'),
        makeUrl('shopdata/getGoods.php'),
        options
    )
}