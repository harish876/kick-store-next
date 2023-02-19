import Head from 'next/head'
import react from 'react'
import Layout from '@/layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css';
import Image from 'next/image'
import { HiAtSymbol,HiFingerPrint,HiUser } from 'react-icons/hi'
import { useState } from 'react';

export default function Register(){

	const [show,setShow] = useState({password:false,cpassword:false})
    return(
    	<Layout>
			<Head>
				<title>Register</title>
			</Head>
			
			<section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <article className='text-gray-800 text-4xl font-bold py-4'>Kick Store</article>
                <p className='w-3/4 mx-auto text-gray-400'>Sign Up</p>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5'>
			<div className={styles.input_group}>
                    <input 
                    type="text"
                    name='Username'
                    placeholder='Username'
                    className={styles.input_text}
                    />
                    <span className='icon flex items-center px-4'>
                        <HiUser size={25}/>
                    </span>
                </div>
                <div className={styles.input_group}>
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    className={styles.input_text}
                    />
                    <span className='icon flex items-center px-4'>
                        <HiAtSymbol size={25}/>
                    </span>
                </div>
                <div className={styles.input_group}>
                    <input 
                    type={`${show.password?"text":"password"}`}
                    name='password'
                    placeholder='Password'
                    className={styles.input_text}
                    />
                    <span className='icon flex items-center px-4' onClick={()=>setShow({...show,password:!show.password})}>
                        <HiFingerPrint size={25}/>
                    </span>
                </div>
				<div className={styles.input_group}>
                    <input 
                    type={`${show.cpassword?"text":"password"}`}
                    name='cpassword'
                    placeholder='Confirm Password'
                    className={styles.input_text}
                    />
                    <span className='icon flex items-center px-4' onClick={()=>setShow({...show,cpassword:!show.cpassword})}>
                        <HiFingerPrint size={25}/>
                    </span>
                </div>

                {/* login buttons */}
                <div className="input-button">
                    <button type='submit' className={styles.button}>
                        Signup
                    </button>
                </div>
            </form>

            {/* bottom */}
            <p className='text-center text-gray-400 '>
                have an account? <Link legacyBehavior href={'/login'}><a className='text-blue-700'>Login</a></Link>
            </p>
        </section>
    	</Layout>
    )   
}