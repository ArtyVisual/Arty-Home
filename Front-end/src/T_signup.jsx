import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import x from './components/img/x-mark.png';
import { NavLink } from 'react-router-dom';
import home from './components/img/home.png';


const T_signup = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const hideError = () => {
        setErrorMessage('');
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setPassword('');
        setErrorMessage('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/T_Register', { name, email, password })
            .then(result => {
                console.log(result);
                if (result.data === 'same') {
                    setErrorMessage('This email is already in use!');
                } else {
                    resetForm();
                    navigate('/T_login');
                }
            })
            .catch(err => console.log(err));
    };
    
    return (
        <div className='main2'>
            {errorMessage && (
                <div className='flex justify-center items-center text-center my-1 p-1 bg-red-700'>
                    <div className=''>
                        <lord-icon
                            src="https://cdn.lordicon.com/akqsdstj.json"
                            trigger="loop"
                            delay="1500"
                            colors="primary:#ffffff,secondary:#92140c"
                        >
                        </lord-icon>
                    </div>
                    <div className='text-white font-semibold pb-1'>
                        {errorMessage}
                    </div>
                    <div>
                        <img className='absolute right-2 top-4 cursor-pointer' onClick={hideError} src={x} alt="" />
                    </div>
                </div>
            )}

            <div>
                <NavLink to='/'>
                    <img className='p-4' src={home} alt="" />
                </NavLink>
            </div>

            <form onSubmit={handleSubmit}>




                <div className='flex items-start justify-center  h-screen '>

                    <div className='glass-effect w-4/5 md:w-1/4 h-3/4 grid m-10 rounded-3xl  justify-center items-center ' >
                        <span className='text-center italic font-bold text-xl my-4 md:text-3xl text-black '>
                            Sign-Up
                        </span>

                        <div className='mx-5 my-2'>
                            <input type="text"
                                className='font-bold text-center -mb-10 border-white  md:p-2 bg-transparent border-b-4 placeholder:text-white text-blue-950'
                                placeholder='Name'
                                name='email'
                                autoComplete='off'
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='mx-5 my-2'>

                            <input type="email"
                                className='font-bold text-center -mb-10 border-white  md:p-2 bg-transparent border-b-4 placeholder:text-white text-blue-950'
                                placeholder='Email'
                                required
                                name='email'
                                autoComplete='off'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='mx-5 my-2'>

                            <input type="password"
                                className='font-bold text-center -mb-10 border-white  md:p-2 bg-transparent border-b-4 placeholder:text-white text-blue-950'
                                placeholder='Password'
                                required
                                name='password'
                                minLength={6}
                                autoComplete='off'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='item-center justify-center flex mt-4' >
                            <button

                                className=' text-center font-bold mt-4 py-2 md:px-20 hover:bg-transparent hover:ring-4 hover:ring-white bg-slate-900 rounded-md text-white '
                                type='Submit'
                            >
                                Register
                            </button>
                        </div>
                        <div className=' text-center mt-10 text-lg font-semibold text-black'>
                            If You Already Have an Account
                        </div>
                        <div className='item-center my-2 justify-center flex mt-3 r ' >
                            <Link to="/T_login">
                                <button
                                    className='Btn text-center font-bold border-2 py-1 px-3 hover:bg-transparent bg-zinc-950 text-white  rounded-md  border-white'
                                    type='Button'>
                                    login
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default T_signup