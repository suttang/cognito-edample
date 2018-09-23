import { withFormik, Form, Field, FieldProps, InjectedFormikProps } from 'formik'
import * as React from 'react'
import styled from 'styled-components'

import Button from '~/components/atoms/Button'
import InputGroup from '~/components/molecules/InputGroup'

export interface FormValues {
  username: string
  password: string
  email: string
  givenName: string
  familyName: string
}

export interface Props {
  className?: string
  onSubmit: (values: FormValues) => void
}

interface FormProps {
  onSubmit: (values: FormValues) => void
}

const SignUpFormSFC: React.SFC<InjectedFormikProps<Props, FormValues>> = ({ className }) => (
  <Container className={className}>
    <Form>
      <InputGroupWrapper>
        <Field
          name="username"
          render={({ field }: FieldProps<FormValues>) => (
            <StyledInputGroup label="Username" type="text" placeholder="" {...field} />
          )}
        />
        <Field
          name="password"
          render={({ field }: FieldProps<FormValues>) => (
            <StyledInputGroup label="Password" type="password" {...field} />
          )}
        />
        <Field
          name="email"
          render={({ field }: FieldProps<FormValues>) => (
            <StyledInputGroup label="Email" type="email" placeholder="" {...field} />
          )}
        />
        <Field
          name="givenName"
          render={({ field }: FieldProps<FormValues>) => (
            <StyledInputGroup label="Given name" type="text" placeholder="" {...field} />
          )}
        />
        <Field
          name="familyName"
          render={({ field }: FieldProps<FormValues>) => (
            <StyledInputGroup label="Family name" type="text" placeholder="" {...field} />
          )}
        />
      </InputGroupWrapper>
      <ButtonWrapper>
        <Button type="submit" theme="primary" size="large">Sign up</Button>
      </ButtonWrapper>
    </Form>
  </Container>
)

const Container = styled.div``

const InputGroupWrapper = styled.div`
  margin-bottom: 40px;
`

const StyledInputGroup = styled(InputGroup)`
  margin-bottom: 20px;
`

const ButtonWrapper = styled.div`
  text-align: center;
`

const SignUpForm = withFormik<FormProps, FormValues>({
  mapPropsToValues: () => {
    return {
      username: '',
      password: '',
      email: '',
      givenName: '',
      familyName: ''
    }
  },
  handleSubmit: (values, { props }) => props.onSubmit(values)
})(SignUpFormSFC)

export default SignUpForm
