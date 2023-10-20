import { Patient } from "stores/store";
import { useState } from "react";

const InsuranceID = (patient: Patient) => {
  const [id, setId] = useState(patient.id);
  return (
    <div className="relative mt-2">
      <input
        type="text"
        name="id"
        id="id"
        value={id}
        maxLength={20}
        onChange={(e) => setId(e.target.value)}
        className={`h-11 p-2 text-sm placeholder-gray-300 rounded-md border border-gray-100`}
        placeholder="Ins. ID/SSN"
      />
    </div>
  );
};

export default InsuranceID;
