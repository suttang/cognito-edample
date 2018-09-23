import * as React from 'react'
import { MapDispatchToProps, connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk';
import styled from 'styled-components'

import LoginFormTitle from '~/components/molecules/LoginFormTitle'
import SignUpForm, { FormValues as SignUpFormValues } from '~/components/organisms/SignUpForm'

import { RootState } from '~/modules';
import { signUp, SignUp, Actions } from '~/modules/auth'

export interface Props {
  handleSubmit: (values: SignUpFormValues) => void
}

const SignUp: React.SFC<Props> = ({ handleSubmit }) => (
  <Container>
    <SignUpBox>
      <StyledLoginFormTitle name="cognito example app">Sign Up</StyledLoginFormTitle>
      <SignUpForm onSubmit={handleSubmit} />
    </SignUpBox>
  </Container>
)

const Container = styled.div``

const SignUpBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 600px;
  margin: auto;
  margin-bottom: 60px;
  margin-bottom: 60px;
  padding: 60px;
  background: #313C47;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`

const StyledLoginFormTitle = styled(LoginFormTitle)`
  margin-bottom: 40px;
`

type DispatchProps = Pick<Props, 'handleSubmit'>

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch: ThunkDispatch<RootState, void, Actions>) => ({
  handleSubmit: values => dispatch(signUp(values))
})

export default connect(
  () => ({}),
  mapDispatchToProps
)(SignUp)

