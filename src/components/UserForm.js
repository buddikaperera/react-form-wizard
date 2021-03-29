import React, { useState } from "react";
import BioData from "./BioData";
import PersonalDetails from "./PersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  facebook: "",
  github: "",
  address: "",
};

function UserForm() {
  const [values, setValues] = useState(initialValues);
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const inputChange = (input) => (e) => {
    setValues({
      ...values,
      [input]: e.target.value,
    });
  };

  const props = { values, nextStep, prevStep, inputChange };

  switch (step) {
    case 1:
      return <PersonalDetails {...props} />;

    case 2:
      return <BioData {...props} />;

    case 3:
      return <Confirm {...props} />;

    case 4:
      return <Success {...props} />;
  }
}

export default UserForm;
