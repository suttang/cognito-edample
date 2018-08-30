import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { reducer as formReducer, FormStateMap } from 'redux-form'
import thunk from 'redux-thunk'

import * as AuthModule from '~/modules/auth'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export interface RootState {
  auth: AuthModule.State
  form: FormStateMap
}

export type RootAction = AuthModule.Actions

const store = createStore<RootState, RootAction, {}, {}>(
  combineReducers({ auth: AuthModule.reducer, form: formReducer }),
  composeEnhancers(applyMiddleware(thunk))
)

export default store
