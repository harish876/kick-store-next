import Head from 'next/head'
import react from 'react'
import Layout from '@/layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css';
import { HiAtSymbol,HiFingerPrint,HiUser } from 'react-icons/hi'
import { useState } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { notification } from 'antd';
import { successSignupNotification } from '@/components/utils/data';

export default function Register(){

	const [show,setShow] = useState({password:false,cpassword:false})
    const router = useRouter()
    const [api, contextHolder] = notification.useNotification();
    const openNotificationV1 = (type,response) => {api[type](response)};

    const handleSubmit = async(values)=>{
        const options={
            method:"POST",
            headers:{"Content-Type":"application/json "},
            body: JSON.stringify(values)
        }
        const url = process.NODE_ENV === 'production'?'https://kick-store-next-harish876.vercel.app/api/auth/signup': 'http://localhost:3000/api/auth/signup'
        const response = await fetch(url,options)
        if(response){
            openNotificationV1("success",successSignupNotification)
            router.push('/')
        }
    }
    const validateValues = (values) =>{
        const errors={}
        const {username,email,password,cpassword} = values
        if(!username){
            errors.username="Empty username"
        }
        if(!email){
            errors.email = "Enter email"
        }
        else if((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))){ 
            errors.email= "Invalid Email address"
        }
        if(!password){
            errors.password = "Enter Password"
        }
        else if(password==='' || password.length<=6){
            errors.password = 'Not a strong password'
        }
        if(password !== cpassword){
            errors.cpassword ="Passwords do not match"
        }
        return errors
    }
    const formik = useFormik({
        initialValues:{
            username:'',
            email:'',
            password:'',
            cpassword:''
        },
        validate:validateValues,
        onSubmit:handleSubmit
    })
    return(
    	<Layout>
			<Head>
				<title>Register</title>
			</Head>
            {contextHolder}
			<section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <article className='text-gray-800 text-4xl font-bold py-4'>Kick Store</article>
                <p className='w-3/4 mx-auto text-gray-400'>Sign Up</p>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit} method='POST'>
			<div className={styles.input_group}>
                    <input 
                    type="text"
                    name='username'
                    placeholder='Username'
                    className={styles.input_text}
                    {...formik.getFieldProps("username")}
                    />
                    <span className='icon flex items-center px-4'>
                        <HiUser size={25}/>
                    </span>
                </div>
                {formik.errors.username && formik.touched.username?<span className='w-3/4 flex justify-center mx-auto text-rose-600'>{formik.errors.username}</span>:<span></span>}
                <div className={styles.input_group}>
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    className={styles.input_text}
                    {...formik.getFieldProps("email")}
                    />
                    <span className='icon flex items-center px-4'>
                        <HiAtSymbol size={25}/>
                    </span>
                </div>
                {formik.errors.email && formik.touched.email?<span className='w-3/4 flex justify-center mx-auto text-rose-600'>{formik.errors.email}</span>:<span></span>}
                <div className={styles.input_group}>
                    <input 
                    type={`${show.password?"text":"password"}`}
                    name='password'
                    placeholder='Password'
                    className={styles.input_text}
                    {...formik.getFieldProps("password")}
                    />
                    <span className='icon flex items-center px-4' onClick={()=>setShow({...show,password:!show.password})}>
                        <HiFingerPrint size={25}/>
                    </span>
                </div>
                {formik.errors.password && formik.touched.password?<span className='w-3/4 flex justify-center mx-auto text-rose-600'>{formik.errors.password}</span>:<span></span>}
				<div className={styles.input_group}>
                    <input 
                    type={`${show.cpassword?"text":"password"}`}
                    name='cpassword'
                    placeholder='Confirm Password'
                    className={styles.input_text}
                    {...formik.getFieldProps("cpassword")}
                    />
                    <span className='icon flex items-center px-4' onClick={()=>setShow({...show,cpassword:!show.cpassword})}>
                        <HiFingerPrint size={25}/>
                    </span>
                </div>
                {formik.errors.cpassword && formik.touched.cpassword?<span className='w-3/4 flex justify-center mx-auto text-rose-600'>{formik.errors.cpassword}</span>:<span></span>}
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