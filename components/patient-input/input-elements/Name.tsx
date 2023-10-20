import { useEffect } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import usePatientStore, { Patient } from "stores/store";

const NameInput = ({ patient }: { patient: Patient }) => {
  const { name, nickname } = patient;
  const { setNickname, setName, isNameTouched, setIsNameTouched } =
    usePatientStore();
  return (
    <>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        maxLength={150}
        onChange={(e) => setName(e.target.value)}
        className={`inline-block p-3 rounded-md h-11 border border-gray-100"
        }`}
        placeholder="Enter name"
      />
      {/* <input
        type="text"
        name="nickname"
        id="nickname"
        value={nickname}
        maxLength={30}
        onChange={(e) => setNickname(e.target.value)}
        className={`inline-block p-3 rounded-md h-11 border border-gray-100 `}
        placeholder="Enter preferred name"
      /> */}
    </>
  );
};

const DisplayName = ({ patient }: { patient: Patient }) => {
  return (
    <>
      <label htmlFor="name" className="inline">
        <UserCircleIcon className="h-6 w-6 inline" />
      </label>
      <div className="text-slate-800 text-sm leading-tight">{patient.name}</div>

      <div className="text-slate-400 text-sm font-normal leading-tight">
        <span className="text-gray-500">{patient.name}</span>({patient.nickname}
        )
      </div>
    </>
  );
};

interface NameProps {
  patient: Patient;
}
const Name = ({ patient }: NameProps) => {
  const { isNameTouched, setIsNameTouched } = usePatientStore();
  useEffect(() => {
    if (patient?.name?.length === 0) {
      setIsNameTouched(false);
    }
  }, [patient, setIsNameTouched]);

  return (
    <div className="">
      <div className="relative mt-2 rounded-md">
        <div className="w-[180px] h-11 justify-start items-center gap-2 inline-flex">
          <div className="grow justify-start items-center gap-2 flex">
            {patient?.name && patient?.nickname && patient?.isNameValid() ? (
              <DisplayName patient={patient} />
            ) : (
              <NameInput patient={patient} />
            )}
          </div>
        </div>

        <div
          className={[
            "absolute",
            "inset-y-0",
            "right-0",
            "pr-3",
            "flex",
            "items-center",
            "pointer-events-none",
          ].join(" ")}
        ></div>
      </div>
      {patient?.name?.length === 0 && patient?.isNameTouched && (
        <p className="mt-2 text-sm text-red-500">Name is required</p>
      )}
    </div>
  );
};

export default Name;
