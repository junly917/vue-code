export default {
    state: {
        isCollapse: false,
        tabsList: [
            { 
                path: '/',
                name: 'hoem',
                label: '首页',
                icon: 'hoem',
            },
        ],
        currentMenu: null,
    },
    mutations: {
        collapseMenu(state){
            state.isCollapse = ! state.isCollapse
        },
        selectMenu(state, val){
            if (val.name !== 'home'){
                state.currentMenu = val
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if (result === -1){
                    state.tabsList.push(val)   //添加到列表里面
                }else{
                    state.currentMenu = null
                }
            }
        },
        closeTag(state, val){
            const result = state.tabsList.findIndex(item => item.name === val.name)
            state.tabsList.splice(result, 1)
        }
    }
}