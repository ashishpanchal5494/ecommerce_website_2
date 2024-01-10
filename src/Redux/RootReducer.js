import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import UserReducer from "./user/UserReducer";
import CartReducer from "./Cart/CartReducer";
import storage from 'redux-persist/lib/storage'
import DirectoryReducer from "./Directory/DirectoryReducer";
import ShopReducer from "./shop/ShopReducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const RootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    shop: ShopReducer
})

export default persistReducer(persistConfig, RootReducer)


