import {React, useState} from "react";
import Trajet from "../../components/trajet/Trajet"
import MenuTrajet from "../../components/navbar/MenuTrajet";

const Explore = (props) => {

  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Trajets</p>
      </header>
      <main>
        <MenuTrajet />
        <Trajet etat={false} points={{origin: "Fes, Morocco", destination: "Rabat, Morocco"}}/>
        <Trajet etat={true} points={{origin: "Fes, Morocco", destination: "Meknes, Morocco"}}/>
      </main>
    </div>
  )
}

export default Explore;
