import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const SuccesPage = () => {
  return (
    <div className="pageContainer">
      <main className="flex flex-col justify-center">
        <Card color="transparent" shadow={false}>
          <CardBody>
            <div className="flex justify-center my-5">
              <Typography variant="h4" color="blue-gray">
                Merci, tout est prêt!
              </Typography>
            </div>
            <Typography variant="h6" color="blue-gray">
              Votre compte est maintenant activé!
              <br />
              Maintenant, il est temps d'ajouter votre premier camion
            </Typography>
          </CardBody>
        </Card>
        <div className="flex justify-center my-5">
          <Button size="lg" className="w-80">
            <Link to="/garage" className="text-white">
              Ajouter un camion
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default SuccesPage;
