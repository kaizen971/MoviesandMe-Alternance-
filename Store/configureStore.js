import {createStore} from 'redux'
import toggleFavorite from './Reduces/favoriteReducer'
import { persistCombineReducers } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';


const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

export default createStore(persistCombineReducers(rootPersistConfig, {toggleFavorite}))