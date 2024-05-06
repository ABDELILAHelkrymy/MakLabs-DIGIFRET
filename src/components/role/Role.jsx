import { useState } from "react";
import {
  Button,
  Option,
  Select,
  Typography,
  Radio,
  Card,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { editAuthData } from "../../services/app/auth/authSlice";

const Role = () => {
  const dispatch = useDispatch();
  const { EditedAuthData } = useSelector((state) => state.auth);
  const [isError, setIsError] = useState(false);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const onchange = (e) => {
    setRole(e);
    setIsError(false);
    console.log(e);
  };

  const navigate = useNavigate();

  const sendData = () => {
    if (role !== "") {
      dispatch(
        editAuthData({
          ...EditedAuthData,
          role: role,
        })
      );
      setLoading(true);
      navigate("/private-policy");
    } else {
      setIsError(true);
    }
  };
  return (
    <>
      <Typography variant="h4" color="blue-gray">
        Quel est votre rôle?
      </Typography>
      <div className="flex flex-col gap-4 mt-5">
        <Card className="">
          <ul
            className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHelperRadioButton"
          >
            <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="helper-radio-5"
                    name="helper-radio"
                    type="radio"
                    value="transporter"
                    onChange={(e) => onchange(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    for="helper-radio-5"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    <div>Transporteur</div>
                  </label>
                </div>
              </div>
            </li>
            <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="helper-radio-6"
                    name="helper-radio"
                    type="radio"
                    value="driver"
                    onChange={(e) => onchange(e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                <div className="ms-2 text-sm">
                  <label
                    for="helper-radio-6"
                    className="font-medium text-gray-900 dark:text-gray-300"
                  >
                    <div>Chauffeur</div>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        </Card>
        {/* <Select
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
        </Select> */}
      </div>
      {isError && (
        <Typography color="red">Veuillez sélectionner votre rôle</Typography>
      )}

      <Button className="mt-40 w-80" onClick={sendData} loading={loading}>
        Continuer
      </Button>
    </>
  );
};

export default Role;

