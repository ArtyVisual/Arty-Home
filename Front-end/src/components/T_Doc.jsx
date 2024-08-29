import React, { useState, useEffect } from 'react';
import logo from './img/favicon2.png';
import down from './img/down.png';
import search from './img/search.png';
import share from './img/share.png';

const T_Doc = () => {


   

    return (
        <div>
            <div className='back'>
                <div className='top py-2'>
                    <div className='logo flex justify-start items-center lg:p-4'>
                        <img className='h-8 w-10 mx-2' src={logo} alt="" />
                        <span className='name font-bold text-xl'>Arty-Home</span>
                    </div>
                    <span style={{ color: '#a27a47' }} className='maint zain'>DOCUMENTS</span>
                </div>

                <div className='ml-52 px-40 pt-32 justify-center flex flex-wrap items-center '>

                    <div className='w-full h-20 my-8 mx-10 px-5 py-10 box flex justify-evenly items-center'>

                            <div>
                                <lord-icon
                                    src="https://cdn.lordicon.com/wzwygmng.json"
                                    trigger="loop"
                                    delay="1500"
                                    stroke="bold"
                                    colors="primary:#3080e8,secondary:#a66037"
                                    style={{ width: '50px', height: '50px' }}>
                                </lord-icon>
                            </div>
                            <div className='text ntext2'>
                                Lease Agreement 2023-2024
                            </div>
                            <div className='flex justify-center items-center gap-5 cursor-pointer'>
                                <img src={search} alt="" />
                                <img src={down} alt="" />   
                                <img src={share} alt="" />  
 
                            </div>
                            
                    </div>
                    <div className='w-full h-20 my-8 mx-10 px-5 py-10 box flex justify-evenly items-center'>

                            <div>
                                <lord-icon
                                    src="https://cdn.lordicon.com/wzwygmng.json"
                                    trigger="loop"
                                    delay="1500"
                                    stroke="bold"
                                    colors="primary:#3080e8,secondary:#a66037"
                                    style={{ width: '50px', height: '50px' }}>
                                </lord-icon>
                            </div>
                            <div className='text ntext2'>
                                Service Report 2024
                            </div>
                            <div className='flex justify-center items-center gap-5 cursor-pointer'>
                                <img src={search} alt="" />
                                <img src={down} alt="" />  
                                <img src={share} alt="" />  

                            </div>
                            
                    </div>
                    <div className='w-full h-20 my-8 mx-10 px-5 py-10 box flex justify-evenly items-center'>

                            <div>
                                <lord-icon
                                    src="https://cdn.lordicon.com/wzwygmng.json"
                                    trigger="loop"
                                    delay="1500"
                                    stroke="bold"
                                    colors="primary:#3080e8,secondary:#a66037"
                                    style={{ width: '50px', height: '50px' }}>
                                </lord-icon>
                            </div>
                            <div className='text ntext2'>
                                Billing Statement 2024
                            </div>
                            <div className='flex justify-center items-center gap-5 cursor-pointer'>
                                <img src={search} alt="" />
                                <img src={down} alt="" />  
                                <img src={share} alt="" />  
  
                            </div>
                            
                    </div>
                    <div className='w-full h-20 my-8 mx-10 px-5 py-10 box flex justify-evenly items-center'>

                            <div>
                                <lord-icon
                                    src="https://cdn.lordicon.com/wzwygmng.json"
                                    trigger="loop"
                                    delay="1500"
                                    stroke="bold"
                                    colors="primary:#3080e8,secondary:#a66037"
                                    style={{ width: '50px', height: '50px' }}>
                                </lord-icon>
                            </div>
                            <div className='text ntext2'>
                                HOA certificate 2024
                            </div>
                            <div className='flex justify-center items-center gap-5 cursor-pointer'>
                                <img src={search} alt="" />
                                <img src={down} alt="" />    
                                <img src={share} alt="" />  

                            </div>
                            
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
    );
}

export default T_Doc;
