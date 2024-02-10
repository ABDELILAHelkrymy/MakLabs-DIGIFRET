import {React, useState} from "react";
import Trajet from "../components/trajet/Trajet"

const Explore = (props) => {
  
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Trajets</p>
      </header>
      <main>
        <Trajet etat={false} />
        <Trajet etat={true}/>
      </main>
    </div>
  )
}

export default Explore;
