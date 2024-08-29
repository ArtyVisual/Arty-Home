import React, { useState, useEffect } from 'react';
import logo from './img/favicon2.png';

const L_Maint = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [recentRequests, setRecentRequests] = useState([]);
    const [pastRequests, setPastRequests] = useState([]);

    // Load the saved requests from localStorage when the component mounts
    useEffect(() => {
        const savedRequests = localStorage.getItem('recentRequests');
        const savedPastRequests = localStorage.getItem('pastRequests');

        if (savedRequests) {
            setRecentRequests(JSON.parse(savedRequests));
        }
        if (savedPastRequests) {
            setPastRequests(JSON.parse(savedPastRequests));
        }

        // Get today's date in the format YYYY-MM-DD
        const today = new Date().toISOString().split('T')[0];
        setCurrentDate(today);
    }, []);

    // Action handlers
    const handleApprove = (index) => {
        const requestToApprove = recentRequests[index];
        requestToApprove.status = 'Resolved'; // Change status to Resolved
        const updatedPastRequests = [requestToApprove, ...pastRequests];
        setPastRequests(updatedPastRequests);

        const updatedRecentRequests = recentRequests.filter((_, i) => i !== index);
        setRecentRequests(updatedRecentRequests);

        localStorage.setItem('recentRequests', JSON.stringify(updatedRecentRequests));
        localStorage.setItem('pastRequests', JSON.stringify(updatedPastRequests));
    };

    const handleDeny = (index) => {
        const requestToDeny = recentRequests[index];
        requestToDeny.status = 'Denied'; // Change status to Denied
        const updatedPastRequests = [requestToDeny, ...pastRequests];
        setPastRequests(updatedPastRequests);

        const updatedRecentRequests = recentRequests.filter((_, i) => i !== index);
        setRecentRequests(updatedRecentRequests);

        localStorage.setItem('recentRequests', JSON.stringify(updatedRecentRequests));
        localStorage.setItem('pastRequests', JSON.stringify(updatedPastRequests));
    };

    const handleReview = (index) => {
        const updatedRequests = [...recentRequests];
        updatedRequests[index].status = 'Review'; // Change status to Review
        setRecentRequests(updatedRequests);

        localStorage.setItem('recentRequests', JSON.stringify(updatedRequests));
    };

    return (
        <div>
            <div className=''>
                <div className='top py-2'>
                    <div className='logo flex justify-start items-center lg:p-4'>
                        <img className='h-8 w-10 mx-2' src={logo} alt="" />
                        <span className='name font-bold text-xl'>Arty-Home</span>
                    </div>
                    <span style={{ color: '#a27a47' }} className='maint zain'>MAINTENANCE</span>
                </div>

                <div className='ml-56 flex items-center justify-center'>
                    <div className='grid mt-28 justify-items-center'>
                        <span className='mt-5 text-blue-700 text-center text-3xl anton-sc'>Active Requests</span>
                        <div className='box p-6 my-4 grid justify-items-start max-w-5xl border-b-4 border-gray-500'>
                            {recentRequests.length === 0 ? (
                                <span className='text-center mt-4'>No Active Requests.</span>
                            ) : (
                                recentRequests.map((request, index) => (
                                    <div className='grid justify-center items-center border-b-4 border-neutral-500 py-5' key={index}>
                                        <div className='flex gap-5 pt-5'>
                                            <div className='grid justify-items-center gap-2 ntext'>
                                                <span>Request Date</span>
                                                <span>From</span> {/* Added "From" field */}
                                                <span>Subject</span>
                                                <span>Description</span>
                                                <span>Status</span>
                                            </div>
                                            <div className='grid justify-items-center gap-2 ntext'>
                                                <span>:</span>
                                                <span>:</span>
                                                <span>:</span>
                                                <span>:</span>
                                                <span>:</span>
                                            </div>
                                            <div className='grid justify-items-start gap-2'>
                                                <span className='text ntext1'>{request.date}</span>
                                                <span className='text ntext1'>{request.from || localStorage.getItem('from')}</span> {/* Fetching "From" field */}
                                                <span className='text ntext1'>{request.subject}</span>
                                                <span className='text ntext1'>{request.description}</span>
                                                <span className={`text-center font-semibold text-xl lobster ${request.status === 'Pending' ? 'text-blue-500' : request.status === 'Review' ? 'text-amber-800' : ''}`}>{request.status}</span>
                                            </div>
                                        </div>
                                        <div className='mt-8 flex justify-center items-center gap-10'>
                                            <div className='bg-green-600 text-white text-lg font-semibold rounded-md hover:ring-2 ring-green-800 py-1 px-3 cursor-pointer' onClick={() => handleApprove(index)}>
                                                Approve
                                            </div>
                                            <div className='bg-red-600 text-white text-lg font-semibold rounded-md hover:ring-2 ring-red-800 py-1 px-3 cursor-pointer' onClick={() => handleDeny(index)}>
                                                Deny
                                            </div>
                                            <div className='bg-gray-600 text-white text-lg font-semibold rounded-md hover:ring-2 ring-black py-1 px-3 cursor-pointer' onClick={() => handleReview(index)}>
                                                Review
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <span className='text-blue-700 text-center mt-10 text-3xl anton-sc'>Closed Requests</span>
                        
                        <div className='box p-6 my-4 grid justify-items-start max-w-5xl'>
                            {pastRequests.map((request, index) => (
                                <div className='flex gap-5 pt-8 pb-9 border-b-4' key={index}>
                                    <div className='grid justify-items-center ntext gap-2'>
                                        <span>Request Date</span>
                                        <span>From</span> {/* Added "From" field */}
                                        <span>Subject</span>
                                        <span>Description</span>
                                        <span>Status</span>
                                    </div>
                                    <div className='grid justify-items-center ntext gap-2'>
                                        <span>:</span>
                                        <span>:</span>
                                        <span>:</span>
                                        <span>:</span>
                                        <span>:</span>
                                    </div>
                                    <div className='grid justify-items-start gap-2'>
                                        <span className='text ntext1'>{request.date}</span>
                                        <span className='text ntext1'>{request.from || localStorage.getItem('from')}</span> {/* Fetching "From" field */}
                                        <span className='text ntext1'>{request.subject}</span>
                                        <span className='text ntext1'>{request.description}</span>
                                        <span className={`text-center font-semibold text-xl lobster ${request.status === 'Resolved' ? 'text-green-500' : 'text-red-500'}`}>{request.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default L_Maint;
