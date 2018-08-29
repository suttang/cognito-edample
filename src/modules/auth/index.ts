import { FSA } from 'flux-standard-action'
import { ThunkAction } from 'redux-thunk'

import { Reducer } from 'redux';
import { RootState } from '~/modules'

export type Actions = Login

export enum ActionTypes {
  Login = 'auth/LOGIN'
}

interface LoginPayload {
  username: string
  password: string
}
export interface Login extends FSA<LoginPayload, never> {
  type: ActionTypes.Login
  payload: LoginPayload
}

export const login = ({ username, password }: LoginPayload): ThunkAction<void, RootState, void> => dispatch => {
  console.info('login desu', username, password)
  
}

export interface State {
  username: string
}
export const initialState: State = {
  username: 'suttang'
}

export const reducer: Reducer<State> = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.Login:
      return {
        ...state
      }
    default:
      return state
  }
}
