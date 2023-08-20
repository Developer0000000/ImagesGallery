import React from 'react';
import loading from '../assets/loading.gif';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={loading} alt="loading" />
        </div>
    )
}

export default Spinner
