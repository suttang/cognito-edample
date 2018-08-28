import * as React from 'react'
import styled from 'styled-components'

export interface Props {
  type: string
  children?: React.ReactNode
}

const InputText: React.SFC<Props> = ({ type }) => (
  <Container type={type} />
)

export default InputText

const Container = styled.input`
  padding: 4px 6px;
  border: 1px solid #ccc;
  border-radius: 2px;
  outline: none;
`
