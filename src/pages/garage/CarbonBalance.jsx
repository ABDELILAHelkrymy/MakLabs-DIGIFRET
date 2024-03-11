import { useNavigate } from "react-router-dom";
import {
  ChevronLeftIcon,
  ArrowUpTrayIcon,
  ArrowDownTrayIcon,
  ShoppingCartIcon,
  BuildingOfficeIcon,
  PuzzlePieceIcon,
  SignalIcon,
} from "@heroicons/react/24/solid";
import { Card, CardBody, Button } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { useParams } from "react-router-dom";

const FuelBalance = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const chartConfig = {
    type: "pie",
    width: 150,
    height: 150,
    series: [30, 40, 35],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#14cfff", "#9255e3", "#94e368"],
      legend: {
        show: false,
      },
    },
  };

  return (
    <>
      {/* Page Header */}
      <div className="flex justify-between p-5 bg-white text-gray-700">
        <ChevronLeftIcon
          width="20px"
          height="20px"
          onClick={() => {
            navigate(`/garage-detail/${id}`);
          }}
        />
        <div className="">Bilan carbone</div>
        <ArrowUpTrayIcon width="25px" height="25px" fill="none" />
      </div>
      {/* Page Content  */}
      <div className="explore">
        <Card>
          <CardBody>
            <div className="rounded-xl shadow-md p-4 text-center bg-purple-50">
              <span className="text-xl ">Ce certificat est attribué </span>
              <span className="text-xs block">à la société TRANSAMAR</span>
            </div>
            <div className="flex items-center mt-4">
              <div className="w-1/2">
                <Chart {...chartConfig} />
              </div>
              <div className="flex flex-col items-center w-1/2">
                <span className="text-5xl font-bold">921</span>
                <span className="block text-xl">tco2e/an</span>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-1/2">
                <div className="flex items-center p-5">
                  <ShoppingCartIcon
                    width="30px"
                    height="30px"
                    className="mr-3"
                  />
                  <div className="flex flex-col">
                    <div>Achats</div>
                    <div>27%</div>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex items-center p-5">
                  <BuildingOfficeIcon
                    width="30px"
                    height="30px"
                    className="mr-3"
                  />
                  <div className="flex flex-col">
                    <div>Bureaux</div>
                    <div>12%</div>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex items-center p-5">
                  <SignalIcon width="30px" height="30px" className="mr-3" />
                  <div className="flex flex-col">
                    <div>Digital</div>
                    <div>9%</div>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex items-center p-5">
                  <PuzzlePieceIcon
                    width="30px"
                    height="30px"
                    className="mr-3"
                  />
                  <div className="flex flex-col">
                    <div>Autres</div>
                    <div>3%</div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              fullWidth
              className="flex justify-center items-center gap-3 bg-purple-400"
            >
              <ArrowDownTrayIcon height="25px" width="25px" className="" />
              Télécharger Certificat
            </Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default FuelBalance;

