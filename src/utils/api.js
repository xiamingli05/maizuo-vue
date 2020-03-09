import fetch from './fetch';

//请求首页轮播数据
export function fetchIndexSwiper() {
    return fetch({
        method:"get",
        url:"/gateway?type=2&cityId=310100&k=3529285",
        headers:{
            'X-Host': 'mall.cfg.common-banner'
        }
    });
}