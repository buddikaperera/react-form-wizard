import React from "react";

function PersonalDetails(props) {
  return (
    <div className="container">
      <div className="form-container">
        <h2>1 PersonalDetails</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={props.inputChange("name")}
            value={props.values.name}
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            className="form-control"
            name="email"
            onChange={props.inputChange("email")}
            value={props.values.email}
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            onChange={props.inputChange("phone")}
            value={props.values.phone}
          />

          <div className="text-left">
            <button className="btn btn-primary mt-3 " onClick={props.nextStep}>
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
