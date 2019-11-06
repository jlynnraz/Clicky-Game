import React from "react";
import "./style.css";
// import 

function AnimalCard(props) {
    return (
      <div className="card">
        <div className="img-container d-flex" onClick={() => props.updateAnimal(props.id)}>
          <img alt={props.name} src={props.image} />
        </div>
        {/* <span className="update" onClick={() => props.updateAnimal(props.id)}></span> */}
      </div>

      
    );
  }

  export default AnimalCard