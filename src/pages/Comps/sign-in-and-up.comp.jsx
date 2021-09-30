import React                        from 'react';
import SignIn                       from './sign-in.comp';
import SignUp                       from './sign-up.comp';


// import CustomButton                 from './custom-button.comp';
 
import                              './sign-in-and-up.styles.scss';

const SignInAndSignUpPage = () => (
        <div className = 'sign-in-and-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;