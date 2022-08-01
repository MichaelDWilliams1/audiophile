import React, {useContext, useState} from  'react'
import { Link } from  'react-router-dom'
import { SiteDataContext } from '../../context/useSiteData'

const SignIn = ({modalPopUp}) => {
    const [hasAccount, setHasAccount] = useState(true)
    const [newUser, setNewUser] = useState(
        {
            email: '',
            password: '',
            matchPassword: ''
        }
    )
        const [returningUser, setReturningUser] = useState(
            {
                email: '',
                password: ''
            }
        )

        const onChange = (event) => {
            setNewUser(prev => ({
                ...prev,
                [event.target.id]: event.target.value
            }))
        }

    const toggleSignIn = () => {
        setHasAccount(prev => !prev)
    }

    return(
        <>
        <section style={{display: !hasAccount && 'none'}} className='absolute ht-screen w-screen flex  bg-zinc-900/90'>
                <div id='closeModal' onClick={(e)=>modalPopUp(e)} className='h-screen w-screen flex justify-end items-center'>
                    <div className=' h-2/5 w-1/5 flex justify-center items-center m-auto rounded-lg bg-white'>
                        <div className='signinContentContainer flex flex-col justify-evenly '>
                            <div className='text-zinc-800'>Login:</div>
                            <div className='flex flex-col items-center'>
                            <div className='text-2xl font-bold text-zinc-800  w-3/4'>EMAIL</div>
                            <input className='w-3/4 border-2 border-black rounded-lg pl-2' 
                             placeholder='user@gmail.com'

                            />
                            </div>
                            <div className='flex flex-col items-center'>
                            <div className='text-2xl font-bold text-zinc-800  w-3/4'>PASSWORD</div>
                            <input className='w-3/4 border-2 border-black rounded-lg pl-2'
                             placeholder='Password123'
                            />
                            </div>
                            <button className='bg-orange-500 w-3/4 h-1/6 rounded-lg ml-auto mr-auto hover:bg-orange-300'>SUBMIT</button>
                            <div>
                                <p className='text-zinc-800'>Dont have an account?</p>
                                <p  className='text-zinc-800'>Create one <span onClick={toggleSignIn} className='underline text-orange-500'>here</span></p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <section style={{display: hasAccount && 'none'}} className='absolute ht-screen w-screen flex  bg-zinc-900/90'>
                <div id='closeModal' onClick={(e)=>modalPopUp(e)} className='h-screen w-screen flex justify-end items-center'>
                    <div className=' h-1/2 w-1/5 flex justify-center items-center m-auto rounded-lg bg-white'>
                        <div className='signinContentContainer flex flex-col justify-evenly'>
                            <div className='text-zinc-800 '>Sign up:</div>
                            <div className='flex flex-col items-center'>
                            <div className='text-1xl font-bold text-zinc-800 w-3/4'>EMAIL</div>
                            <input className='w-3/4 text-zinc-800 border-2 border-black rounded-lg pl-2' 
                            id='email'
                            placeholder='user@gmail.com'
                            type='text'
                            value={newUser.email}
                            onChange={onChange}
                            />
                            </div>
                            <div className='flex flex-col items-center'>
                            <div className='text-1xl font-bold text-zinc-800  w-3/4'>PASSWORD</div>
                            <input className='w-3/4 border-2 text-zinc-800 border-black rounded-lg pl-2'
                             id='password'
                            placeholder='Password123'
                            type='text'
                            value={newUser.password}
                            onChange={onChange}
                            />
                            </div>
                            <div className='flex flex-col items-center'>
                            <div className='text-1xl font-bold text-zinc-800  w-3/4'>VERIFY PASSWORD</div>
                            <input className='w-3/4 border-2 border-black text-zinc-800 rounded-lg pl-2'
                            id='matchPassword'
                            placeholder='Password123'
                            type='text'
                            value={newUser.password}
                            onChange={onChange}
                            />
                            </div>
                            <button className='bg-orange-500 w-3/4 h-1/6 rounded-lg ml-auto mr-auto hover:bg-orange-300'>SUBMIT</button>
                            <div>
                                <p className='text-zinc-800'>Already have an account?</p>
                                <p  className='text-zinc-800'><span onClick={toggleSignIn} className='underline text-orange-500'>Sign in</span></p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        </>
    )
}

export default SignIn