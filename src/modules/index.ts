import { applyMiddleware, combineReducers ,createStore } from 'redux'
import thunk from 'redux-thunk'

import auth, * as AuthModule from '~/modules/auth'

export interface RootState {
  auth: AuthModule.State
}

export type ReduxAction = AuthModule.Actions

const store = createStore<RootState>(
  combineReducers({ auth }),
  applyMiddleware(thunk)
)

export default store
