import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css';
import Image from 'next/image'
import { HiAtSymbol,HiFingerPrint } from 'react-icons/hi'
import { useState } from 'react';
import { signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { notification } from 'antd';
import { successLoginNotification,failureLoginNotification } from '@/components/utils/data';


export default function Login(){
    const [show,setShow] = useState(false)
    const router = useRouter()
    const [api, contextHolder] = notification.useNotification();
    const url = process.env.NODE_ENV === 'production'?'https://kick-store-next-harish876.vercel.app':'http://localhost:3000'
    const openNotificationV1 = (type,response) => {api[type](response);};

    const handleGoogleSignIn = async() =>{ 
        signIn('google',{callbackUrl:url}) 
        openNotificationV1("success",successLoginNotification)
    }
    const handleGitHubSignIn = async() =>{
        signIn('github',{callbackUrl:url})
        openNotificationV1("success",successLoginNotification)
    }
    const handleSubmit = async(values)=>{
        const status = await signIn('credentials',{
            redirect:false,
            email:values.email,
            password:values.password,
            callbackUrl:"/" 
        })
        if(status.ok)
        {
            router.push(status.url)
            openNotificationV1("success",successLoginNotification)
        }
        else{
            openNotificationV1("error",failureLoginNotification)
        }
    }
    const validateValues = (values) =>{
        const errors={}
        const {email,password} = values
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
        return errors
    }

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate:validateValues,
        onSubmit:handleSubmit
    })
    return (
        <Layout>
        <Head>
            <title>Login</title>
        </Head>
        {contextHolder}
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <article className='text-gray-800 text-4xl font-bold py-4'>Kick Store</article>
                <p className='w-3/4 mx-auto text-gray-400'>Login</p>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}   >
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
                    type={`${show?"text":"password"}`}
                    name='password'
                    placeholder='Password'
                    className={styles.input_text}
                    {...formik.getFieldProps("password")}
                    />
                    <span className='icon flex items-center px-4' onClick={()=>setShow(!show)}>
                        <HiFingerPrint size={25}/>
                    </span>
                </div>
                
                {formik.errors.password && formik.touched.password?<span className='w-3/4 flex justify-center mx-auto text-rose-600'>{formik.errors.password}</span>:<span></span>}
                {/* login buttons */}
                <div className="input-button">
                    <button type='submit' className={styles.button}>
                        Login
                    </button>
                </div>
                <div className="input-button">
                    <button type='button' onClick={handleGoogleSignIn}className={styles.button_custom}>
                        Sign In with Google <Image src={'/assets/google.svg'} width="20" height={20} ></Image>
                    </button>
                </div>
                <div className="input-button">
                    <button type='button' onClick={handleGitHubSignIn} className={styles.button_custom}>
                        Sign In with Github <Image src={'/assets/github.svg'} width={25} height={25}></Image>
                    </button>
                </div>
            </form>

            {/* bottom */}
            <p className='text-center text-gray-400 '>
                don't have an account yet? <Link legacyBehavior href={'/register'}><a className='text-blue-700'>Sign Up</a></Link>
            </p>
        </section>

        </Layout>
    )
}