import * as React from 'react'
// import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import styled from 'styled-components'

import LoginTemplate from '~/components/templates/Login'

export interface Props {}

const Login: React.SFC<Props> = () => (
  <Container>
    <LoginTemplate />
  </Container>
)

const Container = styled.div`
  width: 800px;
  margin: auto;
  padding: 40px;
  background: #f6f6f6;
`

export default Login

// const mapDispatchToProps = dispatch => ({
//   onClick: () => {
//     alert('dispatch dayo')
//   }
// })
