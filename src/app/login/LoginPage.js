import React, { useState } from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState('')

  const HandleOnSubmit = () => {
    console.log(`welcome ${email}`)
  }

  return (
    <div className='lg:h-[120vh] w-full  bg-login-backCover flex justify-center items-center '>
        <div className='lg:w-[400px] sm:w-full md:w-[400px] w-full h-[725px] bg-white rounded-sm shadow-lg px-8'>
          <div className='py-4 text-[#0052CC] text-[34px] text-center font-bold tracking-wider'>SmartLead</div>
          <div className='py-4'>
            <p className='text-center mb-4 font-semibold'>Sign up to continue</p>
            <form action="submit">
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='w-full py-2 mb-4 px-2 focus:outline-[#0065ff] border border-slate-400 rounded-sm'  placeholder='Enter Your Email'/>
              <p className='text-slate-800 mb-4 text-sm'>By signing up, I accept the SmartLead Terms of Service and acknowledge the Privacy Policy.</p>
              <button type="submit" onClick={() => HandleOnSubmit()} className='w-full font-semibold text-white bg-[#0052CC] mb-4 py-2 rounded-sm hover:bg-[#0065ff]'>Sign up</button>
            </form>
            <div className='border-b border-gray-400 py-4 space-y-4'>
              <p className='text-center'>or with :</p>
              <button className='w-full py-2 font-semibold   border border-slate-700'>Google</button>
              <button className='w-full py-2 font-semibold border border-slate-700'>Microsoft</button>
              <button className='w-full py-2 font-semibold border border-slate-700'>Apple</button>
              <button className='w-full py-2 font-semibold border border-slate-700'>Slack</button>
              <p className='text-center'>already have an account ? <span className='text-[#0052CC] cursor-pointer'>Log in</span></p>
            </div>
          </div>
          <div className='space-y-2'>
            <p className="text-[#42526e] text-xs text-center">
            One account for Jira, Confluence, Trello and more.
            </p>
            <p className="text-[#42526e] text-xs text-center">
            This page is  protected by reCAPTCHA and the Google <span className='text-[#0052cc] cursor-pointer'>Privacy Policy and Terms of Service</span> apply
            </p>
          </div>
        </div>
    </div>
  )
}

export default LoginPage