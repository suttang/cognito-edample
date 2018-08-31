import { CognitoUser } from 'amazon-cognito-identity-js'
import { Auth } from 'aws-amplify'

const getUser: () => Promise<CognitoUser> = async () => {
  const user = await Auth.currentAuthenticatedUser()
  return user
}

export default getUser
