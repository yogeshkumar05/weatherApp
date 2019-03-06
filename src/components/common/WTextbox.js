import React from 'react';

const WTextbox = (props) => {
    const {title, description, type, value, style, changeHandler} = props;
    return (<div className='txtbox-container'>
                {title && <div>{title}</div>}
                <div className='input-container'>
                    <input type={type} value={value} className={`txtbox ${style}`} onChange={changeHandler}/>
                    <div className='text-desc'>{description}</div>
                </div>
            </div>);
}

export default WTextbox;