import { FunctionComponent, ReactNode } from 'react'

// Styles
import { InputErrorMessageContainer } from './input-error-message.styles'

interface InputErrorMessageProps {
  children: ReactNode
}

const InputErrorMessage: FunctionComponent<InputErrorMessageProps> = ({
  children
}) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}

export default InputErrorMessage
