import { useNavigate } from "react-router-dom";
import {
  ChevronLeftIcon,
  PlusIcon,
  ArrowUpRightIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { Card, CardBody } from "@material-tailwind/react";
import Chart from "react-apexcharts";
const PilotageTrajet = () => {
  const navigate = useNavigate();
  const chartConfig = {
    type: "line",
    height: 200,
    series: [
      {
        name: "Sales",
        data: [50, 100, 500, 200, 100],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "gggg",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        theme: "light",
      },
    },
  };
  const chartConfig1 = {
    type: "bar",
    height: 200,
    series: [
      {
        name: "Sales",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
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
      colors: ["#020617"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
  const chartConfig2 = {
    type: "pie",
    width: 200,
    height: 200,
    series: [44, 55, 13, 43, 22],
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
      colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
      legend: {
        show: false,
      },
    },
  };

  return (
    <>
      <div className="flex justify-between p-5 bg-white text-gray-700">
        <ChevronLeftIcon
          width="20px"
          height="20px"
          onClick={() => {
            navigate("/garage-detail");
          }}
        />
        <div className="">Pilotage</div>
        <PlusIcon
          width="25px"
          height="25px"
          fill="#2EAA35"
          onClick={() => {
            navigate("/nouvelle-tache-entretien");
          }}
        />
      </div>
      {/* Page Content  */}
      <div className="explore">
        <Card className="overflow-hidden">
          <CardBody>
            <div className="">
              <Chart {...chartConfig} />
              <div className="">
                <div className="text-right">prix cible</div>
                <div className="flex items-center justify-end">
                  <p className="text-2xl font-bold mr-3">9 DHS/Km</p>
                  <ArrowUpRightIcon width="25px" height="25px" fill="#2EAA35" />
                </div>
              </div>
            </div>
            <div className="">
              <Chart {...chartConfig1} />
              <div className="">
                <div className="text-right">prix cible</div>
                <div className="flex items-center justify-end">
                  <p className="text-2xl font-bold mr-3">319 DHS/Km</p>
                  <ArrowUpRightIcon width="25px" height="25px" fill="#2EAA35" />
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex justify-center">
                <Chart {...chartConfig2} />
              </div>
              <div className="">
                <div className="text-right">prix cible</div>
                <div className="flex items-center justify-end">
                  <p className="text-2xl font-bold mr-3">5% 123 Km</p>
                  <ArrowUpRightIcon width="25px" height="25px" fill="#2EAA35" />
                </div>
              </div>
            </div>
            <div className="flex justify-between border-t-2 pt-5 pb-5">
              <HeartIcon
                height="25px"
                width="25px"
                fill="none"
                stroke="currentColor"
              />
              <HeartIcon
                height="25px"
                width="25px"
                fill="none"
                stroke="currentColor"
              />
              <HeartIcon height="25px" width="25px" fill="#04B404" />
              <HeartIcon height="25px" width="25px" fill="#04B404" />
              <HeartIcon height="25px" width="25px" fill="#04B404" />
              <p>Performance</p>
            </div>
            <div className="flex justify-between border-t-2 pt-5">
              <StarIcon
                height="25px"
                width="25px"
                fill="none"
                stroke="currentColor"
              />
              <StarIcon height="25px" width="25px" fill="#04B404" />
              <StarIcon height="25px" width="25px" fill="#04B404" />
              <StarIcon height="25px" width="25px" fill="#04B404" />
              <StarIcon height="25px" width="25px" fill="#04B404" />
              <p>Confirmité</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default PilotageTrajet;
