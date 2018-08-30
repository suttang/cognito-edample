import * as React from 'react'
import { MapDispatchToProps, connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import styled from 'styled-components'

import { LoginForm, FormValues as LoginFormValues } from '~/components/organisms/LoginForm'

import { RootState } from '~/modules';
import { login, Login } from '~/modules/auth'

export interface Props {
  handleSubmit: (values: LoginFormValues) => void
}

const Login: React.SFC<Props> = ({ handleSubmit }) => (
  <Container>
    <LoginBox>
      <TitleWrapper>
        <Title>Sign in</Title>
        <SubTitle>cognito example app</SubTitle>
      </TitleWrapper>
      <LoginForm onSubmit={handleSubmit} />
    </LoginBox>
  </Container>
)

const Container = styled.div`
`

const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
`

const Title = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-family: Roboto;
  font-size: 30px;
  letter-spacing: 0.08rem;
`

const SubTitle = styled.p`
  color: #fff;
  margin-left: 20px;
  opacity: 0.70;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 500;
  line-height: 34px;
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
