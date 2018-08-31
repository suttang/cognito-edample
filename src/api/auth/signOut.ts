import { Auth } from 'aws-amplify'

const signOut: () => Promise<string> = async () => {
  const result = await Auth.signOut()
  console.info(result)
  return 'ok'
}

export default signOut
