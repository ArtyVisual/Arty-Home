import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import x from './components/img/x-mark.png'
import { NavLink } from 'react-router-dom';
import home from './components/img/home.png';
import { useForm } from 'react-hook-form';

const L_login = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const [email, setEmail] = useState()
    const [loading, setLoading] = useState(false);
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
        setEmail('');
        setPassword('');
        setErrorMessage('');
    };

    const delay = (d) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, d * 1000);
        });
    };

    const onSubmit = async (data) => {
        setLoading(true); // Show loading text
        await delay(1);

        axios.post('https://arty-home-api.vercel.app/L_login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data.status === "success") {
                    navigate('/L_Dash', { state: { user: result.data.user } });
                    resetForm();
                }
                else if (result.data === "incorrect") {
                    setErrorMessage('Incorrect password. Please try again !');
                }
                else if (result.data === "nouser") {
                    setErrorMessage('No user found with this email address !');
                }
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false); // Hide loading text after request completes
            });
    }

    return (
        <div className='main1'>

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

            <form onSubmit={handleSubmit(onSubmit)}  >


                <div className='flex items-start justify-center  h-screen '>

                    <div className='glass-effect w-5/6 md:w-1/4 md:h-3/4 h-3/4 grid m-10 rounded-3xl p-4 justify-center items-center' >

                        <span className='text-center italic font-bold text-xl my-4 md:text-3xl text-slate-900 '>
                            Log-In
                        </span>

                        <div className='m-1'>

                            <input type="email"
                                className='font-bold text-center -mb-10 border-white  p-2 bg-transparent border-b-4 placeholder:text-white text-blue-950'
                                placeholder='Email'
                                name='email'
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='m-1'>

                            <input type="password"
                                className='font-bold text-center -mt-10 border-white p-2 bg-transparent border-b-4 placeholder:text-white text-blue-950'
                                placeholder='Password'
                                name='password'
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='item-center justify-center flex ' >
                            <button
                                disabled={loading}
                                className=' text-center font-bold  py-2 px-24 hover:bg-transparent hover:ring-4 hover:ring-white bg-slate-900 rounded-md text-white '
                                type='Submit'
                            >
                                Login
                            </button>
                        </div>
                        {/* Display error message if it exists */}


                        <div className=' text-center mt-5  md:-mb-5 text-lg font-semibold text-white'>
                            If You Don't Have an Account
                        </div>
                        <div className='item-center -mt-5 justify-center flex  ' >
                            <Link to="/L_signup">
                                <button
                                    className='Btn text-center font-bold border-2 py-1 px-3 hover:bg-transparent bg-zinc-950 text-white  rounded-md  border-white'
                                    type='Button'>
                                    Register
                                </button>
                            </Link>
                        </div>

                    </div>

                </div>
                <div className={`justify-items-center items-center ${loading ? 'blur' : ''} `} >
                    {loading && 
                    /* From Uiverse.io by RafaM-dev */ 
                    <section class="loader">
                        <div>
                            <div>
                            <span class="one h6"></span>
                            <span class="two h3"></span>
                            </div>
                        </div>

                        <div>
                            <div>
                            <span class="one h1"></span>
                            </div>
                        </div>

                        <div>
                            <div>
                            <span class="two h2"></span>
                            </div>
                        </div>
                        <div>
                            <div>
                            <span class="one h4"></span>
                            </div>
                        </div>
                        </section>
                  }
                </div>

            </form>
        </div>
    )
}

export default L_login