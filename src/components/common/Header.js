import React from 'react';

const Header = (props) => {
    return (<div className='header-container'>
        <h4>PayNote</h4>
    </div>);
}

Header.defaultProps = {
    to : '/'
}

export default Header;