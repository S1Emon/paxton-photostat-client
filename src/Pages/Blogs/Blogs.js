import React from 'react';

const Blogs = () => {
    return (
        <div className=''>
            <h1 className='text-primary text-center mt-3'>Welcome to My Blog!</h1>

            <div>
                <h4 className='bg-light text-center mb-5'>Answering Few Questions</h4>
                <div className='p-3'>
                    <h5>What is the difference between authentication and authorization?</h5>
                    <p>Ans: <br />
                        <span className='fw-bold'>Authentication: <br />
                        </span>
                        1. Authentication verifies who the user is. <br />
                        2. Authentication is the first step of a good identity and access management process. <br />
                        3. Authentication is visible to and partially changeable by the user. <br />
                        4. Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data. <br />
                        <span className='fw-bold'>Authorization: <br />
                        </span>
                        1. Authorization determines what resources a user can access. <br />
                        2. Authorization works through settings that are implemented and maintained by the organization. <br />
                        3. Authorization always takes place after authentication. <br />
                        4. Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.
                    </p>
                </div>
                <div className='p-3'>
                    <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
                    <p>Ans: Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration. <br /><br />
                        Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints. I will prefer a third-party authentication, because of that be more secure.
                    </p>
                </div>
                <div className='p-3'>
                    <h5>What other services does firebase provide other than authentication?</h5>
                    <p>Ans: <br />
                        1. Spin up your backend without managing servers <br />
                        2. Easily solve common app development problems <br />
                        3. Effortlessly scale to support <br />
                        4. Build realtime database and storing facilities. <br />
                        5. Deploy fast hosting, secure website that are backed by global CDN. <br />
                        6. Write and run app logical server side without need own server. <br />
                        7. Setup feature flags during prototyping and development.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;