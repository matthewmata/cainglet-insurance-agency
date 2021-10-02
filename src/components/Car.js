import React from "react";

const Car = ({ funcs, index, handleAnotherCar, arrow }) => (
  <div>
    <div className="columns">
      <div className="column">
        <p>
          Year of Vehicle
          <input
            type="text"
            name="yearOfVehicle1"
            onChange={(e) => funcs[0](e.target.value)}
          />
        </p>
        <p>
          Make of Vehicle
          <input
            type="text"
            name="makeOfVehicle1"
            onChange={(e) => funcs[1](e.target.value)}
          />
        </p>
      </div>
      <div className="column">
        <p>
          Model of Vehicle
          <input
            type="text"
            name="modelOfVehicle1"
            onChange={(e) => funcs[2](e.target.value)}
          />
        </p>
        <p>
          Desired Coverage
          <select
            onChange={(e) => funcs[3](e.target.value)}
            name="desiredCoverage1"
          >
            <option>---</option>
            <option>Liability Only</option>
            <option>Liability & Uninsured Motorist</option>
            <option>Full Coverage</option>
            <option>Not Sure</option>
          </select>
        </p>
      </div>
    </div>
    {index < 3 ? (
      <div className="another-car">
        <button type="button" onClick={() => handleAnotherCar(index + 1)}>
          Add Additonal Car{" "}
          {arrow[index] ? (
            <div className="arrow-up"></div>
          ) : (
            <div className="arrow-down"></div>
          )}
        </button>
      </div>
    ) : (
      ""
    )}
  </div>
);

export default Car