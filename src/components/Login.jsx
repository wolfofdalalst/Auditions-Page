import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Login = () => {
    return (
        <div className='flex w-full h-fit min-h-screen bg-gray-900 justify-center items-center'>
          <div className='w-fit md:w-1/2 flex items-center justify-center lg:w-1/2'>
            <InputFields/>
          </div>  
          <div className='h-full w-0 md:w-1/2 order-2 flex justify-center items-center '>
            <DotLottieReact
            src="https://lottie.host/d81dfe3b-0b59-4926-a771-25c715afb0be/uGiWnARoEQ.lottie"
            loop
            autoplay
            />
        </div>
          
        </div>
      )
}


export default Login

const InputFields = () => {
    return (
      <div className='text-white bg-gray-300 px-10 py-5 rounded-3xl border-2 border-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100p-1'>
              <h1 className='text-5xl font-semibold'>Welcome</h1>
              <p className='font-medium text-lg text-gray-500 mt-4'>Please enter your details.</p>
              <div className='mt-8'>
                  <label className='text-lg font-medium'>Email</label>
                  <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your email'/>
              </div>
              <div className='mt-8'>
                  <label className='text-lg font-medium'>Password</label>
                  <input className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your password' type='password'/>
              </div>
              <div className='mt-8 flex justify-between items-center'>
                  <button className='font-medium text-base text-violet-500'>Forgot password</button>
              </div>
              <div className='mt-8 flex flex-col gap-y-4'>
                  <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Sign in</button>
                  <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all flex rounded-xl py-3 border-2 border-gray-100 items-center justify-center gap-2'>Sign in with Google</button>
              </div>
              <div className='mt-8 flex justify-center items-center'>
                  <p className='font-medium  text-sm md:text-base'>Don't have an account?</p>
                  <button className='text-violet-500 text-sm md:text-base font-medium ml-2'>Sign up</button>
              </div>
          </div>
    )
  }

  