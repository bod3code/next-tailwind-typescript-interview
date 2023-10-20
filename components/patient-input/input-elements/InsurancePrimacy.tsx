import { ChevronDownIcon } from "@heroicons/react/24/solid";
import usePatientStore from "stores/store";

const InsurancePrimacy = () => {
  const { insurancePrimacy, setInsurancePrimacy } = usePatientStore();

  return (
    <div className="">
      <div className="mt-2">
        <select
          name="insurancePrimacy"
          id="insurancePrimacy"
          value={insurancePrimacy}
          onChange={(e) => setInsurancePrimacy(e.target.value)}
          className={`rounded-md w-[85%] border h-11 appearance-none border-gray-100 font-thin 
                         focus:ring-inset text-sm p-2`}
        >
          <option value=""></option>
          <option value="Primary">Primary</option>
          <option value="Secondary">Secondary</option>
        </select>
        <ChevronDownIcon
          className="inline -mx-7 h-4 w-4 text-gray-300"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default InsurancePrimacy;
