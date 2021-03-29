import React from "react";

function BioData(props) {
  return (
    <div className="container">
      <div className="form-container">
        <h2>2 BioData</h2>

        <div className="form-group">
          <label htmlFor="facebook">Facebook URL</label>
          <input
            type="text"
            className="form-control"
            name="facebook"
            onChange={props.inputChange("facebook")}
            value={props.values.facebook}
          />
        </div>

        <div className="form-group">
          <label htmlFor="github">Github URL</label>
          <input
            type="text"
            className="form-control"
            name="github"
            onChange={props.inputChange("github")}
            value={props.values.github}
          />
        </div>

        <button className="btn btn-primary mt-3 mr-3" onClick={props.prevStep}>
          Prev
        </button>
        <button className="btn btn-primary mt-3 mr-3" onClick={props.nextStep}>
          Next
        </button>
      </div>
    </div>
  );
}

export default BioData;
