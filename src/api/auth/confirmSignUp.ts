import { Auth } from 'aws-amplify'

interface Params {
  username: string
  code: string
}

const confirmSignUp: (params: Params) => Promise<string> = async ({ username, code }) => {
  const reuslt = await Auth.confirmSignUp(username, code)
  console.info(reuslt)
  return 'ok'
}

export default confirmSignUp
