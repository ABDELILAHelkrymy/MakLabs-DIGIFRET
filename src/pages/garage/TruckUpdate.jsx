import { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  trucksGetById,
  trucksUpdate,
} from "../../services/store/slices/trucksSlice";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import {
  CheckCircleIcon,
  ChevronLeftIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import Spinner from "../../components/spinner/Spinner";
import toast, { Toaster } from "react-hot-toast";

const TruckUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const { data } = useSelector((state) => state.trucks?.getById);
  const updatedState = useSelector((state) => state.trucks?.update);
  const [formData, setFormData] = useState({
    seller: "",
    buyer: "",
    bank: "",
    purchaseType: "",
    brand: "",
    type: "",
    specific: "",
    nChassis: "",
    fuel: "",
    nCylinders: "",
    fiscalPower: "",
    ptc: "",
    pav: "",
    pmtct: "",
    dateOfCirculation: "",
    previouslyRegistered: "",
    nEngine: "",
    nRegistration: "",
    registrationCenter: "",
    approvalNumber: "",
    usage: "",
  });

  const InputFrNames = {
    seller: "Vendeur",
    buyer: "Acquereur",
    bank: "Banque",
    purchaseType: "Mode d'achat",
    brand: "Marque",
    type: "Type",
    specific: "Genre",
    nChassis: "N du Chdssis",
    fuel: "Carburant",
    nCylinders: "Nombre de Cylindres",
    fiscalPower: "Puiss,nce Fiscale",
    ptc: "PTC",
    pav: "PAV",
    pmtct: "PMTCT",
    dateOfCirculation: "Date Mise en Circulation au Maroc",
    previouslyRegistered: "Antérieurement immatriculé S/N",
    nEngine: "N du Moteur",
    nRegistration: "N d Immatriculation",
    registrationCenter: "Centre d Immatriculation",
    approvalNumber: "N d'Agrément",
    usage: "Usage",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(trucksUpdate({ id, data: formData }));
  };

  useEffect(() => {
    if (data) {
      setFormData(data.truck);
    }
  }, [data]);

  useEffect(() => {
    if (updatedState.data) {
      toast.success("Camion modifié avec succès", {
        duration: 3000,
        position: "bottom-right",
      });
    } else if (updatedState.error) {
      toast.error("Erreur lors de la modification du camion");
    }
  }, [updatedState.error, updatedState.data]);

  if (updatedState.isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Toaster />
      <div className="flex justify-between p-5 bg-white text-gray-700">
        <ChevronLeftIcon
          width="20px"
          height="20px"
          onClick={() => {
            navigate(`/garage-detail/${id}`);
          }}
        />
        <div className="">Modifier camion</div>
        <CheckCircleIcon
          width="25px"
          height="25px"
          fill="#2EAA35"
          onClick={handleSubmit}
        />
      </div>
      {/* Page Content  */}
      <div className="explore">
        <Card className="mt-8">
          <CardHeader className="bg-purple-100 flex items-center">
            <Typography variant="small" color="blue-gray" className="p-2">
              {`${data?.truck?.brand} - ${data?.truck?.nRegistration}` ||
                "Camion"}
            </Typography>
          </CardHeader>
          <CardBody>
            <form action="" onSubmit={handleSubmit}>
              <div className="garage flex justify-between text-xs">
                <div className="garage-content w-1/2">
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
                    >
                      <div className="flex flex-col items-center justify-center p-2">
                        <svg
                          className="w-5 h-5 mb-2 text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 text-center">
                          <span className="font-semibold">
                            Cliquez pour télécharger
                          </span>
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                {Object.keys(InputFrNames).map((key) => (
                  <div className="flex items-center justify-between mb-5">
                    <Input
                      key={key}
                      type="text"
                      id={key}
                      name={key}
                      value={formData[key]}
                      label={InputFrNames[key]}
                      onChange={handleChange}
                      fullWidth
                      className="w-1/2"
                    />
                  </div>
                ))}
              </div>
              <Button
                type="submit"
                fullWidth
                className="mt-3 flex justify-center items-center gap-3 bg-purple-400"
              >
                <PlusCircleIcon height="25px" width="25px" className="" />
                Confirmer
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default TruckUpdate;

