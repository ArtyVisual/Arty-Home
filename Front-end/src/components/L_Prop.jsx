import React, { useState, useRef,useEffect } from 'react';
import logo from './img/favicon2.png';
import house1 from './img/house.jpg';
import house2 from './img/house2.jpg';
import house3 from './img/house3.jpeg';
import house4 from './img/house4.jpg';
import axios from 'axios'

const L_Prop = () => {

    const [vacantProperties, setVacantProperties] = useState([]);
    const [address, setAddress] = useState()
    const [size, setSize] = useState()
    const [rent, setRent] = useState()
    const [today, setToday] = useState('');
    const [image, setImage] = useState(null);
    const [isFormVisible, setFormVisible] = useState(false);

    const newRegRef = useRef(null);

    useEffect(() => {
    
      const currentDate = new Date().toISOString().split('T')[0];
      setToday(currentDate); // 
    }, []);


  

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
        

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://arty-home-api.vercel.app/P_Reg', { address, size, rent ,image})
            .then(result => {
                console.log(result);
                window.location.reload();
                
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
     axios.get('https://arty-home-api.vercel.app/P_Fetch')
     .then(response=>{
        setVacantProperties(response.data);
     })
     .catch(err => console.log(err));
    }, [])
    
    const FormVisible = () => {
        setFormVisible(!isFormVisible);
        setTimeout(() => {
            newRegRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 200);
    };

    return (
        <div>
            <div className='back'>
                <div className='top py-2'>
                    <div className='logo flex justify-start items-center lg:p-4'>
                        <img className='h-8 w-10 mx-2' src={logo} alt="" />
                        <span className='name font-bold text-xl'>Arty-Home</span>
                    </div>
                    <span style={{ color: '#a27a47' }} className='doc zain '>PROPERTY</span>
                </div>
                <div className='ml-32 grid justify-items-center items-center justify-center'>
                    <div className='first pl-16 my-10 grid justify-items-center py-4'>
                        <div className='p-4 mt-3 mb-4 text-4xl text-blue-700 anton-sc'>
                            Current Rentals
                        </div>

                        <div className='grid  gap-10'>

                            <div className='box flex justify-center items-center gap-5 p-8'>
                                <div>
                                    <img className='w-52 h-32 ring-1 ring-yellow-950 rounded-md' src={house1} alt="" />
                                </div>
                                <div className='p-4 flex gap-8 justify-center'>
                                    <div className='grid justify-center ntext font-bold justify-items-center items-center'>
                                        <span>Address</span>
                                        <span>Tenant Name</span>
                                        <span>Agreement Date</span>
                                        <span>Rent</span>
                                    </div>
                                    <div className='grid justify-start ntext justify-items-start items-center'>
                                        <span>:</span>
                                        <span>:</span>
                                        <span>:</span>
                                        <span>:</span>
                                    </div>
                                    <div className='grid text ntext1 justify-start justify-items-start items-center'>
                                        <span>Ashok Nagar, T3, Indore 30094</span>
                                        <span>Mr. Abbas Vajwana</span>
                                        <span>30/9/23</span>
                                        <span>30000</span>
                                    </div>
                                </div>
                            </div>
                            <div className='box flex justify-center items-center gap-5 p-8'>
                                <div>
                                    <img className='w-52 h-32 ring-1 ring-yellow-950 rounded-md' src={house2} alt="" />
                                </div>
                                <div className='p-4 flex gap-8 justify-center'>
                                    <div className='grid justify-center ntext font-bold justify-items-center items-center'>
                                        <span>Address</span>
                                        <span>Tenant Name</span>
                                        <span>Agreement Date</span>
                                        <span>Rent</span>
                                    </div>
                                    <div className='grid justify-start ntext justify-items-start items-center'>
                                        <span>:</span>
                                        <span>:</span>
                                        <span>:</span>
                                        <span>:</span>
                                    </div>
                                    <div className='grid text ntext1 justify-start justify-items-start items-center'>
                                        <span>Sun Colony, F2, Indore 3012</span>
                                        <span>Mr. Ashish Soni</span>
                                        <span>12/11/23</span>
                                        <span>20000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ml-56 grid justify-items-center'>

                    <span className='text-blue-700 text-center mt-10 mb-8 text-4xl anton-sc'>Vacant Properties</span>


                    <div className='flex justify-center flex-wrap gap-10'>

                    {vacantProperties.map((property, index) => (
                    <div key={index} className='w-80 box px-4 pt-4 mb-10 grid justify-items-center'>
                        <img className='w-full h-40' src={property.image} alt="Property" /> {/* Use dynamic image handling if needed */}
                        <div className='flex p-4'>
                        <div className='grid justify-items-center'>
                            <span>Address :</span>
                            <span>Size   :</span>
                            <span>Rent   :</span>
                        </div>
                        <div className='grid px-2'>
                            <span>{property.address}</span>
                            <span>{property.size}</span>
                            <span>{property.rent}</span>
                        </div>
                        </div>
                    </div>
                    ))}
                        
                        <div onClick={FormVisible} className='w-80 box px-4 pt-4 mb-10  grid justify-items-center'>

                            <div className='font-bold text-xl pt-5 text-yellow-950'>
                                REGISTER NEW PROPERTY
                            </div>
                            <span className='cursor-pointer' >
                                <lord-icon
                                    src="https://cdn.lordicon.com/zrkkrrpl.json"
                                    trigger="loop"
                                    delay="4000"
                                    stroke="bold"
                                    state="hover-swirl"
                                    colors="primary:#794628,secondary:#a66037"
                                    style={{ width: '150px', height: '200px' }}
                                >
                                </lord-icon>
                            </span>
                        </div>
                    </div>

                </div>
                {isFormVisible && (
                <div ref={newRegRef} className='ml-56 my-24 px-24 grid justify-items-center mb-10'>
                
                    <div className='pb-8 text-4xl text-blue-700 anton-sc'>Property Registration</div>
                    <form  >
                        <div className='form form1 grid justify-items-center px-10  '>

                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 justify-center pt-16'>
                                <div>
                                    <span>Enter Proper Address</span>
                                    <input
                                        required
                                        minLength={10}
                                        className='text-xl placeholder:text-gray-500'
                                        type="text"
                                        placeholder='Type Here'
                                        name='address'
                                        onChange={(e)=>setAddress(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <span>Property Type :</span>
                                    <select
                                        required
                                        placeholder='Select'
                                        className='text-xl  placeholder:text-yellow-950 px-0 '
                                    >
                                        <option value="" disabled>Select From</option>
                                        <option value='Apartment'>Apartment</option>
                                        <option value='House'>House</option>
                                        <option value='Commercial Space'>Commercial Space</option>
                                    </select>
                                </div>
                                <div>
                                    <span>Size :</span>
                                    <select
                                        required
                                        className='text-xl placeholder:text-yellow-950'
                                        name='size'
                                        onChange={(e)=>setSize(e.target.value)}
                                    >
                                        <option value="" disabled>Select From</option>
                                        <option value='1BHK'>1BHK</option>
                                        <option value='2BHK'>2BHK</option>
                                        <option value='3BHK'>3BHK</option>
                                        <option value='4BHK'>4BHK</option>
                                        <option value='4BHK'>5BHK</option>
                                    </select>
                                </div>
                                <div>
                                    <span>Furnishing Status :</span>
                                    <select
                                        required
                                        className='text-xl placeholder:text-yellow-950'
                                    >
                                        <option value="" disabled>Select From</option>
                                        <option value='Furnished'>Furnished</option>
                                        <option value='Semi-Furnished'>Semi-Furnished</option>
                                        <option value='Unfurnished'>Unfurnished</option>

                                    </select>
                                </div>
                                <div>
                                    <span>Year of Construction :</span>
                                    <input
                                        required
                                        max={today}
                                        name='date'
                                        minLength={10}
                                        className='text-xl placeholder:text-gray-500'
                                        type="date"
                                        placeholder='Type Here'
                                    />
                                </div>
                                <div>
                                    <span>Mobile Number :</span>
                                    <input
                                        required
                                        minLength={10}
                                        maxLength={10}
                                        className='text-xl placeholder:text-gray-500'
                                        type="number"
                                        placeholder='Type Here'
                                    />
                                </div>
                                <div>
                                    <span>Rent (Monthly) :</span>
                                    <input
                                        required
                                        minLength={10}
                                        maxLength={10}
                                        className='text-xl placeholder:text-gray-500'
                                        type="number"
                                        placeholder='Type Here'
                                        name='rent'
                                        onChange={(e)=>setRent (e.target.value)}
                                    />
                                </div>
                                <div>
                                    <span>Property Description:</span>
                                    <textarea
                                        maxLength={100}
                                        className='text-xl placeholder:text-gray-500 placeholder:text-sm'
                                        type="text"
                                        placeholder='Write short description about your property'
                                        rows={1}
                                    />
                                </div>

                                <div>
                                    <span>Attach Property Registration Documents <br /></span>
                                    <br />
                                    <input type="file" multiple accept=".pdf" />
                                </div>
                                <div>
                                    <span>Attach Lease Agreement Template <br /></span>
                                    <br />
                                    <input type="file" multiple accept=".pdf" />
                                </div>
                                <div>
                                    <span>Attach Images of Property <br /></span>
                                    <span>Max-Size (100kb)</span>
                                    
                                    <input onChange={handleImageChange} type="file" multiple />
                                </div>
                                <div>
                                    <span>Attach Video (optional) </span>
                                    <br />
                                    <input type="file" />
                                </div>

                            </div>

                            <button onClick={handleSubmit} type='submit' className='bg-white px-4 py-4 my-10 text-amber-950 hover:ring-2 ring-amber-950 font-extrabold rounded-lg'>
                                SUBMIT REQUEST
                            </button>

                    
                        </div>
                    </form>
                
                </div>
                )}

            </div>

        </div>
    )
}

export default L_Prop;
