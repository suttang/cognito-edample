import * as React from 'react'

import styled, { css } from 'styled-components'
import Text from '~/components/atoms/Text'

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
    <Text>{children}</Text>
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
  color: #fff;
  font-weight: 600;
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
    padding-top: 13px;
    padding-bottom: 13px;
  `}

  /* HOVER */
  &:hover {
    ${(props: Props) => props.theme === 'primary' && css`
      color: rgba(255, 255, 255, 0.85);
      background-color: #A1AB46;
    `}
  }
  &:active {
    ${(props: Props) => props.theme === 'primary' && css`
      color: rgba(255, 255, 255, 0.7);
      background-color: #818938;
    `}
  }
`
