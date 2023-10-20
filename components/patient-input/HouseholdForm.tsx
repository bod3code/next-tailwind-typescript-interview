"use client";

import usePatientStore, { Patient } from "stores/store";
import IsCovered from "./input-elements/IsCovered";
import Name from "./input-elements/Name";
import IsSubscriber from "./input-elements/IsSubscriber";
import InsurancePrimacy from "./input-elements/InsurancePrimacy";
import InsuranceID from "./input-elements/InsuranceID";
import React from "react";

interface LabelProps {
  name: string;
}

const Label = ({ name }: LabelProps) => {
  return <label className={`text-xs`}>{name}</label>;
};

interface PatientRowProps {
  patient: Patient;
}
const PatientRow = ({ patient }: PatientRowProps) => {
  return (
    <>
      <IsCovered patient={patient} />
      <Name patient={patient} />
      <IsSubscriber patient={patient} />
      <InsurancePrimacy patient={patient} />
      <InsuranceID patient={patient} />
    </>
  );
};

const HouseholdForm = () => {
  const { patients, addPatient } = usePatientStore();

  const handleAddPatientClick = () => {
    // Call the addPatient function from the store to add a new patient
    addPatient({
      id: "",
      name: "",
      nickname: "",
      isSubscriber: false,
      insurancePrimacy: "",
      isCovered: false,
    });
  };

  return (
    <div className="mt-6">
      <div className="text-slate-800 text-base font-medium leading-normal">
        Household
      </div>
      <div className="items-start grid grid-cols-[65px_auto_70px_130px_auto] mt-4">
        <Label name="Covered" />
        <Label name="Name" />
        <Label name="Subscriber" />
        <Label name="Insurance" />
        <Label name="ID" />
        {patients.map((patient, index) => (
          <PatientRow key={index} patient={patient} />
        ))}
        <div className="items-end gap-2 inline-flex justify-end">
          <div
            className="grow shrink basis-0 cursor-pointer text-right text-teal text-xs font-light leading-none"
            onClick={handleAddPatientClick} // Call handleAddPatientClick on click
          >
            +Add new member
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseholdForm;
