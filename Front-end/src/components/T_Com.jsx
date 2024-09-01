import React, { useState, useEffect } from 'react';
import logo from './img/favicon2.png';

const T_Com = () => {
    const [broadcasts, setBroadcasts] = useState([]);

    useEffect(() => {
        // Fetch data from localStorage
        const savedBroadcasts = localStorage.getItem('broadcasts');
        if (savedBroadcasts) {
            const allBroadcasts = JSON.parse(savedBroadcasts);
            // Filter broadcasts with "to" equal to "Ashok Nagar"
            const filteredBroadcasts = allBroadcasts.filter(broadcast => broadcast.to === 'Ashok Nagar');
            setBroadcasts(filteredBroadcasts);
        }
    }, []);

    return (
        <div>
            <div className='back'>
                <div style={{ color: '#a27a47' }} className='top1 md:hidden left-1/3 top-5 text-3xl zain'>
                    COMMUNICATION
                </div> 
                <div className='hidden md:flex top py-2'>
                    <div className='logo flex justify-start items-center lg:p-4'>
                        <img className='h-8 w-10 mx-2' src={logo} alt="" />
                        <span className='name font-bold text-xl'>Arty-Home</span>
                    </div>
                    <span style={{ color: '#a27a47' }} className='comm zain'>COMMUNICATION</span>
                </div>

                <div className='md:ml-52 px-40 pt-32 justify-center flex flex-wrap items-center'>
                    {broadcasts.length > 0 ? (
                        broadcasts.map((broadcast, index) => (
                            <div key={index} className='md:w-full w-56 h-fit my-8 mx-10 px-5 text-md py-4 md:py-10 box md:flex grid justify-items-center justify-center items-center'>
                                <div className='flex gap-2'>
                                    <div className='grid justify-items-center p-2 gap-2 text-md'>
                                        <span>Date :</span>                                
                                        <span>From :</span>
                                        <span>Subject :</span>
                                    </div>
                                    <div className='grid justify-items-start p-2 ntext1 gap-2 text-md'>
                                        <span>{broadcast.date}</span>
                                        <span>{broadcast.from}</span>
                                        <span>{broadcast.subject}</span>
                                    </div>
                                </div>
                                <div>
                                    <span>Message :</span>
                                    <div className='max-w-xl italic pt-2 text ntext1'>
                                        {broadcast.message}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='w-full h-fit my-8 mx-10 px-5 py-10 box flex justify-center items-center'>
                            <div className='italic text-center'>No communications found for Ashok Nagar.</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default T_Com;
