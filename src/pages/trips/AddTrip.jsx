import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  locationsGetAll,
  locationsCreate,
} from "../../services/store/slices/locationsSlice";
import {
  editNewTripData,
  tripsCreate,
} from "../../services/store/slices/tripsSlice";
import { trucksGetAll } from "../../services/store/slices/trucksSlice";
import { usersGetAll } from "../../services/store/slices/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  Select,
  Option,
  Input,
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import Stepper from "../../components/stepper/Stepper";
import CalendarElement from "../../components/CalendarElement";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const AddTrip = () => {
  const authData = useSelector((state) => state.auth?.authData);
  const newTripData = useSelector((state) => state.trips?.newTripData);
  const newLocation = useSelector((state) => state.locations?.create);
  const trucks = useSelector((state) => state.trucks?.getAll);
  const users = useSelector((state) => state.users?.getAll?.data?.users);

  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const [originId, setOriginId] = useState("");
  const [destinationId, setDestinationId] = useState("");
  const [adress, setAdress] = useState({
    address: "",
    phone: "",
    email: "",
    name: "",
  });
  const [detailsFormData, setDetailsFormData] = useState({
    date: "",
    price: "",
    distane: "8000",
    weight: "",
    noPallets: "",
    description: "description du trajet",
    truckId: "",
    responsible: "",
  });

  const dispatch = useDispatch();
  const locations = useSelector(
    (state) => state.locations?.getAll?.data?.locations
  );

  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const step = params.get("step");

  useEffect(() => {
    dispatch(locationsGetAll());
  }, []);

  useEffect(() => {
    dispatch(trucksGetAll());
  }, []);

  useEffect(() => {
    dispatch(usersGetAll());
  }, []);

  useEffect(() => {
    if (step === null) {
      setActiveStep(0);
    } else if (step === "step2") {
      setActiveStep(1);
    } else {
      setActiveStep(2);
    }
  }, [step]);

  useEffect(() => {
    const handleLocationChange = (id, step) => {
      if (step === activeStep) {
        const locationId = id;
        const tripData = { ...newTripData };

        if (step === 0) {
          setOriginId(locationId);
          tripData.originId = locationId;
        } else if (step === 1) {
          setDestinationId(locationId);
          tripData.destinationId = locationId;
        }

        dispatch(editNewTripData(tripData));
      }
    };

    if (originId || destinationId) {
      handleLocationChange(originId, 0);
      handleLocationChange(destinationId, 1);
    }
  }, [activeStep, destinationId, dispatch, originId]);

  useEffect(() => {
    if (newLocation) {
      const location = newLocation?.data?.location;
      if (activeStep === 0) {
        setOriginId(location?._id);
        dispatch(editNewTripData({ ...newTripData, originId: location?._id }));
      } else if (activeStep === 1) {
        setDestinationId(location?._id);
        dispatch(
          editNewTripData({ ...newTripData, destinationId: location?._id })
        );
      }
    }
  }, [activeStep, dispatch, newLocation]);

  const handleClick = async () => {
    const { address, phone, email, name } = adress;

    if (address && phone && email && name) {
      await dispatch(locationsCreate({ name, address, phone, email }));
    }

    setTimeout(() => {
      const steps = ["/add-trip/?step=step2", "/add-trip/?step=step3"];
      if (activeStep === 0 || activeStep === 1) {
        if ((address && phone && email && name) || originId || destinationId) {
          navigate(steps[activeStep]);
        }
      }
    }, 1000);

    if (activeStep === 2) {
      const tripData = {
        ...newTripData,
        ...detailsFormData,
      };
      dispatch(editNewTripData(tripData));
      dispatch(tripsCreate(tripData));
      navigate("/trajets");
    }
    setAdress({
      address: "",
      phone: "",
      email: "",
      name: "",
    });
  };

  const handleChange = (e) => {
    setAdress({ ...adress, [e.target.name]: e.target.value });
  };

  const hanleSelectChange = (e) => {
    if (activeStep === 0) {
      setOriginId(e);
    } else if (activeStep === 1) {
      setDestinationId(e);
    }
  };
  return (
    <>
      {/* Page Titre */}
      <div className="flex justify-between p-5 mb-2 bg-white text-gray-700">
        <ChevronLeftIcon
          width="20px"
          height="20px"
          onClick={() => {
            navigate("/trajets");
          }}
        />
        <div className="w-full flex justify-center">
          <p>Nouveau trajet</p>
        </div>
      </div>
      {/* Page Content  */}
      <Card className="z-0">
        <CardBody>
          <Stepper activeStep={activeStep} />
          <div className="pt-5 pb-5 text-center font-bold">
            {activeStep === 0 && "Chargement initial"}
            {activeStep === 1 && "Déchargement final"}
            {activeStep === 2 && "Détails"}
          </div>
          {(activeStep === 0 || activeStep === 1) && (
            <>
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  Adresse existante :
                </AccordionHeader>
                <AccordionBody className="h-52">
                  <div className="list-element p-5">
                    {locations && (
                      <Select
                        variant="standard"
                        label="Séléctionner une adresse"
                        name={activeStep === 0 ? "originId" : "destinationId"}
                        onChange={(e) => hanleSelectChange(e)}
                        className="overflow-y-scroll h-fit-content"
                      >
                        {locations?.map((location, index) => (
                          <Option key={index} value={location._id}>
                            {location.name}
                          </Option>
                        ))}
                      </Select>
                    )}
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  Nouvelle Adresse :
                </AccordionHeader>
                <AccordionBody>
                  <div className="list-element p-5">
                    <div className="pt-5 pb-5">
                      <Input
                        name="address"
                        label="address"
                        value={adress.address}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="pt-5 pb-5">
                      <Input
                        name="phone"
                        label="Téléphone"
                        value={adress.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="pt-5 pb-5">
                      <Input
                        name="email"
                        label="Adresse e-mail"
                        value={adress.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="pt-5 pb-5">
                      <Input
                        name="name"
                        label="Adresse portable"
                        value={adress.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </AccordionBody>
              </Accordion>
            </>
          )}

          {activeStep === 2 && (
            <>
              <div className="mb-3">
                <div className="flex">
                  <ChartBarIcon height="25px" width="25px" className="mr-3" />
                  <span className="font-bold">Distance</span>
                </div>
                <p>8501 KMS</p>
              </div>
              <div className="mb-3">
                <div className="flex">
                  <ArrowDownTrayIcon
                    height="25px"
                    width="25px"
                    className="mr-3"
                  />
                  <span className="font-bold">Chargement</span>
                </div>
                <p>
                  {locations?.map((location) =>
                    location._id === originId ? location.name : ""
                  )}
                </p>
              </div>
              <div className="mb-3">
                <div className="flex">
                  <ArrowUpTrayIcon
                    height="25px"
                    width="25px"
                    className="mr-3"
                  />
                  <span className="font-bold">Déchargement</span>
                </div>
                <p>
                  {locations?.map((location) => (
                    <span>
                      {location._id === destinationId ? location.name : ""}
                    </span>
                  ))}
                </p>
              </div>
              <div className="">
                <div className="list-element">
                  <div className="pt-5 pb-5">
                    <Input
                      name="price"
                      label="Prix total"
                      value={detailsFormData.price}
                      onChange={(e) =>
                        setDetailsFormData({
                          ...detailsFormData,
                          price: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="pt-5 pb-5">
                    <Input
                      name="weight"
                      label="poid total en T (Ton)"
                      value={detailsFormData.weight}
                      onChange={(e) =>
                        setDetailsFormData({
                          ...detailsFormData,
                          weight: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="pt-5 pb-5">
                    <Input
                      name="noPallets"
                      label="Nombre des palettes"
                      value={detailsFormData.noPallets}
                      onChange={(e) =>
                        setDetailsFormData({
                          ...detailsFormData,
                          noPallets: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="py-3 px-3">
                    {trucks.data && (
                      <Select
                        variant="standard"
                        label="Séléctionner un camion"
                        name="truckId"
                        onChange={(e) =>
                          setDetailsFormData({ ...detailsFormData, truckId: e })
                        }
                        className="overflow-y-scroll h-fit-content"
                      >
                        {trucks?.data?.trucks?.map((truck, index) => (
                          <Option key={index} value={truck._id}>
                            {truck.brand}
                          </Option>
                        ))}
                      </Select>
                    )}
                  </div>
                  <div className="p-3">
                    {users && (
                      <Select
                        variant="standard"
                        label="Séléctionner un chauffeur"
                        name="responsible"
                        onChange={(e) =>
                          setDetailsFormData({
                            ...detailsFormData,
                            responsible: e,
                          })
                        }
                        className="overflow-y-scroll h-fit-content"
                      >
                        {users?.map((user, index) => (
                          <Option key={index} value={user._id}>
                            {user.fullname}
                          </Option>
                        ))}
                      </Select>
                    )}
                  </div>
                  <div className="pt-5 pb-5">
                    <CalendarElement
                      date={detailsFormData.date}
                      setDate={(e) => {
                        setDetailsFormData({
                          ...detailsFormData,
                          date: e,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <Button
            fullWidth
            className="bg-purple-400 mt-5"
            onClick={handleClick}
          >
            Continuer
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default AddTrip;

