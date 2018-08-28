import { Reducer, Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { RootState } from '~/modules'

export interface State {
  readonly isLoggedIn: boolean
}

export const initialState: State = {
  isLoggedIn: true
}


interface Attempt {
  type: 'auth/Attempt';
  credential: { username: string, password: string }
}

// export const attempt = (username: string, password: string): Attempt => ({
//   type: 'auth/Attempt',
//   credential: { username, password }
// })
// export const attempt: ActionCreator<ThunkAction> = (username: string, password: string) => dispatch => {
export const attempt = (username: string, password: string) => (dispatch: ThunkDispatch<RootState, void, Action>) => {
// export const attempt = (username: string, password: string) => (dispatch, getState) => {
// export const attempt = (username: string, password: string): ThunkAction<void, RootState, void, Attempt> => dispatch => {
  alert(`attempt desu ${username} ${password}`)
  // dispatch({
  //   type: 'auth/Attempt',
  //   credential: { username, password }
  // })

  return {
    type: 'auth/Attempt',
    credential: { username, password }
  }
}

export type Actions = Attempt

export const reducer: Reducer<State, Actions> = (state = initialState, action) => {
  switch (action.type) {
    case 'auth/Attempt':
      return {
        ...state,
        isLoggedIn: true
      }
    default:
      return state
  }
}

export default reducer
