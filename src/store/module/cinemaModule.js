import http from '@/utils/http';

const module={
    namespaced:true,
    state:{
        cinemaList:[]
    },
    mutations:{
        setCinemaList(state,payload){
            state.cinemaList = payload
          }
    },
    actions:{
        getCinemaAction(store){
            http.request({
              url:"/gateway?cityId=310100&ticketFlag=1&k=6798623",
              headers:{
                'X-Host': 'mall.film-ticket.cinema.list'
              }
            }).then(res=>{
              store.commit("setCinemaList",res.data.data.cinemas) //支持传参
            })
           }
    },
    getters:{
        topDataList(state){
          //state形参， vuex自动调用时候，传来值
          return state.cinemaList.slice(0,5)
        }
      }
}

export default module;