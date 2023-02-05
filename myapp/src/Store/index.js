import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './cartReducer'
import { categoriesReducer } from './categoriesReducer'

const rootReducer = combineReducers({
    cart: cartReducer,
    categories: categoriesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))