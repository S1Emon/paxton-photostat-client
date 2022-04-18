import React from 'react';
import profile from '../../images/profile/profile.png';

const About = () => {
    return (
        <div>
            <h1 className='text-primary text-center mt-3'>Know About Me!</h1>
            <div className='text-center'>
                <div className='text-center'>
                    <img style={{ width: '180px' }} src={profile} alt="" />
                </div>
                <h4>Md Emon Hossain</h4>
                <p>I want be a Web Developer. And now that is my one and only mission. I'm trying my best with best practice.</p>
            </div>
        </div>
    );
};

export default About;