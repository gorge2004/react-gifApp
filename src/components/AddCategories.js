import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategories = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (evt) => {
        setInputValue(evt.target.value);
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (inputValue.trim().length >= 2) {
            setCategories((prevState) => [inputValue, ...prevState ]);
            setInputValue('');
            
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
AddCategories.propTypes = {
    setCategories: PropTypes.func.isRequired,
};
