const module={
    namespaced:true,
    state:{
        cityName:'北京',
        cityId:'110100'
    },
    mutations:{
        setCityName(state,payload){
            state.cityName = payload
          },
        setCityId(state,id){
            state.cityId = id
        }
    }
}

export default module;