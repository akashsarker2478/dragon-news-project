import React from 'react';
import swiming from '../../assets/swimming.png'
import classimg from '../../assets/class.png'
import playground from '../../assets/playground.png'


const Qzone = () => {
    return (
        <div className='bg-base-300 mt-5'>
            <h2 className='font-bold'>Q-zone</h2>
            <img src={swiming} alt="" /><img src={classimg} alt="" /><img src={playground} alt="" />
        </div>
    );
};

export default Qzone;