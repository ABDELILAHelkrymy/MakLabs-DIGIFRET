import { React, useState } from "react";
import Trip from "../../components/trip/Trip";
import MenuTrajet from "../../components/navbar/MenuTrajet";

const TripsPage = (props) => {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Trajets</p>
      </header>
      <main>
        <MenuTrajet />
        <Trip
          etat={false}
          points={{ origin: "Fes, Morocco", destination: "Rabat, Morocco" }}
        />
        <Trip
          etat={true}
          points={{ origin: "Fes, Morocco", destination: "Meknes, Morocco" }}
        />
      </main>
    </div>
  );
};

export default TripsPage;
