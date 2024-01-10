import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";


import RootReducer from "./RootReducer";


 const middelwares = [logger];

 if(process.env.NODE_ENV === 'development'){
    middelwares.push(logger)
 }

export const store = createStore(RootReducer, applyMiddleware(...middelwares));

export const persistor = persistStore(store)

export default {store, persistor};


