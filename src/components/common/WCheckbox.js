import React from 'react';

const WCheckbox = (props) => {
    const {value, name, onChangeHandler} = props;
    return(
            <div>
                <input type="checkbox" name={name} value={value} onChange={onChangeHandler}/>{value}
            </div>
            
        );
}

export default WCheckbox;