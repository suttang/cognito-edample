import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import * as AuthModule from '~/modules/auth'

export interface RootState {
  auth: AuthModule.State
}

export type RootAction = AuthModule.Actions

const store = createStore<RootState>(
  combineReducers({ auth: AuthModule.reducer }),
  applyMiddleware(thunk)
)

export default store
