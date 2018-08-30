import * as React from 'react'
import styled from 'styled-components'

import LoginTemplate from '~/components/templates/Login'

export interface Props {}

const Login: React.SFC<Props> = () => (
  <Container>
    <LoginBox>
      <LoginTemplate />
    </LoginBox>
  </Container>
)

const Container = styled.div`
  // width: 100%;
  // height: 100%;
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

export default Login
