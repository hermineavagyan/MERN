import React from 'react';

const Header = (props)=>{
    const {name} = props;
    return (
        <div className='header'>
            Hello {name}!
            <hr></hr>
        </div>
    )
}
export default Header;