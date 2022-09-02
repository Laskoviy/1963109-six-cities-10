import React, { useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { getLoginErrorStatus } from '../../store/user-process/selectors';
import classNames from 'classnames';
import { toast } from 'react-toastify';
import Header from '../../components/header/header';
import ErrorMessage from '../../components/error-message/error-message';
import ToGoCityButton from '../../components/to-go-city-button/to-go-city-button';
import { ButtonName, Pattern, Timer, ValidationMessage } from '../../const';
import { clearLoginError } from '../../store/user-process/user-process';

type FormData = {
  email: string,
  password: string
}


const LoginPage: React.FC = () => {
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    }
  } = useForm<FormData>();

  const isLoginError = useAppSelector(getLoginErrorStatus);
  const isDisabledBtn = !!errors?.email || !!errors?.password || isSubmitting || isLoginError;
  const buttonName = isSubmitting ? ButtonName.Sending : ButtonName.SignIn;

  const emailInputClass = classNames('login__input form__input', {
    'input__login__error': errors?.email
  });

  const passwordInputClass = classNames('login__input form__input', {
    'input__login__error': errors?.password
  });

  const buttonClass = classNames('login__submit form__submit button', {
    'login__submit__error horizontal-shake': isLoginError
  });

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    toast.dismiss();

    await dispatch(loginAction({
      login: formData.email,
      password: formData.password
    }));
  };

  if (isLoginError && !timerRef.current) {
    timerRef.current = setTimeout(() => {
      dispatch(clearLoginError());
      timerRef.current = undefined;
    }, Timer.Login);
  }

  useEffect(
    () =>
      () => {
        if (timerRef.current) {
          toast.dismiss();
          dispatch(clearLoginError());
          clearTimeout(timerRef.current);
        }
      }, [dispatch]);


  return (
    <div className="page page--gray page--login">
      <Header isHideUserSection />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="login__form form"
              action="#"
              method="post"
              noValidate
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  {...register('email', {
                    required: ValidationMessage.Email.Required,
                    pattern: {
                      value: Pattern.Email,
                      message: ValidationMessage.Email.Pattern
                    }
                  })}
                  className={emailInputClass}
                  type="email"
                  placeholder="Email"
                  title={ValidationMessage.Email.Title}
                  disabled={isSubmitting}
                />
                {errors?.email && <ErrorMessage isLoginMessage errorMessage={errors.email?.message} />}
              </div>

              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  {...register('password', {
                    required: ValidationMessage.Password.Required,
                    pattern: {
                      value: Pattern.Password,
                      message: ValidationMessage.Password.Pattern
                    }
                  })}
                  className={passwordInputClass}
                  type="password"
                  placeholder="Password"
                  title={ValidationMessage.Password.Title}
                  disabled={isSubmitting}
                />
                {errors?.password && <ErrorMessage isLoginMessage errorMessage={errors.password?.message} />}
              </div>

              <button
                disabled={isDisabledBtn}
                className={buttonClass}
                type="submit"
              >
                {buttonName}
              </button>
            </form>
          </section>

          <ToGoCityButton />
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
