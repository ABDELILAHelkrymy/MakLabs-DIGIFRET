import { Card, CardBody } from "@material-tailwind/react";
import Upload from "../components/upload/Upload";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const UploadPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const entity = searchParams.get("entity");
  const entityName = searchParams.get("entityName");
  const redirect = searchParams.get("redirect");

  useEffect(() => {
    console.log("entity", entity);
    console.log("entityName", entityName);
    console.log("redirect", redirect);
  }, []);

  return (
    <>
      <Card className="overflow-hidden">
        <CardBody className="text-center">
          <Upload entity={entity} entityName={entityName} redirect={redirect} />
        </CardBody>
      </Card>
    </>
  );
};

export default UploadPage;

