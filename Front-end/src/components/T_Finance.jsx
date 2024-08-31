import React, { useState, useEffect } from 'react';
import logo from './img/favicon2.png';

const T_Finance = () => {


   

    return (
        <div>
            <div className='back'>
                <div style={{ color: '#a27a47' }} className='top1 md:hidden left-1/2 -ml-10 top-5 text-3xl zain'>
                     FINANCE
                </div> 
                <div className='hidden md:flex top py-2'>
                    <div className='logo flex justify-start items-center lg:p-4'>
                        <img className='h-8 w-10 mx-2' src={logo} alt="" />
                        <span className='name font-bold text-xl'>Arty-Home</span>
                    </div>
                    <span style={{ color: '#a27a47' }} className='fince zain'>FINANCE</span>
                </div>

                <div className='fin1 md:ml-52 fin pt-32 justify-center flex flex-wrap items-center '>

                    <div className='md:w-2/6 h-56 my-8 mx-10 px-6 py-10 box flex justify-between items-center'>

                        <div className='vertical md:text-3xl text-xl  font-bold text-blue-700'>
                            AUGUST
                        </div>
                        <div>
                            <table>
                                <tr className='text'>
                                    <th>NAME</th>
                                    <th>AMOUNT</th>
                                    <th>STATUS</th>
                                </tr>
                                <tr>
                                    <td>Rent</td>
                                    <td>30000</td>
                                    <td>
                                        <div className='text-center text-green-500 font-semibold md:text-lg px-2 lobster'>Paid</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Maintenance</td>
                                    <td>500</td>
                                    <td>
                                        <div className='text-center text-green-500 font-semibold md:text-lg px-2 lobster'>Paid</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Electricity Bill</td>
                                    <td>2000</td>
                                    <td>
                                        <div className='text-center text-red-500 font-semibold md:text-lg px-2 lobster'>Due</div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className='md:w-2/6 h-56 my-8 mx-10 px-5 py-10 box flex justify-between items-center'>

                        <div className='vertical md:text-3xl text-xl  font-bold text-blue-700'>
                            JULY
                        </div>
                        <div>
                            <table>
                                <tr className='text'>
                                    <th>NAME</th>
                                    <th>AMOUNT</th>
                                    <th>STATUS</th>
                                </tr>
                                <tr>
                                    <td>Rent</td>
                                    <td>30000</td>
                                    <td>
                                        <div className='text-center text-green-500 font-semibold md:text-lg px-2 lobster'>Paid</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Maintenance</td>
                                    <td>500</td>
                                    <td>
                                        <div className='text-center text-green-500 font-semibold md:text-lg px-2 lobster'>Paid</div>
                                    </td>
                                </tr>
                                <tr className=''>
                                    <td>Electricity Bill</td>
                                    <td>2000</td>
                                    <td>
                                        <div className='text-center text-green-500 font-semibold md:text-lg px-2 lobster'>Paid</div>
                                    </td>
                                </tr>
                                <tr className=''>
                                    <td>Internet BIll</td>
                                    <td>799</td>
                                    <td>
                                        <div className='text-center text-green-500 font-semibold text-lg px-2 lobster'>Paid</div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className='md:w-2/6 h-56 my-8 mx-10 px-5 py-10 box flex justify-between items-center'>

                        <div className='vertical md:text-3xl text-xl font-bold text-blue-700'>
                            JUNE
                        </div>
                        <div>
                            <table>
                                <tr className='text'>
                                    <th>NAME</th>
                                    <th>AMOUNT</th>
                                    <th>STATUS</th>
                                </tr>
                                <tr>
                                    <td>Rent</td>
                                    <td>30000</td>
                                    <td>
                                        <div className='text-center text-green-500 font-semibold md:text-lg px-2 lobster'>Paid</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Maintenance</td>
                                    <td>500</td>
                                    <td>
                                        <div className='text-center text-green-500 font-semibold md:text-lg px-2 lobster'>Paid</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Electricity Bill</td>
                                    <td>1420</td>
                                    <td>
                                        <div className='text-center text-green-500 font-semibold md:text-lg px-2 lobster'>Paid</div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className='md:w-2/6 h-56 my-8 mx-10 px-5 py-10 box flex justify-between items-center'>

                        <div className='vertical md:text-3xl text-xl  font-bold text-blue-700'>
                            MAY
                        </div>
                        <div>
                            <table>
                                <tr className='text'>
                                    <th>NAME</th>
                                    <th>AMOUNT</th>
                                    <th>STATUS</th>
                                </tr>
                                <tr>
                                    <td>Rent</td>
                                    <td>30000</td>
                                    <td>
                                        <div className='text-center text-green-500 font-semibold md:text-lg px-2 lobster'>Paid</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Maintenance</td>
                                    <td>500</td>
                                    <td>
                                        <div className='text-center text-green-500 font-semibold md:text-lg px-2 lobster'>Paid</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Electricity Bill</td>
                                    <td>1800</td>
                                    <td>
                                        <div className='text-center text-green-500 font-semibold md:text-lg px-2 lobster'>Paid</div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    
                    <div className='md:w-2/6 h-56 my-8 mx-10 px-5 py-10 box flex justify-between items-center'>

                        <div className='vertical md:text-3xl text-xl  font-bold text-blue-700'>
                            APRIL
                        </div>
                        <div>
                            <table>
                                <tr className='text'>
                                    <th>NAME</th>
                                    <th>AMOUNT</th>
                                    <th>STATUS</th>
                                </tr>
                                <tr>
                                    <td>Rent</td>
                                    <td>30000</td>
                                    <td>
                                        <div className='text-center text-green-500 font-semibold md:text-lg px-2 lobster'>Paid</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Maintenance</td>
                                    <td>500</td>
                                    <td>
                                        <div className='text-center text-green-500 font-semibold md:text-lg px-2 lobster'>Paid</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Electricity Bill</td>
                                    <td>2200</td>
                                    <td>
                                        <div className='text-center text-green-500 font-semibold md:text-lg px-2 lobster'>Paid</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Internet BIll</td>
                                    <td>799</td>
                                    <td>
                                        <div className='text-center text-green-500 font-semibold md:text-lg px-2 lobster'>Paid</div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className='md:w-2/6 h-56 my-8 mx-10 px-5 py-10 box flex justify-between items-center'>

                        <div className='vertical md:text-3xl text-xlmd:  font-bold text-blue-700'>
                            MARCH
                        </div>
                        <div>
                            <table>
                                <tr className='text'>
                                    <th>NAME</th>
                                    <th>AMOUNT</th>
                                    <th>STATUS</th>
                                </tr>
                                <tr>
                                    <td>Rent</td>
                                    <td>30000</td>
                                    <td>
                                        <div className='text-center text-green-500 font-semibold md:text-lg px-2 lobster'>Paid</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Maintenance</td>
                                    <td>500</td>
                                    <td>
                                        <div className='text-center text-green-500 font-semibold md:text-lg px-2 lobster'>Paid</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Electricity Bill</td>
                                    <td>1000</td>
                                    <td>
                                        <div className='text-center text-green-500 font-semibold md:text-lg px-2 lobster'>Paid</div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
   
                </div>
                
            </div>
        </div>
    );
}

export default T_Finance;
