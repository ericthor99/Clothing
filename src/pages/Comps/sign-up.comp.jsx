import React                        from 'react';
import FormInput                    from './form-input.comp';
import CustomButton                 from './custom-button.comp';
import { auth, createUserProfile }  from './../../firebase/firebase.utils';

import                              './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor () { 
        super ();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
}

handleSubmit = async ( event ) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state; 

    if ( password !== confirmPassword ) {
        alert ("Passwords don't match");
        return;
    }

    try {
        const { user } = await auth.createUserWithEmailAndPassword ( email, password );
        await createUserProfile ( user, { displayName });
        this.setState ( {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        } );
    } 
    catch ( error ) {
        console.error ( error );
    }

};

handleChange = ( event ) => {
    const { name, value } = event.target;
    
    this.setState( { [name]: value } );
};

//  ---------------------------------------------------------------------- handleSubmit
    render () {
        const { displayName, email, password, confirmPassword } = this.state; 


        return (
            <div className = 'sign-up'>
                <h2 className = 'title'>I don't have an account</h2>
                <span>Sign Up</span>
                <form className = 'sign-up-form' onSubmit = { this.handleSubmit }>
                    <FormInput
                        type = 'text'
                        name = 'displayName'
                        value = { displayName }
                        onChange = { this.handleChange }
                        label = 'Display Name'
                        required
                    />
                    <FormInput
                        type = 'email'
                        name = 'email'
                        value = { email }
                        onChange = { this.handleChange }
                        label = 'Email'
                        required
                    />
                    <FormInput
                        type = 'password'
                        name = 'password'
                        value = { password }
                        onChange = { this.handleChange }
                        label = 'Password'
                        required
                    />
                    <FormInput
                        type = 'password'
                        name = 'confirmPassword'
                        value = { confirmPassword }
                        onChange = { this.handleChange }
                        label = 'Confirm Password'
                        required
                    />
                <CustomButton type = 'submit'>SIGN UP</CustomButton>
                </form>

            </div>
        )
    }
}

export default SignUp;