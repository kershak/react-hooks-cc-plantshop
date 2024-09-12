import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => setPlants(data))
    .catch(err => console.log(err))
  },[])

  function addPlant(plant) {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(plant)
    })
    .then(res => res.json())
    .then(data => setPlants([...plants, data]))
    .catch(err => console.log(err));
  }

  function deletePlant(plant) {
    console.log(plant.id);
    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method: 'DELETE',
    })
    .then(res => res.json()) 
    .then(data => setPlants((plants) => {
      return plants.filter((el) => {
        return el.id !== plant.id
      })
    }))
    .catch(err => console.log(err));
  }

  return (
    <div className="app">
      <Header />
      <PlantPage deletePlant={deletePlant} addPlant={addPlant} plants={plants}/>
    </div>
  );
}

export default App;
