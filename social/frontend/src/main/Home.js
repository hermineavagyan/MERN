import React from 'react';
import Posts from '../post/Posts';

const Home = () => (
    <div >

        <div>
            <h2>My Home</h2>
            <p>Welcome to react frontend</p>
        </div>
        <div className='container'>
            <Posts />
        </div>
    </div>


)
export default Home;