import { combineReducers } from 'redux'
import {reducer as loginReducer} from '../pages/login/store'
import {reducer as headerReducer} from '../components/header/store'
import thunk from 'redux-thunk'


const reducer = combineReducers({
    login: loginReducer,
    header: headerReducer
})

export default reducer

// 这里让项目支持浏览器插件Redux DevTools
// const composeEnhancers = typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk)
// );

// const store = createStore(
//   reducer,
//   enhancer
// )

// export default store