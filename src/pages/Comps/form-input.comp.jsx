import React from 'react';

import './form-input.styles.scss';

const FormInput = ( { handleChange, label, ...otherProps }) => (
//  handleChange here to allow input to bubble up.
//  Use label prop to selectively render a label
//  'shrink' property for when user types anything in ... use with autocomplete.

<div className = 'group'>
    <input className = 'form-input' onChange = { handleChange } { ...otherProps } />
    { label ? (
        <label 
            className = {`${otherProps.value.length ? 'shrink' : ''
            } form-input-label`}
            >
            { label }
        </label>
        ) : null }
</div>

);

export default FormInput;