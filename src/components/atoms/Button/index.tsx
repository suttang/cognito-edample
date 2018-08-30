import * as React from 'react'

import styled, { css } from 'styled-components'
import ButtonLabel from '~/components/atoms/ButtonLabel'

type Theme = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'muted'
type Size = 'large' | 'medium' | 'small' | 'x-small'

export interface Props {
  className?: string
  theme?: Theme
  size?: Size
  onClick?: () => any
}

const Button: React.SFC<Props> = ({ className, children, onClick, theme, size }) => (
  <Container className={className} theme={theme} size={size} onClick={onClick}>
    <ButtonLabel>{children}</ButtonLabel>
  </Container>
)

export default Button

const Container = styled.a.attrs({
  role: 'button'
})`
  display: inline-block;
  background-color: #fff;
  padding: 10px 8px;
  border-radius: 4px;
  border: 1px solid #666;
  color: #333;
  font-weight: 600;
  font-family: Roboto;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;

  cursor: pointer;
  user-select: none;

  ${(props: Props) => props.theme === 'primary' && css`
    color: #fff;
    background-color: #AEB84B;
  `}

  ${(props: Props) => props.size === 'large' && css`
    width: 330px;
    padding-top: 15px;
    padding-bottom: 15px;
  `}
`
