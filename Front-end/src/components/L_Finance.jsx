import React, { useState, useEffect } from 'react';
import logo from './img/favicon2.png';

const L_Finance = () => {
    // Dummy data for credit (cr) and debit (dr) amounts
    const crData = [
        { date: '20-08-2024', name: 'Utility Bill',from:'Ashok Nagar', amount: 400 },
        { date: '17-08-2024', name: 'Maintenance', from:'Ashok Nagar', amount: 500 },
        { date: '17-08-2024', name: 'Late Fees',   from:'Ashok Nagar', amount: 500 },
        { date: '14-08-2024', name: 'Rent',        from:'Ashok Nagar', amount: 30000 },
        { date: '02-08-2024', name: 'Utility Bill',from:'Sun Colony', amount: 400 },
        { date: '01-08-2024', name: 'Maintenance', from:'Sun Colony', amount: 500 },
        { date: '01-08-2024', name: 'Rent',        from:'Sun Colony', amount: 20000 },
        { date: '20-07-2024', name: 'Parking Fine',from:'Sun Colony', amount: 1000 },
        { date: '12-07-2024', name: 'Maintenance', from:'Ashok Nagar', amount: 500 },
        { date: '10-07-2024', name: 'Rent',        from:'Ashok Nagar', amount: 30000 },
        { date: '06-07-2024', name: 'Maintenance', from:'Sun Colony', amount: 500 },
        { date: '05-07-2024', name: 'Late Fees',   from:'Sun Colony', amount: 500 },
        { date: '05-07-2024', name: 'Rent',        from:'Sun Colony', amount: 20000 },
       


        
    ];

    const drData = [
        { date: '21-08-2024', name: 'Utility',         to: 'Ashok Nagar', amount: 500 },
        { date: '15-08-2024', name: 'Plumber',         to: 'Ashok Nagar', amount: 700 },
        { date: '10-08-2024', name: 'Maintenance',     to: 'Ashok Nagar', amount: 500 },
        { date: '02-08-2024', name: 'Utility',    to: 'Sun Colony', amount: 400 },
        { date: '01-08-2024', name: 'Maintenance',     to: 'Sun Colony', amount: 500 },
        { date: '01-08-2024', name: 'Property Tax',    to: 'Ashok Nagar', amount: 1800 },
        { date: '01-08-2024', name: 'Broker',          to: 'Sudarshan A.', amount: 2500 },
        { date: '23-07-2024', name: 'Electrician',     to: 'Sun Colony',  amount: 1000 },
        { date: '19-07-2024', name: 'Parking Fine',    to: 'Sun Colony',  amount: 1000 },
        { date: '10-07-2024', name: 'Maintenance',     to: 'Ashok Nagar', amount: 500 },
        { date: '08-07-2024', name: 'Mechanic',        to: 'Nasir A.', amount: 1000 },
        { date: '05-07-2024', name: 'Electricity',     to: 'Nasir A.', amount: 400 },
        

    ];

    return (
        <div>
            <div className='back'>
                <div className='top py-2'>
                    <div className='logo flex justify-start items-center lg:p-4'>
                        <img className='h-8 w-10 mx-2' src={logo} alt="" />
                        <span className='name font-bold text-xl'>Arty-Home</span>
                    </div>
                    <span style={{ color: '#a27a47' }} className='fince zain'>FINANCE</span>
                </div>

                <div className='fin2 ml-52 fin pt-24 justify-center flex flex-wrap items-center gap-20 '>

                    <div className='grid justify-items-center'>

                        <span className='text-blue-700 text-center mt-10 text-3xl anton-sc'>Income</span>     

                        <div className='cr my-5 px-4 box grid justify-items-center'>
                            <table>
                                <thead className='sticky z-10'>
                                    <tr>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>From</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody className='-z-10'>
                                    {crData.map((cr, index) => (
                                        <tr key={index}>
                                            <td>{cr.date}</td>
                                            <td>{cr.name}</td>
                                            <td>{cr.from}</td>
                                            <td className='cramt'>{cr.amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                    
                    <div className='grid justify-items-center'>
                        
                        <span className='text-blue-700 text-center mt-10 text-3xl anton-sc'>Expense</span>

                        <div className='dr my-5 box px-4 grid justify-items-center'>
                            <table>
                                <thead className='sticky' >
                                    <tr>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>To</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {drData.map((dr, index) => (
                                        <tr key={index}>
                                            <td>{dr.date}</td>
                                            <td>{dr.name}</td>
                                            <td>{dr.to}</td>
                                            <td className='dramt'>{dr.amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                         
                    </div>

                </div>
            </div>
        </div>
    );
}

export default L_Finance;
