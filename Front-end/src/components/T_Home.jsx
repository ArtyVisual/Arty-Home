import React from 'react'
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import logo from './img/favicon2.png';
import mini from './img/minimize.png'
import dash from './img/dashboard.png'
import apartment from './img/apartment.png'
import maint from './img/settings.png'
import finance from './img/finance.png'
import chat from './img/chat.png'
import doc from './img/file.png'
import profile from './img/profile.png'
import tboy from './img/Tmen.png'


const T_Home = () => {

    const location = useLocation();
    const user = location.state?.user;

    useEffect(() => {
        if (user && user.name) {
            localStorage.setItem('userName', user.name);
        }
    }, [user]);

    
    const storedUserName = localStorage.getItem('userName');

    return (
        <div className='overflow-x-hidden'>
            
            <div className='board grid justify-center  justify-items-start gap-1 bg-blue-700 px-8 py-8 text-white '>
                
                <div className='grid justify-items-center items-center w-40 gap-0'>
                    <img className='pb-2' src={tboy} alt="" />
                    <span className='zain -mb-1 text-3xl text-center'>WELCOME</span>
                    <span className='lobster text-yellow-500 text-4xl' >{storedUserName ? storedUserName : 'Guest'}</span>
                </div>

                <NavLink to={'/T_Dash'} activeClassName="active">
                    <div className='flex justify-between mt-10 gap-3 items-center hover:text-blue-300'>
                        <img className='pl-0.5' src={dash} alt=""/>
                        <span className='font-bold text-center w-32'>Dashboard</span>
                    </div>
                </NavLink>

                <NavLink to={'/T_Lease'} activeClassName="active">
                    <div className='flex justify-between pt-4 gap-2 items-center hover:text-blue-300'>
                        <img src={apartment} alt="" />
                        <span className='font-bold text-center w-32'>Lease</span>
                    </div>
                </NavLink>

                <NavLink to={'/T_Maint'} activeClassName="active">
                    <div className='flex  justify-between pt-4 gap-2 items-center hover:text-blue-300'>
                        <img src={maint} alt="" />
                        <span className='font-bold text-center w-32'>Maintenance</span>
                    </div>
                </NavLink>

                <NavLink to={'/T_Finance'} activeClassName="active">
                    <div className='flex justify-between pt-4 gap-2 items-center hover:text-blue-300'>
                        <img className='' src={finance} alt="" />
                        <span className='font-bold text-center w-32'>Finance</span>
                    </div>
                </NavLink>

                <NavLink to={'/T_Com'} activeClassName="active">
                    <div className='flex justify-between pt-4 gap-2 items-center hover:text-blue-300'>
                        <img src={chat} alt="" />
                        <span className='font-bold text-center w-32 text-sm'>Communication</span>
                    </div>
                </NavLink>
                
                <NavLink to={'/T_Doc'} activeClassName="active">
                    <div className='flex justify-between pt-4 gap-2 items-center hover:text-blue-300'>
                        <img src={doc} alt="" />
                        <span className='font-bold text-center w-32'>Documents</span>
                    </div>
                </NavLink>
                
                <NavLink to={'/T_Prof'} activeClassName="active">
                    <div className='flex justify-between pt-4 gap-2 items-center hover:text-blue-300'>
                        <img src={profile} alt="" />
                        <span className='font-bold text-center w-32'>Profile</span>
                    </div>
                </NavLink>
        
            </div>

        </div>

    )
}

export default T_Home