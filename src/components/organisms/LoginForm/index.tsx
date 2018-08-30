import { withFormik, FormikProps, Form, Field, FieldProps } from 'formik'
import * as React from 'react'
import styled from 'styled-components'

// https://stackoverflow.com/questions/46078452/typing-redux-forms-v7-with-typescript-and-react

import Button from '~/components/atoms/Button'
import InputGroup from '~/components/molecules/InputGroup'

export interface FormValues {
  email: string
  password: string
}

export interface Props {
  className?: string
}

const LoginFormSFC: React.SFC<Props & FormikProps<FormValues>> = ({ className, handleChange }) => (
  <Container className={className}>
    <Form>
      <InputGroupWrapper>
        <Field
          name="email"
          render={({ field }: FieldProps<FormValues>) => (
            <StyledInputGroup label="Email" type="email" placeholder="ex) username@example.com" {...field} />
          )}
        />
        <Field
          name="password"
          render={({ field }: FieldProps<FormValues>) => (
            <StyledInputGroup label="Password" type="password" {...field} />
          )}
        />
      </InputGroupWrapper>
      <ButtonWrapper>
        <Button theme="primary" size="large">Sign in</Button>
        <input type="submit" value="submit" />
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

interface FormProps {
  initialEmail?: string;
}

export const LoginForm = withFormik<FormProps, FormValues>({
  mapPropsToValues: props => {
    return {
      email: props.initialEmail || '',
      password: ''
    }
  },
  handleSubmit: values => {
    console.info('aiueotarou', values)
  }
})(LoginFormSFC)
