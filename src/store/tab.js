export default {
    state:{
        isCollapse:false
    },
    mutations:{
        modifiCollapse(state){
            state.isCollapse = !state.isCollapse
        }
    }
}