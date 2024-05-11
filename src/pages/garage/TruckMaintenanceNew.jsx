import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  maintenancesCreate,
  clearMaintenance,
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
import toast, { Toaster } from "react-hot-toast";

const TruckMaintenanceNew = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (state) => state.maintenances?.create
  );
  const getAllUsers = useSelector((state) => state.users?.getAll);
  const getAllMaintenanceTypes = useSelector(
    (state) => state.maintenanceTypes?.getAll
  );
  const currentTruck = useSelector((state) => state.trucks?.getById);
  const [formData, setFormData] = React.useState({
    maintenanceTypesId: "",
    totalTTC: "",
    date: "",
    address: "",
    responsible: "",
    documents: "",
    truckId: currentTruck?.data?.truck?._id,
  });

  React.useEffect(() => {
    dispatch(clearMaintenance());
    dispatch(usersGetAll());
    dispatch(maintenanceTypesGetAll());
  }, []);
  React.useEffect(() => {
    if (data) {
      toast.success("Nouvelle tâche d'entretien créée avec succès");
      navigate(
        `/upload/?entity=${data.maintenance._id}&entityName=maintenances&redirect=/entretien-garage/${currentTruck?.data?.truck?._id}`
      );
    } else if (error) {
      toast.error("Erreur lors de la création de la tâche d'entretien");
    }
  }, [data, error]);
  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(maintenancesCreate(formData));
  };
  return (
    <>
      <Toaster />
      {/* Page Titre */}
      <div className="flex justify-between p-5 mb-3 bg-white text-gray-700">
        <ChevronLeftIcon
          width="20px"
          height="20px"
          onClick={() => {
            navigate("/garage");
          }}
        />
        <div className="">Nouvelle tâche d'entretien</div>
        <XMarkIcon
          width="25px"
          height="25px"
          fill="#000"
          onClick={() => {
            navigate(`/entretien-garage/${currentTruck?.data?.truck?._id}`);
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
                        <Option key={index} value={item._id}>
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
                    />
                    <span>{item.fullname}</span>
                  </div>
                ))}
              </div>
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
