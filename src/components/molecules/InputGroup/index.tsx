import * as React from 'react'
import styled from 'styled-components'

import InputText from '~/components/atoms/InputText'
import Text from '~/components/atoms/Text'


export interface Props {
  className?: string
  name: string
  label: string
  type: string
  value?: any
  placeholder?: string
  onChange: (e: React.ChangeEvent<any>) => void
  onBlur: (e: any) => void  
}

const InputGroup: React.SFC<Props> = ({ className, label, name, type, onChange, onBlur, value, placeholder }) => (
  <Container className={className}>
    <StyledLabel>{label}</StyledLabel>
    <StyledInputText name={name} type={type} onChange={onChange} onBlur={onBlur} value={value} placeholder={placeholder} />
  </Container>
)

const Container = styled.label`
  display: block;
`

const StyledLabel = styled(Text)`
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

  &:focus {
    background: rgba(255, 255, 255, 0.20);
  }
`

export default InputGroup
