import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const FormLogin = () => {

    const { register, reset, handleSubmit } = useForm()
    const navigate = useNavigate()

    const submit = data => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
        axios.post(URL, data)
            .then(res => {
                localStorage.setItem('token',res.data.data.token)
                navigate('/')
            })
            .catch(err => console.log(err))
        reset({
            email: '',
            password: ''
        })
    }

  return (
    <form onSubmit={handleSubmit(submit)} className='login__form'>
        <h2 className='login__title'>Welcome! Enter your email and password to continue</h2>

        <div className='login__div-email'>
            <label className='login__label' htmlFor="email">Email</label><br />
            <input {...register('email')} className='login__input' type="email" id='email' placeholder='Your email...' />
        </div>
        <div className='login__div-password'>
            <label className='login__label' htmlFor="password">Password</label><br />
            <input {...register('password')} className='login__input' type="password" id='password'placeholder='Your password...' />
        </div>
        <button className='login__btn'>Login</button>
    </form>
  )
}

export default FormLogin