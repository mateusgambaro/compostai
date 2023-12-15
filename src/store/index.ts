// store.js
import { createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import reducers from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const makeStore = () => createStore(persistedReducer, composeWithDevTools())

export const storeWrapper = createWrapper(makeStore, { debug: false })
export const store = makeStore()
export const persistor = persistStore(store)
