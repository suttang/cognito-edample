import * as React from 'react'
import styled from 'styled-components'

import InputText from '~/components/atoms/InputText'
import Label from '~/components/atoms/Label'


export interface Props {
  className?: string
  label: string
  type: string
}

const InputGroup: React.SFC<Props> = ({ className, label, type }) => (
  <Container className={className}>
    <StyledLabel>{label}</StyledLabel>
    <StyledInputText type={type} />
  </Container>
)

const Container = styled.label`
  display: block;
`

const StyledLabel = styled(Label)`
  display: block;
  margin-bottom: 10px;
  color: #fff;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
`

const StyledInputText = styled(InputText)`
  padding: 14px 18px;
  border-radius: 2px;
  outline: none;
  width: 100%;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.05rem;
`

export default InputGroup
