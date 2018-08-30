import * as React from 'react'
import { connect, MapDispatchToProps } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import styled from 'styled-components'

import { LoginForm } from '~/components/organisms/LoginForm'

import { RootState } from '~/modules';
import { login, Login } from '~/modules/auth'

export interface Props {
  submit: (values: FormData) => void
}

const Container = styled.div`
`

const Login: React.SFC<Props> = ({ submit }) => (
  <Container>
    <TitleWrapper>
      <Title>Sign in</Title>
      <SubTitle>cognito example app</SubTitle>
    </TitleWrapper>
    <LoginForm />
  </Container>
)

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

type DispatchProps = Pick<Props, 'submit'>

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch: ThunkDispatch<RootState, void, never>) => ({
  submit: (values: FormData) => dispatch(login({ username: 'tarou', password: 'hoge'}))
})

export default connect(
  () => ({}),
  mapDispatchToProps
)(Login)
