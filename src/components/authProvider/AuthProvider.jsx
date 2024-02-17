import { Typography } from '@material-tailwind/react'
import React from 'react'
import OAuth from '../OAuth'

const AuthProvider = () => {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="h4" color="blue-gray" className="my-8">
        Ouvrir un nouveau compte
      </Typography>
      <div className="flex flex-col items-center gap-8">
        <OAuth provider={"google"} />
        <OAuth provider={"facebook"} />
      </div>
    </div>
  )
}

export default AuthProvider
