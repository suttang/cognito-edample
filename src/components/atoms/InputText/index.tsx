import * as React from 'react'
import styled from 'styled-components'

export interface Props {
  className?: string
  type: string
  children?: React.ReactNode
}

const InputText: React.SFC<Props> = ({ className, type }) => (
  <Container className={className} type={type} />
)

export default InputText

const Container = styled.input`
  padding: 4px 6px;
  border: none;
  border-radius: 2px;
  outline: none;
`
