import usePatientStore from "stores/store";

const IsSubscriber = () => {
  const { isSubscriber, setIsSubscriber } = usePatientStore();

  return (
    <div className="">
      {/* <div className="relative mt-2">
        <input
          type="radio"
          name="isSubscriber"
          id="isSubscriber"
          checked={isSubscriber}
          onChange={() => setIsSubscriber(!isSubscriber)}
          className={`rounded-md border-2 border-teal py-1.5 pr-10 shadow placeholder:
             focus:ring-inset sm:text-sm sm:leading-6 ${
               isSubscriber ? "bg-teal" : "bg-white"
             }`}
        />
      </div> */}
      <div
        className="flex w-6 h-6 relative justify-center my-4 mx-auto"
        onClick={() => setIsSubscriber(true)}
      >
        <div className="w-[18px] h-[18px] left-[3px] top-[3px] absolute rounded-full border-2 border-teal" />
        <div className="w-3 h-3 left-[6px] top-[6px] absolute bg-teal rounded-full" />
      </div>
    </div>
  );
};

export default IsSubscriber;
