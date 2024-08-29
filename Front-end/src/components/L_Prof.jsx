import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './img/favicon2.png';
import pic1 from './img/lender1.jpg';
import edit from './img/edit.png'
import sec from './img/security.png'
import pd from './img/pd.png';
import id from './img/id.png';
import per from './img/per.png';
import pref from './img/pref.png';
import sup from './img/support.png';
import fb from './img/feedback.png';
import log from './img/log-out.png';


const L_Prof = () => {

    return (
        <div>
            <div className='back'>
                <div className='top py-2'>
                    <div className='logo flex justify-start items-center lg:p-4'>
                        <img className='h-8 w-10 mx-2' src={logo} alt="" />
                        <span className='name font-bold text-xl'>Arty-Home</span>
                    </div>
                    <span style={{ color: '#a27a47' }} className='lease zain'>PROFILE</span>
                </div>

                <div className='ml-52 px-40 pt-32 justify-center flex flex-wrap items-center '>

                    <div className='w-full h-56 my-8 mx-10 px-5 py-5 box flex justify-around items-center'>

                        <div className='w-40 '>
                            <img className='rounded-full ' src={pic1} alt="" />
                        </div>
                        <div className='ntext1 text grid gap-2'>
                            Lender
                            <span className='text ntext1 text-5xl'>
                                Mr. Ashish Mehta
                            </span>
                            <span className='my-4'>
                                Current Rentals : Ashok Nagar & Sun Colony  
                            </span>
                        </div>
                        <div className='flex justify-center items-center gap-5 cursor-pointer'>
                            <img src={edit} alt="" />

                        </div>

                    </div>
                </div>
                <div className='ml-52 mb-10 flex flex-wrap justify-center items-center'>

                    <div className='w-1/3 h-20 my-8 mx-10 px-5 py-10 box flex justify-evenly items-center'>

                        <div className='flex justify-center items-center gap-5 cursor-pointer'>
                            <img src={sec} alt="" />
                        </div>
                        <div className='text text-lg'>
                            Password and Security
                        </div>

                    </div>
                    <div className='w-1/3 h-20 my-8 mx-10 px-5 py-10 box flex justify-evenly items-center'>

                        <div className='flex justify-center items-center gap-5 cursor-pointer'>
                            <img src={pd} alt="" />
                        </div>
                        <div className='text text-lg'>
                            Personal Details
                        </div>

                    </div>

                    <div className='w-1/3 h-20 my-8 mx-10 px-5 py-10 box flex justify-evenly items-center'>

                        <div className='flex justify-center items-center gap-5 cursor-pointer'>
                            <img src={id} alt="" />
                        </div>
                        <div className='text text-lg'>
                            ID Verification
                        </div>

                    </div>
                    <div className='w-1/3 h-20 my-8 mx-10 px-5 py-10 box flex justify-evenly items-center'>

                        <div className='flex justify-center items-center gap-5 cursor-pointer'>
                            <img src={per} alt="" />
                        </div>
                        <div className='text text-lg'>
                            Permissions
                        </div>

                    </div>
                    <div className='w-1/3 h-20 my-8 mx-10 px-5 py-10 box flex justify-evenly items-center'>


                        <div className='flex justify-center items-center gap-5 cursor-pointer'>
                            <img src={pref} alt="" />
                        </div>
                        <div className='text text-lg'>
                            Preferences
                        </div>

                    </div>
                    <div className='w-1/3 h-20 my-8 mx-10 px-5 py-10 box flex justify-evenly items-center'>


                        <div className='flex justify-center items-center gap-5 cursor-pointer'>
                            <img src={sup} alt="" />
                        </div>
                        <div className='text text-lg'>
                            Support
                        </div>

                    </div>
                    <div className='w-1/3 h-20 my-8 mx-10 px-5 py-10 box flex justify-evenly items-center'>


                        <div className='flex justify-center items-center gap-5 cursor-pointer'>
                            <img src={fb} alt="" />
                        </div>
                        <div className='text text-lg'>
                            Feedback
                        </div>

                    </div>
                    
                    <div className='w-1/3 h-20 my-8 mx-10 px-5 py-10 box flex justify-evenly items-center'>

                   
                        <div  className='flex justify-center items-center gap-5 cursor-pointer'>
                            <img src={log} alt="" />
                        </div>
                        <NavLink to={'/'}>
                        <div className='text text-lg'>
                            Log-Out
                        </div>
                        </NavLink>
                    </div>
                    
                       

                    

                </div>




            </div>
        </div>
    );
}

export default L_Prof;
