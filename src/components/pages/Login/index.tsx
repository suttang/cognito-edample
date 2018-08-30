import * as React from 'react'
import { MapDispatchToProps, connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import styled from 'styled-components'

import LoginFormTitle from '~/components/molecules/LoginFormTitle'
import { LoginForm, FormValues as LoginFormValues } from '~/components/organisms/LoginForm'

import { RootState } from '~/modules';
import { login, Login } from '~/modules/auth'

export interface Props {
  handleSubmit: (values: LoginFormValues) => void
}

const Login: React.SFC<Props> = ({ handleSubmit }) => (
  <Container>
    <LoginBox>
      <StyledLoginFormTitle name="cognito example app">
        Sign in
      </StyledLoginFormTitle>
      <LoginForm onSubmit={handleSubmit} />
    </LoginBox>
  </Container>
)

const Container = styled.div`
`

const StyledLoginFormTitle = styled(LoginFormTitle)`
  margin-bottom: 40px;
`

const LoginBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 600px;
  height: 450px;
  margin: auto;
  padding: 60px;
  background: #313C47;
  border-radius: 4px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`

type DispatchProps = Pick<Props, 'handleSubmit'>

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch: ThunkDispatch<RootState, void, never>) => ({
  handleSubmit: values => dispatch(login({ username: values.email, password: values.password}))
})

export default connect(
  () => ({}),
  mapDispatchToProps
)(Login)
