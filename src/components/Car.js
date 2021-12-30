import React from "react";

const Car = ({ funcs, index, handleAnotherCar, arrow }) => (
  <div>
    <div className="columns">
      <div className="column">
        <p>
          <label htmlFor={`year of vehicle ${index + 1}`}>
            Year of Vehicle
            <input
              id={`year of vehicle ${index + 1}`}
              type="text"
              name="yearOfVehicle1"
              onChange={(e) => funcs[0](e.target.value)}
            />
          </label>
        </p>
        <p>
          <label htmlFor={`make of vehicle ${index + 1}`}>
            Make of Vehicle
            <input
              id={`make of vehicle ${index + 1}`}
              type="text"
              name="makeOfVehicle1"
              onChange={(e) => funcs[1](e.target.value)}
            />
          </label>
        </p>
      </div>
      <div className="column">
        <p>
          <label htmlFor={`model of vehicle ${index + 1}`}>
            Model of Vehicle
            <input
              id={`model of vehicle ${index + 1}`}
              type="text"
              name="modelOfVehicle1"
              onChange={(e) => funcs[2](e.target.value)}
            />
          </label>
        </p>
        <p>
          <label htmlFor={`desired coverage ${index + 1}`}>
            Desired Coverage
            <select
              id={`desired coverage ${index + 1}`}
              onChange={(e) => funcs[3](e.target.value)}
              name="desiredCoverage1"
            >
              <option>---</option>
              <option>Liability Only</option>
              <option>Liability & Uninsured Motorist</option>
              <option>Full Coverage</option>
              <option>Not Sure</option>
            </select>
          </label>
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