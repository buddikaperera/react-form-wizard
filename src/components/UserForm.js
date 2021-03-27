import React, { useState } from "react";
import BioData from "./BioData";
import PersonalDetails from "./PersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

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

  const onHandleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  switch (step) {
    case 1:
      return <PersonalDetails nextStep={nextStep} />;

    case 2:
      return <BioData nextStep={nextStep} prevStep={prevStep} />;

    case 3:
      return <Confirm nextStep={nextStep} prevStep={prevStep} />;

    case 4:
      return <Success />;
  }
}

export default UserForm;
