import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMaintenance,
  maintenancesGetById,
  maintenancesUpdate,
} from "../../services/store/slices/maintenancesSlice";
import { maintenanceTypesGetAll } from "../../services/store/slices/maintenanceTypesSlice";
import { usersGetAll } from "../../services/store/slices/usersSlice";
import { Select, Option, Checkbox, Spinner } from "@material-tailwind/react";
import {
  ChevronLeftIcon,
  UserIcon,
  ArrowUpTrayIcon,
  ArrowDownTrayIcon,
  CalendarDaysIcon,
  MapIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Card, CardBody, Button, Input } from "@material-tailwind/react";
import CalendarElement from "../../components/CalendarElement";
import {
  attachmentsUpdate,
  attachmentsSearch,
  attachmentsCreate,
  clearAttachment,
} from "../../services/store/slices/attachmentsSlice";
import toast, { Toaster } from "react-hot-toast";

const TruckMaintenanceNew = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (state) => state.maintenances?.update
  );
  const attachmentCreate = useSelector((state) => state.attachments?.create);
  const getMaintenance = useSelector((state) => state.maintenances?.getById);
  const getAllUsers = useSelector((state) => state.users?.getAll);
  const getAllMaintenanceTypes = useSelector(
    (state) => state.maintenanceTypes?.getAll
  );
  const currentTruck = useSelector((state) => state.trucks?.getById);
  const [formData, setFormData] = useState({
    maintenanceTypesId: "",
    totalTTC: "",
    date: "",
    address: "",
    responsible: "",
    documents: "",
    truckId: currentTruck?.data?.truck?._id,
  });

  useEffect(() => {
    // Set form data with maintenance details if present
    if (getMaintenance?.data?.maintenance) {
      setFormData(getMaintenance?.data?.maintenance);
    }
  }, [getMaintenance]);
  const attachments = useSelector((state) => state.attachments?.search);

  useEffect(() => {
    // Fetch the maintenance data when the component loads
    dispatch(maintenancesGetById(id));
  }, [dispatch, id]);

  useEffect(() => {
    // Fetch all users and maintenance types only once when the component mounts
    dispatch(usersGetAll());
    dispatch(maintenanceTypesGetAll());
    dispatch(clearMaintenance());
  }, [dispatch]);

  useEffect(() => {
    // Fetch attachments related to the maintenance
    const query = [
      {
        field: "entity",
        value: id,
      },
    ];
    dispatch(attachmentsSearch(query));
  }, [dispatch, id]);

  useEffect(() => {
    // Set attachments data if present
    if (attachments?.data?.attachments) {
      setFormData({
        ...formData,
        documents: attachments?.data?.attachments,
      });
    }
  }, [attachments, formData]);

  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [uploaded, setUploaded] = useState(false); // Add uploaded state

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setUploaded(false); // Reset uploaded state to ensure new uploads trigger
  };

  useEffect(() => {
    if (attachments?.data?.attachments) {
      setName(attachments?.data?.attachments["0"].name);
    }
  }, [attachments]);

  const handleUpload = async (id, name) => {
    if (!file) return;
    const formData = new FormData();
    formData.append("entity", id);
    formData.append("entityName", "trucks");
    formData.append("name", name);
    formData.append("type", "truck-logo");
    formData.append("file", file);
    if (attachments?.data?.attachments) {
      dispatch(
        attachmentsUpdate({
          id: attachments?.data?.attachments[0]._id,
          data: formData,
        })
      );
      dispatch(clearAttachment());
    } else {
      dispatch(attachmentsCreate(formData));
      dispatch(clearAttachment());
    }
  };
  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(maintenancesUpdate({ id, data: formData })); // First update the form data
  };

  // Separate effect for handling file upload after form update
useEffect(() => {
  // Only upload if there is a valid file and the form data has been updated
  if (data && file && !uploaded) {
    handleUpload(id, name); // Perform the upload
    setUploaded(true); // Prevent repeated uploads
  }
}, [data, file, uploaded, id, name]); // Only trigger this effect when `data`, `file`, or `uploaded` changes

  return (
    <>
      <Toaster />
      {/* Page Titre */}
      <div className="flex justify-between p-5 mb-3 bg-white text-gray-700">
        <ChevronLeftIcon
          width="20px"
          height="20px"
          onClick={() => {
            navigate(`/entretien-garage-detail/${id}`);
          }}
        />
        <div className="">Modifier tâche d'entretien</div>
        <XMarkIcon
          width="25px"
          height="25px"
          fill="#000"
          onClick={() => {
            navigate(`/entretien-garage-detail/${id}`);
          }}
        />
      </div>
      {/* Page Content  */}
      <Card>
        <CardBody>
          {isLoading && <Spinner />}
          <form action="" onSubmit={handleSubmit}>
            <div className="flex items-center pb-6">
              <CalendarDaysIcon width="25px" height="25px" className="mr-2" />
              <span className="font-bold">Entretien et maintenance</span>
            </div>
            <div className="flex flex-col">
              <div className="mb-5">
                <CalendarElement
                  label="Date d'entretien"
                  name="date"
                  date={formData.date}
                  setDate={(e) => {
                    setFormData({
                      ...formData,
                      date: e,
                    });
                  }}
                />
              </div>
              <div className="mb-5">
                {getAllMaintenanceTypes?.data && (
                  <Select
                    variant="standard"
                    label="Séléctionner un entretien"
                    name="maintenanceTypesId"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        maintenanceTypesId: e,
                      });
                    }}
                  >
                    {getAllMaintenanceTypes?.data?.maintenanceTypes?.map(
                      (item, index) => (
                        <Option
                          key={index}
                          value={item._id}
                          selected={
                            item._id === formData.maintenanceTypesId._id
                          }
                        >
                          {item.name}
                        </Option>
                      )
                    )}
                  </Select>
                )}
              </div>
              <div className="mb-5">
                <Input
                  type="number"
                  name="totalTTC"
                  value={formData.totalTTC}
                  onChange={handlechange}
                  label="Total TTC DHS"
                />
              </div>
            </div>
            <div className="flex flex-col mb-5 border-t-[2px]">
              <div className="font-bold flex items-center pb-2 pt-2">
                <MapIcon width="25px" height="25px" className="mr-2" />
                <span>Adresse :</span>
              </div>
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handlechange}
                label="Adresse"
              />
            </div>
            <div className="flex flex-col mb-5 border-t-[2px]">
              <div className="font-bold flex items-center  pb-2 pt-2">
                <UserIcon width="25px" height="25px" className="mr-2" />
                <span>Chauffeur responsable :</span>
              </div>
              <div>
                {getAllUsers?.data?.users?.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Checkbox
                      id={item.id}
                      name="responsible"
                      value={item._id}
                      onChange={handlechange}
                      checked={formData.responsible.includes(item._id)}
                    />
                    <span>{item.fullname}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {/* <input type="file" onChange={handleFileChange} /> */}
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
              >
                <div className="flex flex-col items-center justify-center p-2">
                  <svg
                    className={`w-5 h-5 mb-2 ${uploaded || name ? "text-green-500" : "text-gray-500"}`} // Change color based on uploaded state
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 text-center">
                    <span className="font-semibold">
                      {uploaded || name ? name : "Cliquez pour télécharger"}
                    </span>{" "}
                    {/* Display file name if uploaded */}
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <div className="mt-5 flex flex-col mb-5">
              <Input
                label="Nom du fichier"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              fullWidth
              className="flex justify-center items-center gap-3 bg-purple-400"
            >
              <ArrowDownTrayIcon height="25px" width="25px" className="" />
              Enregister
            </Button>
          </form>
        </CardBody>
      </Card>
    </>
  );
};
export default TruckMaintenanceNew;

