import React from "react";
import PlantCard from "./PlantCard";

function PlantList({visiblePlants, deletePlant}) {
  return (
    <ul className="cards">
      {visiblePlants.map((el) => {
        return <PlantCard deletePlant={deletePlant} plant = {el} key ={el.id}/>
        })}
    </ul>
  );
}

export default PlantList;
