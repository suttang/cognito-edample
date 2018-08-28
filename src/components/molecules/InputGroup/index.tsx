import * as React from 'react'
import styled from 'styled-components'

import InputText from '~/components/atoms/InputText'
import Label from '~/components/atoms/Label'


export interface Props {
  label: string
  type: string
}

const InputGroup: React.SFC<Props> = ({ label, type }) => (
  <Container>
    <StyledLabel>{label}</StyledLabel>
    <StyledInputText type={type} />
  </Container>
)

const Container = styled.label`
  display: flex;
  margin-bottom: 10px;
`

const StyledLabel = styled(Label)`
  width: 160px;
  flex-glow: 4;
  line-height: 34px;
`

const StyledInputText = styled(InputText)`
  margin-bottom: 100px;
`

export default InputGroup
