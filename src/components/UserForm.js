import React, { useState } from "react";

const initialValues = {
  name: "",
  fatherName: "",
  email: "",
  age: "",
  highestEducation: "",
  occupation: "",
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

  return <div></div>;
}

export default UserForm;
