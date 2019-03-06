import React from 'react';

const WButton = (props) => {
    const {title, style, clickHandler} = props;
    return (<button className={`btn ${style}`} onClick={clickHandler}>
        {title}
    </button>)
}

export default WButton;