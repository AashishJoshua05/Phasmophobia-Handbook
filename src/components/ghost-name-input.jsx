import React, { useState } from "react";
import GhostName from "./ghost-name";
import ghosts from "../ghosts";

function Input(props) {
  const Evidences = ["EMF Level 5", "D.O.T.S Projector", "Fingerprints", "Freezing Temperatures", "Ghost Orb", "Ghost Writing", "Spirit Box"];
                     
  const [checked , setChecked] = useState([]);

  //Utility Function to check if Multiple values exist in an array.
  function multipleExist(arr, values) {
    return values.every(value => {
      return arr.includes(value);
    });
  }

  //Utility function to tick the evidence and lock in the Ghost
  const handleCheck = (event) => {
      var updatedList = [...checked];
      if(event.target.checked) {
          updatedList = [...checked, event.target.value];
      } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
      }
      setChecked(updatedList);
  }

  //Utility function to create the Ghost Icon name
  function createName(currentGhost) {
    if (checked.length === 0) {
      return <GhostName key={currentGhost.id} name={currentGhost.name}/>
    } else{
      if(multipleExist(currentGhost.evidence, checked))
      {
        return <GhostName key={currentGhost.id} name={currentGhost.name}/>
      }
    }
  }

  return (<div className="container">
    <div className="row">
      <div className="col">
        {Evidences.map((item, index) => (
          <div key={index}>
            <input  type="checkbox" className="evidenceCheck" onChange={handleCheck} value={item} /> 
            <span>{item}</span>
          </div>))}
      </div>
        <div className="col">
          <div>
            {ghosts.map(createName)}
          </div>
        </div>
      </div>
      </div>);
}

export default Input;
