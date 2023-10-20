import usePatientStore, { Patient } from "stores/store";

interface IsCoveredProps {
  patient: Patient;
}
const IsCovered = ({ patient }: IsCoveredProps) => {
  const { isCovered, setIsCovered } = usePatientStore();
  return (
    <div className="flex my-6 text-white w-[70px] justify-center">
      <input
        type="checkbox"
        name="isCovered"
        id="isCovered"
        checked={isCovered}
        onChange={() => setIsCovered()}
        className="relative cursor-pointer peer shrink-0 h-4 w-4 appearance-none focus:ring-0 accent-teal border-2 border-[#9DA7BE] rounded-sm checked:bg-teal checked:border-transparent checked:border-0"
      />
      <svg
        className="absolute w-4 h-4 px-0.5 hidden peer-checked:block
        pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

export default IsCovered;
