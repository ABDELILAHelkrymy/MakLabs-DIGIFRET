import { useNavigate } from "react-router-dom";
import {
  ChevronLeftIcon,
  CheckCircleIcon,
  ChevronDoubleRightIcon,
  PlusCircleIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Typography,
  Button,
} from "@material-tailwind/react";
const AddGarage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between p-5 bg-white text-gray-700">
        <ChevronLeftIcon
          width="20px"
          height="20px"
          onClick={() => {
            navigate("/garage");
          }}
        />
        <div className="">Ajouter nouveau camion</div>
        <CheckCircleIcon
          width="25px"
          height="25px"
          fill="#2EAA35"
          onClick={() => {
            navigate("/garage");
          }}
        />
      </div>
      {/* Page Content  */}
      <div className="explore">
        <Card className="mt-8">
          <CardHeader className="bg-purple-100 flex items-center">
            <Typography variant="small" color="blue-gray" className="p-2">
              Mon nouveau camion
            </Typography>
          </CardHeader>
          <CardBody>
            <div className="garage flex justify-between text-xs">
              <div className="garage-content w-1/2">
                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
                  >
                    <div class="flex flex-col items-center justify-center p-2">
                      <svg
                        class="w-5 h-5 mb-2 text-gray-500"
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
                      <p class="mb-2 text-sm text-gray-500 text-center">
                        <span class="font-semibold">
                          Cliquez pour télécharger
                        </span>
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="mt-2">
                <Input label="Nom du camion" />
              </div>
              <div className="mt-2">
                <Input label="Vendeur" />
              </div>
              <div className="mt-2">
                <Input label="Aquiéreur" />
              </div>
              <div className="mt-2">
                <Input label="Banque" />
              </div>
              <div className="mt-2">
                <Input label="Mode d'achat" />
              </div>
              <div className="mt-2">
                <Input label="Marque" />
              </div>
              <div className="mt-2">
                <Input label="Type" />
              </div>
              <div className="mt-2">
                <Input label="Genre" />
              </div>
              <div className="mt-2">
                <Input label="N° de châssier" />
              </div>
            </div>
            <Button
              fullWidth
              className="mt-3 flex justify-center items-center gap-3 bg-purple-400"
            >
              <PlusCircleIcon height="25px" width="25px" className="" />
              Confirmer l'ajout
            </Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default AddGarage;
