import * as React from 'react'
import styled from 'styled-components'

import Text from '~/components/atoms/Text'

export interface Props {
  className?: string
  name: string
}

const LoginFormTitle: React.SFC<Props> = ({ className, name, children }) => (
  <Container className={className}>
    <Title>{children}</Title>
    <SubTitle>{name}</SubTitle>
  </Container>
)

const Container = styled.div`
  display: flex;
`

const Title = styled(Text)`
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 30px;
  letter-spacing: 0.08rem;
`

const SubTitle = styled(Text)`
  color: #fff;
  margin-left: 20px;
  opacity: 0.70;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 500;
  line-height: 34px;
`

export default LoginFormTitle
