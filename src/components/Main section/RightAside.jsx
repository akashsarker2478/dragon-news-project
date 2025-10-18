import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import FindUs from '../FindUs/FindUs';
import Qzone from '../Q-zone/qzone';

const RightAside = () => {
    return (
        <div className='space-y-4'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;