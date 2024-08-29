import React, { useState, useEffect } from 'react';
import logo from './img/favicon2.png';

const L_Com = () => {
    const [broadcasts, setBroadcasts] = useState([]);
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');

    // Load broadcasts from localStorage when component mounts
    useEffect(() => {
        const savedBroadcasts = localStorage.getItem('broadcasts');
        if (savedBroadcasts) {
            setBroadcasts(JSON.parse(savedBroadcasts));
        }
        // Set the current date
        const today = new Date().toISOString().split('T')[0];
        setDate(today);
    }, []);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const newBroadcast = {
            date: date,
            from: from, 
            subject: subject,
            to: to,
            message: message
        };

        const updatedBroadcasts = [newBroadcast, ...broadcasts];
        setBroadcasts(updatedBroadcasts);

        // Save to localStorage
        localStorage.setItem('broadcasts', JSON.stringify(updatedBroadcasts));

        // Clear form fields
        setSubject('');
        setMessage('');
        setFrom('');
        setTo('');
    };

    return (
        <div>
            <div className='back'>
                <div className='top py-2'>
                    <div className='logo flex justify-start items-center lg:p-4'>
                        <img className='h-8 w-10 mx-2' src={logo} alt="" />
                        <span className='name font-bold text-xl'>Arty-Home</span>
                    </div>
                    <span style={{ color: '#a27a47' }} className='comm zain'>COMMUNICATION</span>
                </div>

                <div className='ml-52 px-40 pt-28 gap-20 justify-center items-baseline flex'>

                    <div className='box my-10 grid justify-items-center'>
                        <span className='text-blue-700 text-center my-5 text-3xl anton-sc'>Broadcast</span>

                        {/* Displaying saved broadcasts */}
                        {broadcasts.map((broadcast, index) => (
                            <div key={index} className='combox h-fit mx-10 px-5 gap-10 py-8  grid justify-items-center items-center border-t-4'>
                                <div className='flex gap-10 mt-4'>
                                    <div className='flex gap-2'>
                                        <div className='grid justify-items-center px-5 gap-2 text-md'>
                                            <span className='ntext'>Date :</span>
                                            <span className='ntext'>From :</span>
                                        </div>
                                        <div className='grid justify-items-center gap-2 text-md'>
                                            <span className='ntext1 text'>{broadcast.date}</span>
                                            <span className='ntext1 text'>{broadcast.from}</span>
                                        </div>
                                    </div>

                                    <div className='flex gap-2'>
                                        <div className='grid justify-items-center px-5 gap-2 text-md'>
                                            <span className='ntext'>Subject :</span>
                                            <span className='ntext'>To :</span>
                                        </div>
                                        <div className='grid justify-items-center gap-2 text-md'>
                                            <span className='ntext1 text'>{broadcast.subject}</span>
                                            <span className='ntext1 text'>{broadcast.to}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span>Message :</span>
                                    <div className='max-w-xl italic pt-2 text ntext1'>{broadcast.message}</div>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className='mt-0 grid justify-items-center mb-10'>
                        <div className='pb-5 text-3xl text-blue-700 anton-sc'>Compose New</div>
                        <form onSubmit={handleSubmit}>
                            <div className='form form1 px-10 py-4 grid justify-items-center'>
                                <div>
                                    <span>Enter Subject</span>
                                    <input
                                        required
                                        minLength={10}
                                        className='text-xl placeholder:text-yellow-950'
                                        type="text"
                                        placeholder='Subject Here'
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <span>Enter Message</span>
                                    <textarea
                                        required
                                        minLength={30}
                                        className='text-xl placeholder:text-yellow-950'
                                        placeholder='Message Here'
                                        rows={2}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <span>Message From :</span>
                                    <select
                                        required
                                        className='text-xl placeholder:text-yellow-950 px-10'
                                        value={from}
                                        onChange={(e) => setFrom(e.target.value)}
                                    >
                                        <option value="" disabled>Select From</option>
                                        <option value='Secretary'>Secretary</option>
                                        <option value='Owner'>Owner</option>
                                        <option value='Neighbours'>Neighbours</option>
                                    </select>
                                </div>
                                <div>
                                    <span>Send To :</span>
                                    <select
                                        required
                                        className='text-xl placeholder:text-yellow-950 px-10'
                                        value={to}
                                        onChange={(e) => setTo(e.target.value)}
                                    >
                                        <option value="" disabled>Select To</option>
                                        <option value='Ashok Nagar'>Ashok Nagar</option>
                                        <option value='Sun Colony'>Sun Colony</option>
                                    </select>
                                </div>
                                <div>
                                    <span>Attach Image (optional)</span>
                                    <input type="file" />
                                </div>
                                <div>
                                    <span>Attach Video (optional)</span>
                                    <input type="file" />
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

export default L_Com;
