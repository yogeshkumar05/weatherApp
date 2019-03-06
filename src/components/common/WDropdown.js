import React from 'react';

const WDropdown = (props) => {
    const {value, options, onChangeHandler, index} = props;
    return(
            <select key={index} name={index} className='flexi-dropdown' onChange={onChangeHandler} value={value}>
                <option value="" disabled selected>Choose one</option>
                {options.map((item, i) => <option key={i} value={item}>{item}</option>)}
            </select>
        );
}

export default WDropdown;