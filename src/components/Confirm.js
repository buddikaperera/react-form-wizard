import React from "react";

function Confirm(props) {
  return (
    <div className="container">
      <div className="form-container">
        <h2>3 Confirm</h2>
        <ul class="list-group">
          <li class="list-group-item">Name: {props.values.name}</li>
          <li class="list-group-item">Email: {props.values.email}</li>
          <li class="list-group-item">Phone Number: {props.values.phone}</li>

          <li class="list-group-item">
            Facebook URL:{" "}
            <a href={props.values.facebook}>{props.values.facebook}</a>
          </li>

          <li class="list-group-item">
            Github URL: <a href={props.values.github}>{props.values.github}</a>
          </li>
        </ul>

        <button className="btn btn-primary mt-3 mr-3" onClick={props.prevStep}>
          Prev
        </button>
        <button className="btn btn-primary mt-3 mr-3" onClick={props.nextStep}>
          Next
        </button>
      </div>{" "}
    </div>
  );
}

export default Confirm;
