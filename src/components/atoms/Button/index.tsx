import * as React from 'react'

import styled from 'styled-components'
import ButtonLabel from '~/components/atoms/ButtonLabel'

export interface Props {
  className?: string
  onClick?: () => any
}

const Button: React.SFC<Props> = ({ className, children, onClick }) => (
  <Container className={className} onClick={onClick}>
    <ButtonLabel>{children}</ButtonLabel>
  </Container>
)

export default Button

const Container = styled.a.attrs({
  role: 'button'
})`
  display: inline-block;
  background-color: #ccc;
  color: #333;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  border: 1px solid #666;
  padding: 10px 8px;
`
