import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ChevronLeftIcon,
  ArrowUpTrayIcon,
  StarIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";
import { Card, CardBody, Button } from "@material-tailwind/react";
import {
  attachmentsSearch,
  attachmentsCreate,
} from "../../services/store/slices/attachmentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Upload from "../../components/upload/Upload";
import Spinner from "../../components/spinner/Spinner";
import { handleDownload } from "../../utils/download";

const TruckAttachments = () => {
  const { id } = useParams();
  const [openUpload, setOpenUpload] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (state) => state.attachments?.search
  );

  useEffect(() => {
    const query = [
      {
        field: "entity",
        value: id,
      },
    ];
    dispatch(attachmentsSearch(query));
  }, [dispatch, id]);

  const transformDate = (date) => {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}`;
  };

  return (
    <>
      {/* Page Header */}
      <div className="flex justify-between p-5 mb-3 bg-white text-gray-700">
        <ChevronLeftIcon
          width="20px"
          height="20px"
          onClick={() => {
            navigate(`/garage-detail/${id}`);
          }}
        />
        <div className="">Liste des documents</div>
        <ArrowUpTrayIcon
          width="25px"
          height="25px"
          fill="#2eaa35"
          onClick={() => {
            setOpenUpload(!openUpload);
          }}
        />
      </div>
      {/* Page Content  */}
      <Card className="overflow-hidden">
        <CardBody className="text-center">
          {openUpload && (
            <div className="flex justify-center items-center">
              <Upload
                server="local"
                entityName="trucks"
                entity={id}
                redirect={`/garage-detail/${id}`}
              />
            </div>
          )}
          <div className="flex justify-between p-3 border-b-[2px] items-center">
            <div className="w-1/4 text-left">Date</div>
            <div className="w-1/2 text-left">Nom</div>
            <div className="w-1/4 text-right">Favoris</div>
          </div>
          {isLoading && <Spinner />}
          {error && <div>Erreur</div>}
          {data &&
            data.attachments &&
            data.attachments.length > 0 &&
            data?.attachments.map((attachment) => (
              <div
                className="flex p-3 border-b-[2px] items-center"
                key={attachment._id}
              >
                <div className="w-1/4 text-left">
                  {transformDate(attachment.createdAt)}
                </div>
                <div className="w-1/2 text-left">{attachment.name}</div>
                <div className="w-1/4">
                  <ArrowDownTrayIcon
                    width="25px"
                    height="25px"
                    fill="#2eaa35"
                    onClick={() => handleDownload(attachment)}
                  />
                </div>
                <div className="w-1/4 flex justify-end">
                  <StarIcon
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    height="25px"
                    width="25px"
                  />
                </div>
              </div>
            ))}
        </CardBody>
      </Card>
    </>
  );
};

export default TruckAttachments;

