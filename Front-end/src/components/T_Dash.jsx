import React from 'react'
import { useState,useEffect } from 'react';
import logo from './img/favicon2.png';
import { useLocation } from 'react-router';
import house1 from './img/house.jpg';


const T_Dash = () => {

    const [recentRequests, setRecentRequests] = useState([]);
    const [mostRecentBroadcast, setMostRecentBroadcast] = useState(null);

    // Function to limit message to 20 words
    const limitMessage = (message, wordLimit) => {
        const words = message.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : message;
    };

    // Fetch data from localStorage on component mount
    useEffect(() => {
        // Fetching 'recentRequests' from localStorage
        const storedRequests = localStorage.getItem('recentRequests');
        if (storedRequests) {
            const allreq = JSON.parse(storedRequests);
            // Filter broadcasts with "to" equal to "Ashok Nagar"
            const filteredreq = allreq.filter(request => request.from === 'Ashok Nagar');
            setRecentRequests(filteredreq);
        }

        // Fetching 'broadcasts' from localStorage
        const storedBroadcasts = localStorage.getItem('broadcasts');
        if (storedBroadcasts) {

            const allBroadcasts = JSON.parse(storedBroadcasts);
            // Filter broadcasts with "to" equal to "Ashok Nagar"
            const filteredBroadcasts = allBroadcasts.filter(broadcast => broadcast.to === 'Ashok Nagar');
            setMostRecentBroadcast(filteredBroadcasts);

            if (filteredBroadcasts.length > 0) {
                // Set the most recent broadcast (assuming the broadcasts are ordered by date)
                setMostRecentBroadcast(filteredBroadcasts[0]); // Pick the first one as the most recent
            }
        }
    }, []);

    return (
        <div className='back'>
            <div className='top flex py-2 '>
                <div className='logo flex justify-start items-center lg:p-4' >
                    <img className='h-8 w-10 mx-2' src={logo} alt="" />
                    <span className='name font-bold text-xl'>Arty-Home</span>
                </div>
                <div>
                    <span style={{ color: '#a27a47' }} className='dash zain'>DASHBOARD</span>
                </div>
            </div>
            <div className='center flex justify-start items-center flex-wrap'>

                <div className='first grid mt-10 p-10'>

                    <div className='box bg-white p-4 grid justify-center my-5 justify-items-center  '>
                        <div className='heading mb-5 w-full py-2'>
                            Leases
                        </div>
                        <div className='grid justify-items-center gap-4' >

                            <div className='bg-green-600 font-semibold text-white text-sm py-1 px-3 rounded-md ring-1 ring-white'>
                                Current
                            </div>
                            <div className='flex justify-center items-center gap-4 '>
                                <img className='image ring-1 ring-black rounded-sm' src={house1} alt="" />
                                <div className='text flex  justify-center flex-wrap '>
                                    <span>Ashok Nagar,Indore 3003</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='box bg-white p-4 grid justify-center my-3 justify-items-center '>
                        <div className='heading mb-4 w-full py-2  px-20 '>
                            Payment History
                        </div>
                        <div className='grid  justify-between items-center gap-2 '>
                            <div className='text-center bebas-neue text-xl '>
                                August
                            </div>
                            <div className='flex justify-between items-center gap-24'>
                                <div className='ntext'>
                                    <div>Rent :</div>
                                    <div>Maintenance :</div>
                                    
                                </div>
                                <div>
                                    <div className='text-center text-red-500 font-semibold text-lg px-2 lobster'>Due</div>
                                    <div className='text-center text-red-500 font-semibold text-lg px-2 lobster'>Due</div>
    
                                </div>
                            </div>
                            <div className='text-center bebas-neue text-xl mt-4'>
                                July
                            </div>
                            <div className='flex justify-between items-center '>
                                <div className='ntext'>
                                    <div>Rent :</div>
                                    <div>Maintenance :</div>     
                                </div>
                                <div >
                                    <div className='text-center text-green-500 font-semibold text-lg px-2 lobster'>Paid</div>
                                    <div className='text-center text-green-500 font-semibold text-lg px-2 lobster'>Paid</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    

                </div>
                <div className='second w-fit grid  justify-item-start items-start align-top mt-10 p-10'>

                    <div className='box max-w-80 bg-white p-4 grid justify-center my-5 justify-items-center'>
                        <div className='heading mb-5 w-full py-2'>Active Request</div>
                        {/* Display recent requests */}
                        {recentRequests.length > 0 ? (
                            recentRequests.map((request, index) => (
                                <div key={index} className='flex justify-items-center gap-4'>
                                    <div className='ntext pl-2 w-32 grid gap-2'>
                                        <div>Date :</div>
                                        <div>Subject :</div>
                                        <div>Status :</div>
                                    </div>
                                    <div className='w-36 grid gap-2'>
                                        <div className='text ntext1'>{request.date}</div>
                                        <div className='text ntext1'>{request.subject}</div>
                                        <div className={`text-lg font-semibold px-0 lobster ${request.status === 'Pending' ? 'text-red-500' : 'text-amber-700'}`}>
                                            {request.status}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>No recent requests found.</div>
                        )}
                    </div>
                    
                    <div className='box max-w-80 bg-white p-4 grid h-fit justify-center my-5 justify-items-center'>
                        <div className='heading mb-4 w-full py-2'>Communication</div>
                        {/* Display most recent broadcast */}
                        {mostRecentBroadcast ? (
                            <div className='grid px-2 justify-center items-center gap-1'>
                                <div className='flex justify-center gap-5 text-sm'>
                                    <div className='text ntext1'>From: {mostRecentBroadcast.from}</div>
                                    <div className='text ntext1'>Date: {mostRecentBroadcast.date}</div>
                                </div>
                               <div className='text-center pt-2'>
                                    <b>Message:</b> {limitMessage(mostRecentBroadcast.message,40 )}
                                </div>
                            </div>
                        ) : (
                            <div>No communication found.</div>
                        )}
                    </div>

                </div>
                <div className='third  grid mt-10 p-10'>

                    <div className='box bg-white py-4 grid justify-center my-5 justify-items-center '>
                        <div className='heading mb-4 px-24 w-full py-2 '>
                            Documents
                        </div>
                        <div >
                            <ul className='grid gap-2' >
                                <li className='text'>
                                    Lease Agreement <br></br> (2023-2024) 
                                </li>
                                <li className='text'>
                                    Service Reports (2024)
                                </li>
                                <li className='text'> 
                                    Billing Statements (2024)
                                </li>
                                <li className='text'> 
                                    HOA Certificate (2024)
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className='box bg-white p-4 grid h-fit justify-center my-5 justify-items-center '>
                        <div className='heading mb-8 w-full py-2 px-20 '>
                            Profile Activity
                        </div>
                        <div className='grid justify-center items-center gap-4 '>
                            <div>   
                                <span> 12/8/24 </span>
                                <span className='text'> : Profile Info Updated </span>
                            </div>
                            <div>
                                <span> 10/8/24 </span>
                                <span className='text'> : Password Changed </span>
                            </div>
                            <div>
                                <span> 05/8/24 </span>
                                <span className='text'> : ID Verified successfully </span>
                            </div>
                        </div>

                    </div>

                </div>
               
            </div>
        </div>
    )
}

export default T_Dash