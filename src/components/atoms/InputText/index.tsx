import * as React from 'react'
import styled from 'styled-components'

export interface Props {
  className?: string
  name: string
  type: string
  children?: React.ReactNode
  onChange: (e: React.ChangeEvent<any>) => void
  onBlur: (e: any) => void  
  value?: any
  placeholder?: string
}

const InputText: React.SFC<Props> = ({ className, name, type, onChange, onBlur, value, placeholder }) => (
  <Container className={className} type={type} name={name} onChange={onChange} onBlur={onBlur} value={value} placeholder={placeholder} />
)

export default InputText

const Container = styled.input`
  padding: 4px 6px;
  border: none;
  border-radius: 2px;
  outline: none;
`
