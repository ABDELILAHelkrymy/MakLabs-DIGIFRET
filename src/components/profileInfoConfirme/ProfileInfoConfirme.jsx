import React, { useState } from 'react'
import { Button, Input, Typography } from '@material-tailwind/react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editAuthData } from '../../services/app/user/userSlice'

const ProfileInfoConfirme = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { EditedAuthData } = useSelector((state) => state.user);
    const [fromData, setFormData] = useState({
        fullname: "",
        phone: "",
        email: "",
      });
      const { fullname, phone, email } = fromData;

      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      };

      const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(editAuthData({
          ...EditedAuthData,
          fullname,
          phone,
          email,
        }));
        navigate("/sign-up/step3");
      };
    return (
        <>
            <Typography variant="h4" color="blue-gray">
                Veuillez confirmer votre profil
            </Typography>

            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={onSubmit}>
                <div className="mb-1 flex flex-col gap-6">
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                    >
                        Nom complet
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="Nom complet"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        name="fullname"
                        value={fullname}
                        onChange={(e) => onChange(e)}
                        required
                    />
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                    >
                        Téléphone
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="XXXXXXXXXX"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        name="phone"
                        value={phone}
                        onChange={(e) => onChange(e)}
                        required
                    />
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="-mb-3"
                    >
                        Adresse e-mail
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <Button type="submit" className="mt-6" fullWidth>
                    Continuer
                </Button>
            </form>
        </>
  )
}

export default ProfileInfoConfirme
