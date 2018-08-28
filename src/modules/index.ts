import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'

import auth, * as AuthModule from '~/modules/auth'

export interface RootState {
  auth: AuthModule.State
}

export type RootAction = AuthModule.Actions

const store = createStore<RootState, RootAction, {}, {}>(
  combineReducers({ auth }),
  applyMiddleware(thunk as ThunkMiddleware<RootState, RootAction>)
)

export default store
