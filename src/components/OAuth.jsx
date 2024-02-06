import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import googleIcon from '../assets/svg/googleIcon.svg'

const OAuth = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const onGoogleClick = async () => {
    }

  return (
    <div className='socialLogin'>
      <p>Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with</p>
      <button className='socialIconDiv'>
        <img className='socialIconImg' src={googleIcon} alt="google" onClick={onGoogleClick} />
      </button>
    </div>
  )
}

export default OAuth
