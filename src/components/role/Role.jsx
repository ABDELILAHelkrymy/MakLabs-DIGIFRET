import {useState} from 'react'
import { Button, Option, Select, Typography } from '@material-tailwind/react'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { editAuthData } from '../../services/app/user/userSlice';



const Role = () => {
  const dispatch = useDispatch();
  const { EditedAuthData } = useSelector((state) => state.user);
  const [isError, setIsError] = useState(false)
  const [role, setRole] = useState("");

  const onchange = (e) => {
    setRole(e);
    setIsError(false)
  };

  const navigate = useNavigate();

  const sendData = () => {
    if (role!=="") {
      dispatch(editAuthData({
        ...EditedAuthData,
        role: role,
      }));
      navigate("/private-policy");
    }else{
      setIsError(true)
    }
  }
  return (
    <>
      <Typography variant="h4" color="blue-gray">
        Quel est votre rôle?
      </Typography>
      <div className="flex w-1/2 flex-col gap-4 mt-5">
        <Select
          size="lg"
          placeholder="Sélectionner votre role"
          className="w-full !border-t-blue-gray-900 focus:!border-t-gray-900"
          variant="standard"
          label="selectionner votre role"
          multiple={false}
          onChange={(e) => onchange(e)}
        >
          <Option value="transporter">Transporteur</Option>
          <Option value="driver">Chauffeur</Option>
        </Select>
      </div>
      {isError && <Typography color="red">Veuillez sélectionner votre rôle</Typography>}

      <Button className="mt-40 w-80" onClick={sendData}>
        Continuer
      </Button>
    </>
  )
}

export default Role
