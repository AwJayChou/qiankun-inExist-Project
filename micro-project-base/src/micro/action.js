import { initGlobalState } from 'qiankun'

const initialState = {
    name: 'global state'
}

const actions = initGlobalState(initialState);

export default actions;