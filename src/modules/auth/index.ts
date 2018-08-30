import { FSA } from 'flux-standard-action'
import { ThunkAction } from 'redux-thunk'

import { Reducer, ActionCreator } from 'redux';
import { RootState } from '~/modules'

export enum ActionTypes {
  Login = 'auth/LOGIN',
  Logout = 'auth/LOGOUT'
}

interface LoginPayload {
  username: string
  password: string
}
export interface Login extends FSA<LoginPayload, never> {
  type: ActionTypes.Login
  payload: LoginPayload
}

export const doLogin:ActionCreator<Login> = ({ username, password }) => ({
  type: ActionTypes.Login,
  payload: { username, password }
})

export interface Logout extends FSA<never, never> {
  type: ActionTypes.Logout
}
export const logout: ActionCreator<Logout> = () => ({
  type: ActionTypes.Logout
})

export const login = ({ username, password }: LoginPayload): ThunkAction<void, RootState, void, Login | Logout> => dispatch => {
  console.info('login desu', username, password)
  dispatch(doLogin({ username: 'tarou', password: 'hogehoge' }))
  dispatch(logout())
}

export interface State {
  username: string
}
export const initialState: State = {
  username: 'suttang'
}

export type Actions = Login | Logout

export const reducer: Reducer<State> = (state = initialState, action: Actions) => {
  console.info('this is reducer')
  switch (action.type) {
    case ActionTypes.Login:
      console.info('this is do login')
      return {
        ...state
      }
    case ActionTypes.Logout:
      console.info('this is do LOGOUT')
      return {
        ...state
      }
    default:
      return state
  }
}
