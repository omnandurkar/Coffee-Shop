import React from 'react';
import Video1 from './Beans.mp4'

export default function VideoComp() {
    return (
        <>
            
                <div className="w-100">
                    <video className="" controls>
                        <source src={Video1} type="video/mp4" className='w-100' />
                        Your browser does not support the video tag.
                    </video>
                </div>
            

        </>
    )
}
