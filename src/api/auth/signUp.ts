import { Auth } from 'aws-amplify'

interface Params {
  username: string
  password: string
  email: string
  givenName: string
  familyName: string
}

interface UserData {
  username: string
  password: string
  attributes: {
    email: string
    given_name: string
    family_name: string
  }
}

const convertToUserData: (params: Params) => UserData = ({ username, password, email, givenName, familyName }) => ({
  username,
  password,
  attributes: {
    email,
    given_name: givenName,
    family_name: familyName
  }
})

const signUp: (params: Params) => Promise<string> = async (params) => {
  const result = await Auth.signUp(convertToUserData(params))
  console.info(result)
  return 'ok'
}

export default signUp
