import React, {useContext, useState} from  'react'
import { Link } from  'react-router-dom'
import { SiteDataContext } from '../../context/useSiteData'

const SignIn = ({modalPopUp}) => {
    const [hasAccount, setHasAccount] = useState(true)
    const [guest, setGuest] = useState({email: 'siteGuest@gmail.com', password: 'password123'})
    const [newUser, setNewUser] = useState(
        {
            name: '',
            email: '',
            password: '',
           
        }
    )
        const [returningUser, setReturningUser] = useState(
            {
                email: '',
                password: ''
            }
        )

        const { newUserRegistation, login } = useContext(SiteDataContext)

        const onChange = (event) => {
            setNewUser(prev => ({
                ...prev,
                [event.target.id]: event.target.value
            }))
            setReturningUser(prev => ({
                ...prev,
                [event.target.id]: event.target.value
            }))
        }

    const toggleSignIn = () => {
        setHasAccount(prev => !prev)
    }

    return(
        <>
        <section style={{display: !hasAccount && 'none'}} className='absolute ht-screen w-screen flex bg-zinc-900/90 border-2'>
                <div id='closeModal' onClick={(e)=>modalPopUp(e)} className='h-screen w-screen flex justify-end items-center'>
                    <div className='lg:h-auto w-11/12 md:w-96 md:h-1/2 flex justify-center items-center m-auto rounded-lg bg-white'>
                        <div className='signinContentContainer flex flex-col space-y-2 md:space-y-7 mb-4 mt-4'>
                            <div className='text-zinc-800'>Login:</div>
                            <div className='flex flex-col'>
                            <div className='text-2xl font-bold text-zinc-800  w-3/4'>EMAIL</div>
                            <input className='lg:w-full h-10 w-full border-2 border-black rounded-lg pl-2 text-zinc-700 focus:outline-none focus:border-orange-600' 
                             placeholder='user@gmail.com'
                             id='email'
                            type='text'
                            value={returningUser.email}
                            onChange={onChange}
                            />
                            </div>
                            <div className='flex flex-col'>
                            <div className='text-2xl font-bold text-zinc-800  w-3/4'>PASSWORD</div>
                            <input className='lg:w-full w-full h-10 border-2 border-black rounded-lg pl-2 text-zinc-700 focus:outline-none focus:border-orange-600'
                             placeholder='Password123'
                             id='password'
                             type='text'
                             value={returningUser.password}
                             onChange={onChange}
                            />
                            </div>
                            <button id='closeButton' onClick={(e)=> (modalPopUp(e), login(e, returningUser.email, returningUser.password))} className='bg-orange-500 lg:w-3/4 w-3/4 lg:h-14 h-12 rounded-lg ml-auto mr-auto hover:bg-orange-300'>SUBMIT</button>
                            <div className=' border-t-2 border-t-slate-400 mt-5'>
                                <p className='text-zinc-800 mt-5'>Dont have an account?</p>
                                <p  className='text-zinc-800 hover:cursor-pointer'>Create one <span onClick={toggleSignIn} className='underline text-orange-500'>here</span></p>
                                <hr className='mt-2'></hr>
                                <p id='closeButton' className='mt-2 text-zinc-800'>If you would like to demo the website without making a profile please click <span id='closeButton' onClick={(e)=>(modalPopUp(e), login(e, guest.email, guest.password ))} className='hover:cursor-pointer underline text-orange-500'>here</span></p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <section style={{display: hasAccount && 'none'}} className='absolute ht-screen w-screen flex bg-zinc-900/90'>
                <div id='closeModal' onClick={(e)=>modalPopUp(e)} className='h-screen w-full flex justify-end items-center'>
                    <div className='lg:h-auto w-11/12 md:w-96 md:h-1/2 flex justify-center items-center m-auto rounded-lg bg-white'>
                        <div className='signinContentContainer flex flex-col space-y-2 md:space-y-7 mb-4 mt-4'>
                            <div className='text-zinc-800 '>Sign up:</div>
                            <div className='flex flex-col'>
                            <div className='text-2xl font-bold text-zinc-800  w-3/4'>First Name</div>
                            <input className='lg:w-3/4 h-10 w-full border-2 border-black text-zinc-800 rounded-lg pl-2 focus:outline-none focus:border-orange-600'
                            id='name'
                            placeholder='John'
                            type='text'
                            value={newUser.name}
                            onChange={onChange}
                            />
                            </div>
                            <div className='flex flex-col'>
                            <div className='text-2xl font-bold text-zinc-800 w-3/4'>EMAIL</div>
                            <input className='lg:w-3/4 h-10 w-full text-zinc-800 border-2 border-black rounded-lg pl-2 focus:outline-none focus:border-orange-600' 
                            id='email'
                            placeholder='user@gmail.com'
                            type='text'
                            value={newUser.email}
                            onChange={onChange}
                            />
                            </div>
                            <div className='flex flex-col'>
                            <div className='text-2xl font-bold text-zinc-800  w-3/4'>PASSWORD</div>
                            <input className='lg:w-3/4 h-10 w-full border-2 text-zinc-800 border-black rounded-lg pl-2 focus:outline-none focus:border-orange-600'
                             id='password'
                            placeholder='Password123'
                            type='text'
                            value={newUser.password}
                            onChange={onChange}
                            />
                            </div>
                            <button id='closeButton' onClick={(e)=> (modalPopUp(e), newUserRegistation(e, newUser.name, newUser.email, newUser.password))}
                             className='bg-orange-500 lg:w-3/4 lg:h-14 w-3/4 h-12 rounded-lg ml-auto mr-auto hover:bg-orange-300'>
                                SUBMIT
                            </button>
                            <div className='border-t-2 border-t-zinc-400 mt-5'>
                                <p className='text-zinc-800 mt-5'>Already have an account?</p>
                                <p  className='text-zinc-800 hover:cursor-pointer'><span onClick={toggleSignIn} className='underline text-orange-500'>Sign in</span></p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        </>
    )
}

export default SignIn