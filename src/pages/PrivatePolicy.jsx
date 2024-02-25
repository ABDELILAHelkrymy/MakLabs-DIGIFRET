import React, { useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
  Card,
  Button,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { editUserProfile } from "../services/app/auth/authActions";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const PrivatePolicy = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { EditedAuthData, error, authData } = useSelector(
    (state) => state.auth
  );
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const sendData = () => {
    dispatch(editUserProfile(EditedAuthData));
  };

  useEffect(() => {
    if (error) {
      navigate("/sign-up/step1");
    } else if (authData?.user?.isCompleted) {
      navigate("/success");
    }
  }, [authData, error]);

  return (
    <div className="pageContainer">
      <main>
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          color="transparent"
          shadow={false}
        >
          <div className="flex justify-center my-5">
            <Typography variant="h4" color="blue-gray">
              CONDITIONS GÉNÉRALES
            </Typography>
          </div>
          <Typography variant="h6" color="blue-gray">
            CONDITIONS GÉNÉRALES D’UTILISATION
          </Typography>

          <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              ARTICLE 1 : NOTRE OFFRE
            </AccordionHeader>
            <AccordionBody>
              <Typography color="blue-gray">
                La société Carpooling, ci-après dénommée « l’Entreprise », est
                une plateforme de mise en relation de conducteurs et de
                passagers pour des trajets en covoiturage. L’Entreprise propose
                un service de covoiturage pour les trajets du quotidien, les
                trajets domicile-travail et les trajets occasionnels.
                L’Entreprise propose également un service de covoiturage pour
                les trajets longue distance.
              </Typography>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              ARTICLE 2 : ACCEPTATION DES CONDITIONS GÉNÉRALES
            </AccordionHeader>
            <AccordionBody>
              <Typography color="blue-gray">
                L’utilisation de la plateforme Carpooling est soumise à
                l’acceptation des présentes conditions générales d’utilisation.
                En utilisant la plateforme Carpooling, l’Utilisateur accepte les
                présentes conditions générales d’utilisation.
              </Typography>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              ARTICLE 3 : INSCRIPTION
            </AccordionHeader>
            <AccordionBody>
              <Typography color="blue-gray">
                Pour utiliser la plateforme Carpooling, l’Utilisateur doit créer
                un compte. L’Utilisateur doit fournir des informations exactes
                et à jour lors de son inscription. L’Utilisateur s’engage à ne
                pas créer de compte pour une autre personne sans son
                autorisation.
              </Typography>
            </AccordionBody>
          </Accordion>

          <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
            <AccordionHeader onClick={() => handleOpen(4)}>
              ARTICLE 4 : UTILISATION DE LA PLATEFORME
            </AccordionHeader>
            <AccordionBody>
              <Typography color="blue-gray">
                L’Utilisateur s’engage à utiliser la plateforme Carpooling
                conformément aux présentes conditions générales d’utilisation.
                L’Utilisateur s’engage à ne pas utiliser la plateforme
                Carpooling à des fins illégales ou interdites.
              </Typography>
            </AccordionBody>
          </Accordion>

          <Button onClick={sendData}>Continuer</Button>
        </Card>
      </main>
    </div>
  );
};

export default PrivatePolicy;
