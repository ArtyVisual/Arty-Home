import React, { useRef, useState, useEffect } from 'react';
import logo from './img/favicon2.png';
import down from './img/down.png';
import search from './img/search.png';
import share from './img/share.png';
import house1 from './img/house.jpg';
import house2 from './img/house2.jpg';
import house3 from './img/house3.jpeg';
import house4 from './img/house4.jpg';

const L_Doc = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isBoxOpen, setIsBoxOpen] = useState(false); // State for managing box open/close effect
    const docref = useRef(null);
    
    // Data object with documents for each category
    const documentsData = {
        'Ashok Nagar': [
            'Lease Agreement 23-24',
            'Service Report 2024',
            'Billing Statement 2024',
            'Notice Report 2024'
        ],
        'Sun Colony': [
            'Maintenance Report 2024',
            'Expense Report 2024'
        ],
        'Sudarshan A.': [
            'Water Supply Report 2024',
            'Security Updates 2024'
        ],
        'Nasir A.': [
            'Electrical Issues Report 2024',
            'Annual Statement 2024'
        ]
    };

    // Function to fetch documents based on the selected category
    const handleCategoryClick = (category) => {
        setSelectedCategory(category); // Set the selected category
        setIsBoxOpen(true); // Open the box when a category is selected
    };

    // Scroll to document section
    const doc = () => {
        setTimeout(() => {
            docref.current.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

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

                <div className='ml-52 px-28 pt-32 grid justify-items-center items-center'>
                    <div className='font-serif text-3xl font-bold py-5'>
                        Select a Category of Documents
                    </div>

                    <div onClick={doc} className='justify-center flex items-center'>
                        {/* Category boxes */}
                        <div onClick={() => handleCategoryClick('Ashok Nagar')} className='box w-1/4 my-5 p-5 mx-5 cursor-pointer'>
                            <img className='w-full h-32' src={house1} alt="" />
                            <div className='pt-5 text-3xl text-blue-700 anton-sc'>Ashok Nagar</div>
                        </div>

                        <div onClick={() => handleCategoryClick('Sun Colony')} className='box w-1/4 my-5 p-5 mx-5 cursor-pointer'>
                            <img className='w-full h-32' src={house2} alt="" />
                            <div className='pt-5 text-3xl text-blue-700 anton-sc'>Sun Colony</div>
                        </div>

                        <div onClick={() => handleCategoryClick('Sudarshan A.')} className='box w-1/4 my-5 p-5 mx-5 cursor-pointer'>
                            <img className='w-full h-32' src={house3} alt="" />
                            <div className='pt-5 text-3xl text-blue-700 anton-sc'>Sudarshan A.</div>
                        </div>

                        <div onClick={() => handleCategoryClick('Nasir A.')} className='box w-1/4 my-5 p-5 mx-5 cursor-pointer'>
                            <img className='w-full h-32' src={house4} alt="" />
                            <div className='pt-5 text-3xl text-blue-700 anton-sc'>Nasir A.</div>
                        </div>
                    </div>

                    {/* Documents section with sliding effect */}
                    <div ref={docref} className={`box w-full my-24 flex flex-wrap justify-center transition-all duration-500 ease-in-out ${isBoxOpen ? 'max-h-screen opacity-100' : 'max-h-44 opacity-90'}`}>
                        <div className='w-full text-center py-4 text-amber-950 zain text-3xl'>Documents :</div>
                        
                        {/* Render documents based on selected category */}
                        {selectedCategory && documentsData[selectedCategory].map((doc, index) => (
                            <div key={index} className='w-full h-20 mx-0 px-1 ml-20 py-10 flex justify-center items-center gap-2 border-b-4'>
                                <div>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/wzwygmng.json"
                                        trigger="loop"
                                        delay="1500"
                                        stroke="bold"
                                        colors="primary:#3080e8,secondary:#a66037"
                                        style={{ width: '45px', height: '50px' }}>
                                    </lord-icon>
                                </div>
                                <div className='text ntext2 mx-10'>{doc}</div>
                                <div className='flex justify-center items-center gap-5 cursor-pointer'>
                                    <img src={search} alt="" />
                                    <img src={down} alt="" />    
                                    <img src={share} alt="" />  
                                </div>
                            </div>
                        ))}

                        {/* Show message if no category is selected */}
                        {!selectedCategory && (
                            <div className=' w-full text-center py-4 text-amber-950 text-xl'>
                                Please select a category to view documents.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default L_Doc;
