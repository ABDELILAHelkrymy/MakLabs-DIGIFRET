import React from 'react'
import { SidebarWithBurgerMenu } from '../sideBar/Sidbar'
import { Typography } from '@material-tailwind/react'
import { PhoneIcon } from '@heroicons/react/24/outline'

const Header = () => {
  return (
    <header className='flex flex-row justify-between items-center my-3 mx-4'>
        <SidebarWithBurgerMenu />
        <Typography color='gray' className='text-3xl'>
            DiGiFret
        </Typography>
        <PhoneIcon className='phoneIcon h-10 w-10' />
    </header>
  )
}

export default Header