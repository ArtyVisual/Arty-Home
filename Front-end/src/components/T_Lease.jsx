import React, { useState ,useRef } from 'react';
import logo from './img/favicon2.png';
import house1 from './img/house.jpg';
import dhouse from './img/Dhouse.png'

const T_Lease = () => {
    
    const [expandedLease, setExpandedLease] = useState(null);
    const detailsRef = useRef(null);

    const handleExpand = (leaseId) => {
        
            setExpandedLease(leaseId); 
            setTimeout(() => {
                detailsRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 100); 
    };

    const leaseDetails = [
        {
            id: 1,
            address: "Commercial Colony, Indore 30037",
            owner: "Mr. Suresh Kumar",
            date: "01/10/22",
            rent: "28000",
        },
        {
            id: 2,
            address: "Subhash Nagar, Indore 30039",
            owner: "Mr. Rajesh Singh",
            date: "01/10/21",
            rent: "27000",
        },
        {
            id: 3,
            address: "MG Society, Indore 30032",
            owner: "Mr. Anil Sharma",
            date: "01/10/20",
            rent: "26000",
        },
    ];

    return (
        <div>
            <div className='back'>
                <div style={{ color: '#a27a47' }} className='top1 md:hidden left-1/2 -ml-12 top-5 text-3xl zain'>
                     LEASE
                </div> 
                <div className='hidden md:flex top py-2'>
                    <div className='logo flex justify-start items-center lg:p-4'>
                        <img className='h-8 w-10 mx-2' src={logo} alt="" />
                        <span className='name font-bold text-xl'>Arty-Home</span>
                    </div>
                    <span style={{ color: '#a27a47' }} className='lease zain '>LEASES</span>
                </div>
                <div className='md:ml-32 grid justify-items-center items-center justify-center'>
                     <div className='md:pl-20 md:pt-32 grid justify-items-center py-4'>
                        <div className='p-4 text-3xl text-blue-700 anton-sc'>
                            Current Lease
                        </div> 
                        <div className='box md:flex grid justify-items-center justify-center items-center gap-5 p-8'>
                            <div>
                                <img className='w-52 h-32 ring-1 ring-yellow-950 rounded-md' src={house1} alt="" />
                            </div>
                            <div className='p-4 md:flex gap-8'>
                                <div className='grid md:w-80 ntext font-bold justify-items-start items-center'>
                                    <div className=''>
                                        <span>Address</span>
                                        <span className='md:pl-20 pr-2'>:</span>
                                        <span >Ashok Nagar</span>
                                    </div>
                                    <div className=''>
                                        <span>Owner Name</span>
                                        <span className='md:pl-10 pr-2'>:</span>
                                        <span>Mr. Ashish Mehta</span>
                                    </div>
                                    <div className=''>
                                        <span>Agreement Date </span>
                                        <span  className='md:pl-4 pr-2'>:</span>
                                        <span>30/9/23</span>
                                    </div>
                                    <div className=''>
                                        <span>Rent</span>
                                        <span  className='md:pl-24 ml-2 pr-2'>:</span>
                                        <span>30000</span>
                                    </div>

                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className='md:ml-28 grid justify-items-center justify-center p-10'>
                        <div className='p-4 text-3xl text-blue-700 anton-sc'>
                            Past Lease
                        </div>
                        <div className='md:flex grid justify-between items-center gap-10'>
                            {leaseDetails.map((lease) => (
                                <div className='box p-8' key={lease.id}>
                                    <div className='grid'>
                                        <span className='ntext'>{lease.date.split("/")[2]}--{parseInt(lease.date.split("/")[2]) + 1}</span>
                                        <span className='text'>{lease.address}</span>
                                        <br />
                                        <span
                                            style={{ color: '#a27a47'  }}
                                            className='ntext cursor-pointer'
                                            onClick={() => handleExpand(lease.id)}
                                        >
                                            Know More
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {expandedLease && (
                            <div ref={detailsRef} className='mt-8 grid justify-items-center w-full p-4 bg-white rounded-lg'>
                                <div className='p-4 text-3xl text-blue-900 anton-sc'>
                                  Past Lease Details
                                </div>
                                <div className='box md:flex grid justify-center items-center justify-items-center gap-5 p-8'>
                                    <div>
                                        <img className='w-52 h-32 ring-1 ring-yellow-950 rounded-md' src={house1} alt="" />
                                    </div>
                                    <div className='p-4 flex gap-8'>
                                        <div className='grid justify-center ntext font-bold justify-items-center items-center'>
                                            <span>Address</span>
                                            <span>Owner Name</span>
                                            <span>Agreement Date</span>
                                            <span>Rent</span>
                                        </div>
                                        <div className='grid justify-start ntext justify-items-start items-center'>
                                            <span>:</span>
                                            <span>:</span>
                                            <span>:</span>
                                            <span>:</span>
                                        </div>
                                        <div className='grid text ntext1 justify-start justify-items-start items-center'>
                                            <span>{leaseDetails.find(lease => lease.id === expandedLease).address}</span>
                                            <span>{leaseDetails.find(lease => lease.id === expandedLease).owner}</span>
                                            <span>{leaseDetails.find(lease => lease.id === expandedLease).date}</span>
                                            <span>{leaseDetails.find(lease => lease.id === expandedLease).rent}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default T_Lease;
