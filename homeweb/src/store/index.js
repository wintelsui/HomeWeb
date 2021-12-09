import { createStore } from 'vuex'

export default createStore({
    state: {
        screen: {
            height: document.documentElement.clientHeight,
            width: document.documentElement.clientWidth
        },
        navigationBar: {
            height: 70
        }
    },
    mutations: {
        updateScreen(state, screenSize) {
            let width = screenSize.width
            let height = screenSize.height
            if (width != null) {
                state.screen.width = width
            }
            if (height != null) {
                state.screen.height = height
            }
        }
    },
    actions: {
    },
    modules: {
    }
})
