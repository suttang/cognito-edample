import { Auth } from 'aws-amplify'

interface Params {
  username: string
  password: string
}

const signIn: (params: Params) => Promise<string> = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    Auth.signIn(username, password)
      .then(data => {
        console.info(data)
        resolve('ok')
      })
  })
}

export default signIn
