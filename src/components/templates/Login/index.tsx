import * as React from 'react'
import { connect, MapDispatchToProps } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import styled from 'styled-components'

import Button from '~/components/atoms/Button'
import InputGroup from '~/components/molecules/InputGroup'

import { RootState } from '~/modules';
import { login, Login } from '~/modules/auth'

export interface Props {
  onSubmit: () => any
}

const Container = styled.div`
`

const Login: React.SFC<Props> = ({ onSubmit }) => (
  <Container>
    <TitleWrapper>
      <Title>Sign in</Title>
      <SubTitle>cognito example app</SubTitle>
    </TitleWrapper>
    <InputGroupWrapper>
      <StyledInputGroup label="Email" type="text" />
      <StyledInputGroup label="Password" type="password" />
    </InputGroupWrapper>
    <Button onClick={onSubmit}>Login</Button>
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

const InputGroupWrapper = styled.div`
  margin-bottom: 40px;
`

const StyledInputGroup = styled(InputGroup)`
  margin-bottom: 20px;
`

type DispatchProps = Pick<Props, 'onSubmit'>

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch: ThunkDispatch<RootState, void, never>) => ({
  onSubmit: () => dispatch(login({ username: 'tarou', password: 'hoge'}))
})

export default connect(
  () => ({}),
  mapDispatchToProps
)(Login)
