import React from 'react';
import '../error-message/error-message.css';

type ErrorMessageProps = {
  errorMessage: string | null | undefined,
  isLoginMessage?: boolean
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage, isLoginMessage }) =>
  isLoginMessage
    ? <div className='login__error__message'>{errorMessage}</div>
    : <div className='review__error__message horizontal-shake'>{errorMessage}</div>;

export default ErrorMessage;
