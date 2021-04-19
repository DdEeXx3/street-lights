import React from "react";
import "../component_scss/PredictionRaport/PredictionRaport.css";

const ComparisionRaport = () => {
  return (
    <div className="raportfield">
      <div className="header">Raport porównawczy</div>
      <div className="data">
        <div className="chart"><h1 className='header-chart'>Porównanie danych o zużyciu</h1></div>
        <div className="details"><h1 className='header-details'>Szczegółowe dane</h1> </div>
      </div>
    </div>
  );
};

export default ComparisionRaport;