import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, addPlant, deletePlant}) {
  const [filter, setFilter] = useState("")
  const [visiblePlants,setVisiblePlants] = useState(plants)

  useEffect(() => {
    let updatePlants = plants.filter ((el) => {
      if(filter === "") {
        return true
      }
      return el.name.toLowerCase().includes(filter.toLowerCase())
    })
    setVisiblePlants(updatePlants);
  }, [filter, plants])

  function filterPlants(searchTerm) {
    setFilter(searchTerm);
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant} filter={filter}/>
      <Search filterPlants={filterPlants}/>
      <PlantList plants={plants} deletePlant={deletePlant} visiblePlants={visiblePlants}/>
    </main>
  );
}

export default PlantPage;
