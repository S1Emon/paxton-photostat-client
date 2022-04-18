import React from 'react';
import useGears from '../../../hooks/useGears';
import Gear from '../Gear/Gear';

const Gears = () => {
    const [gears, setGears] = useGears();
    console.log(gears);
    return (
        <div id='gears' className='container'>
            <h1 className='text-primary text-center mt-5 mb-0'>My Gears</h1>
            <div className='row'>
                {
                    gears?.map(gear => <Gear
                        key={gear?.id} gear={gear}
                    ></Gear>)
                }
            </div>
        </div>
    );
};

export default Gears;