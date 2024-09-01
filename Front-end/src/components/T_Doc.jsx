import React, { useState, useEffect } from 'react';
import logo from './img/favicon2.png';
import down from './img/down.png';
import search from './img/search.png';
import share from './img/share.png';
import dots from './img/dots.png';

const T_Doc = () => {
    const [documents, setDocuments] = useState([
        { id: 1, name: 'Lease Agreement 2023-2024' },
        { id: 2, name: 'Service Report 2024' },
        { id: 3, name: 'Billing Statement 2024' },
        { id: 4, name: 'HOA Certificate 2024' }
    ]);

    return (
        <div>
            <div className='back'>
                <div style={{ color: '#a27a47' }} className='top1 md:hidden left-1/2 -ml-11 top-5 text-3xl zain'>
                    DOCUMENTS
                </div>
                <div className='hidden md:flex top py-2'>
                    <div className='logo flex justify-start items-center lg:p-4'>
                        <img className='h-8 w-10 mx-2' src={logo} alt="" />
                        <span className='name font-bold text-xl'>Arty-Home</span>
                    </div>
                    <span style={{ color: '#a27a47' }} className='maint zain'>DOCUMENTS</span>
                </div>

                <div className='md:ml-52 md:px-40 pt-32 justify-center flex flex-wrap items-center'>
                    {documents.map((doc) => (
                        <div key={doc.id} className='md:w-full w-72 md:h-20 h-fit my-8 md:mx-10 mx-4 px-2 md:py-10 py-2 box flex md:justify-evenly justify-between items-center'>
                            <div className='hidden md:flex'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/wzwygmng.json"
                                    trigger="loop"
                                    delay="1500"
                                    stroke="bold"
                                    colors="primary:#3080e8,secondary:#a66037"
                                    style={{ width: '50px', height: '50px' }}>
                                </lord-icon>
                            </div>
                            <div className='md:hidden flex'>
                                <lord-icon
                                    src="https://cdn.lordicon.com/wzwygmng.json"
                                    trigger="loop"
                                    delay="1500"
                                    stroke="bold"
                                    colors="primary:#3080e8,secondary:#a66037"
                                    style={{ width: '35px', height: '50px' }}>
                                </lord-icon>
                            </div>
                            <div className='text ntext1 md:text-md text-sm'>
                                {doc.name}
                            </div>
                            <div className='hidden md:flex justify-center items-center gap-5 cursor-pointer'>
                                <img src={search} alt="" />
                                <img src={down} alt="" />
                                <img src={share} alt="" />
                            </div>
                            <div className='md:hidden flex'>
                                <img src={dots} alt="" />
                            </div>
                           
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default T_Doc;
