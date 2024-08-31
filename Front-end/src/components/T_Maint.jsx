import React, { useState, useEffect, useRef } from 'react';
import logo from './img/favicon2.png';

const T_Maint = () => {
    // State to store the current date, form inputs, and the list of requests
    const [currentDate, setCurrentDate] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [from, setFrom] = useState(''); // Added state for the 'From' field
    const [recentRequests, setRecentRequests] = useState([]);
    const [pastRequests, setPastRequests] = useState([]);

    const newReqRef = useRef(null);

    useEffect(() => {
        const storedRequests = localStorage.getItem('pastRequests');
        if (storedRequests) {
            const allreq = JSON.parse(storedRequests);
            // Filter broadcasts with "to" equal to "Ashok Nagar"
            const filteredreq = allreq.filter(request => request.from === 'Ashok Nagar');
            setPastRequests(filteredreq);
        }

        
    }, []);

    useEffect(() => {
        const savedRequests = localStorage.getItem('recentRequests');
        if (savedRequests) {
            const requests = JSON.parse(savedRequests);
            const activeRequests = requests.filter(req => req.status === 'Pending' || req.status === 'Review');
            setRecentRequests(activeRequests);
        }

        // Get today's date in the format YYYY-MM-DD
        const today = new Date().toISOString().split('T')[0];
        setCurrentDate(today);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add the new request to the recentRequests array
        const newRequest = {
            date: currentDate,
            subject: subject,
            description: description,
            from:from,
            status: 'Pending', // Default status
        };

        // Update localStorage
        const updatedRequests = [newRequest, ...recentRequests];
        setRecentRequests(updatedRequests);
        localStorage.setItem('recentRequests', JSON.stringify(updatedRequests));

        // Save the 'From' value to localStorage
     
        // Clear the form inputs
        setSubject('');
        setDescription('');
        setFrom(''); // Clear the 'From' field after submission
    };

    const newReq = () => {
        setTimeout(() => {
            newReqRef.current.scrollIntoView();
        }, 100);
    };

    return (
        <div>
            <div>
                <div style={{ color: '#a27a47' }} className='top1 md:hidden left-1/3 top-5 text-3xl zain'>
                    MAINTENANCE
                </div>
                <div className='hidden md:flex top py-2'>
                    <div className='logo flex justify-start items-center lg:p-4'>
                        <img className='h-8 w-10 mx-2' src={logo} alt="" />
                        <span className='name font-bold text-xl'>Arty-Home</span>
                    </div>
                    <span style={{ color: '#a27a47' }} className='maint zain'>MAINTENANCE</span>
                </div>

                <div className='md:ml-56 p-10 grid items-center justify-center'>
                    <div className='grid mt-28 justify-items-center'>
                        <span className='mt-5 text-blue-700  text-center text-3xl anton-sc'>Active Requests</span>
                        <div className='box px-6 py-2 my-4 grid justify-items-start max-w-5xl'>
                            {recentRequests.length === 0 ? (
                                <span className='text-center mt-4 p-4'>No recent requests.</span>
                            ) : (
                                recentRequests.map((request, index) => (
                                    <div key={index} className='flex gap-5 pt-5 border-b-4 py-5'>
                                        <div className='grid justify-items-start gap-2 ntext'>
                                            <div className='flex justify-center items-center gap-3'>
                                                <span>Date</span>
                                                <span className=' pl-12'>:</span>
                                                <span className='text ntext1'>{request.date}</span>
                                            </div>
                                            <div className='flex justify-center items-center gap-3'>
                                                <span>Subject</span>
                                                <span className=' pl-7'>:</span>
                                                <span className='text ntext1 '>{request.subject}</span>
                                            </div>
                                            <div className='flex justify-center items-center gap-3'>
                                                <span>Description</span>
                                                <span >:</span>
                                                <span className='text ntext1'>{request.description}</span>
                                            </div>
                                            <div className='flex justify-center items-center gap-3'>
                                                <span>Status</span>
                                                <span className=' pl-10'>:</span>
                                                <span className={`text-center font-semibold text-xl lobster ${request.status === 'Pending' ? 'text-blue-500' : 'text-amber-800'}`}>{request.status}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}

                            <div onClick={newReq} className='flex justify-center items-center text-center my-3 text-xl px-3 pt-3 pb-1 gap-2 text-blue-600 font-bold zain cursor-pointer '>
                                <span>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/zrkkrrpl.json"
                                        trigger="loop"
                                        delay="4000"
                                        stroke="bold"
                                        state="hover-swirl"
                                        colors="primary:#794628,secondary:#a66037"
                                    >
                                    </lord-icon>
                                </span>
                                <span className='pb-1' >Create New Request</span>
                            </div>

                        </div>

                        <span className='text-blue-700 text-center mt-10 text-3xl anton-sc'>Closed Requests</span>
                        <div  className='box p-6 my-4 grid justify-items-start max-w-5xl'>
                            {pastRequests.length > 0 ? (
                                <>
                                    {pastRequests.map((request, index) => (
                                        <div key={index} className='flex gap-5 pt-5 border-b-4 py-5'>
                                            <div className='grid justify-items-start gap-2 ntext'>
                                                <div className='flex justify-center items-center gap-3'>
                                                    <span>Date</span>
                                                    <span className=' pl-12'>:</span>
                                                    <span className='text ntext1 '>{request.date}</span>
                                                </div>
                                                <div className='flex justify-center items-center gap-3'>
                                                    <span>Subject</span>
                                                    <span className=' pl-7'>:</span>
                                                    <span className='text ntext1'>{request.subject}</span>
                                                </div>
                                                <div className='flex justify-center items-center gap-3'>
                                                    <span>Description</span>
                                                    <span >:</span>
                                                    <span className='text ntext1'>{request.description}</span>
                                                </div>
                                                <div  className='flex justify-center items-center gap-3'>
                                                    <span>Status</span>
                                                    <span className=' pl-10'>:</span>
                                                    <span className={`text-center font-semibold text-xl lobster ${request.status === 'Resolved' ? 'text-green-500' : 'text-red-500'}`}>
                                                        {request.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <p className='p-2'>No closed requests available.</p>
                            )}
                        </div>
                    </div >

                    <div ref={newReqRef}  className='my-5 grid justify-items-center items-start'>
                        <div  className='py-5 text-3xl text-blue-700 anton-sc '>
                            Create New Request
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='form form1 px-10 py-4 grid justify-items-center'>
                                <div>
                                    <input className='hidden' type="date" value={currentDate} readOnly />
                                </div>
                                <div>
                                    <span>Enter Subject </span>
                                    <input
                                        required
                                        minLength={10}
                                        className='text-xl placeholder:text-yellow-800'
                                        type="text"
                                        placeholder='Enter Subject'
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                    
                                </div>
                                <div>
                                    <span>Enter Description </span>
                                    <textarea

                                        required
                                        minLength={30}
                                        rows={2}
                                        className='text-xl placeholder:text-yellow-800'
                                        type="text"
                                        placeholder='Enter Description'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <span>Select Address </span>
                                    <select
                                        required
                                        className='text-xl placeholder:text-yellow-950 px-10'
                                        value={from}
                                        onChange={(e) => setFrom(e.target.value)}
                                    >
                                        <option value="" disabled>Select Address</option>
                                        <option value='Ashok Nagar'>Ashok Nagar</option>
                                        <option value='Sun Colony'>Sun Colony</option>
                                    </select>

                                </div>
                                <div>
                                    <span>Attach Image </span>
                                    <input  type="file" />
                                </div>
                                <div>
                                    <span>Attach Video </span>
                                    <input  type="file" />
                                </div>

                                <button type='submit' className='bg-white px-5 py-2 my-4 text-amber-950 hover:ring-2 ring-amber-950 font-extrabold rounded-lg'>
                                    SUBMIT REQUEST
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default T_Maint;
