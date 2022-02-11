import React from 'react';
import Subcontents from './Subcontents';


const Main = (props) => {





    return (
        <div className='main'>
        Main
        <Subcontents text = "subcomponent1"/>
        <Subcontents text = "subcomponent2"/>
        <Subcontents text = "subcomponent3"/>
        </div>
    )
}
export default Main;