import React, { useState } from 'react';
import PropTypes from 'prop-types';




 export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChanges = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 0) {
            setCategories(categories => [inputValue,...categories]);
            setInputValue('');
        }


    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChanges}
            />
        </form>
    )
}


AddCategory.prototypes = {
    setCategories: PropTypes.func.isRequired
};





