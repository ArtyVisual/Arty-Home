import React from 'react'
import { NavLink } from 'react-router-dom'
import bg1 from './img/bg1.jpg';
import logo from './img/favicon2.png';
import lender from './img/nlender.png';
import tenant from './img/ntenant.png';



const Intro = () => {
  return (
    <div className='Intro'>
        <div className='flex justify-center items-center  ' >
            <img className='h-10 w-12 mx-2' src={logo} alt="" />
            <span className='name font-bold text-2xl'>Arty-Home</span>
        </div>
        <div className='welcome rounded-md font-bold text-white text-4xl text-center my-20 mx-96 bg-blue-400 py-6'>
            Welcome to Arty-Home 
        </div>
        <div className='flex justify-center items-center'  >
            <div className='mx-20 grid justify-center items-center'>
                <img  src={lender} alt="" />
                <NavLink to={"/L_login"}>
                <div className='bg-blue-200 selbg rounded-lg'>
                    <span className='sel anton-sc' >Lender</span>

                </div>
                </NavLink>
            </div>
            <div className='mx-20 grid justify-center items-center'>
                <img  src={tenant} alt="" />
                <NavLink to={"/T_login"}>
                    <div className='bg-blue-200 selbg rounded-lg'>
                        <span className='sel anton-sc' >Tenant</span>
                    </div>
                </NavLink>
            </div>
        </div>
        <div className='md:text-right text-center mt-24 text-white font-semibold mb-10'>
            Developed by @Artyvisual
        </div>
    </div>
  )
}

export default Intro