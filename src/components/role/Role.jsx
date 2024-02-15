import {useState} from 'react'
import { Button, Option, Select, Typography } from '@material-tailwind/react'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { editAuthData } from '../../services/app/user/userSlice';



const Role = () => {
  const dispatch = useDispatch();
  const { EditedAuthData } = useSelector((state) => state.user);
  const [role, setRole] = useState("");

  const onchange = (e) => {
    setRole(e);
  };

  const navigate = useNavigate();

  const sendData = () => {
    dispatch(editAuthData({
      ...EditedAuthData,
      role: role,
     }));
    navigate("/private-policy");
  }
  return (
    <>
      <Typography variant="h4" color="blue-gray">
        Quel est votre role?
      </Typography>
      <div className="flex w-1/2 flex-col gap-4 mt-5">
        <Select
          size="lg"
          placeholder="Selectionner votre role"
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

      <Button className="mt-40 w-80" onClick={sendData}>
        Continuer
      </Button>
    </>
  )
}

export default Role
