import SignUpForm                   from '../../components/sign-up-form/sign-up-form.comp';
import SignInForm                   from '../../components/sign-in-form/sign-in-form.comp';

import { AuthenticationContainer }  from './authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
