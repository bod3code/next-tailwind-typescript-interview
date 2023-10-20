import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Patient = {
  id: string;
  name: string;
  nickname: string;
  isCovered: boolean;
  isSubscriber: boolean;
  insurancePrimacy: "Primary" | "Secondary" | "";
  setId: (patientId: string) => void;
  setName: (patientName: string) => void;
  isNameTouched: boolean;
  setIsNameTouched: (isNameTouched: boolean) => void;
  isNameValid: () => boolean;
  setNickname: (nickname: string) => void;
  setIsCovered: (isCovered: boolean) => void;
  setIsSubscriber: (isSubscriber: boolean) => void;
  setInsurancePrimacy: (insurancePrimacy: "Primary" | "Secondary") => void;
  resetStore: () => void;
};

export type PatientList = {
  patients: Patient[];
  addPatient: (patient: Patient) => void;
};
const usePatientStore = create<CreatePatientStore & PatientList>()(
  persist(
    (set, get) => ({
      id: "",
      setId: (id: string) => {
        set((state: CreatePatientStore) => ({
          ...state,
          id,
        }));
      },
      name: "",
      setName: (name: string) => {
        set((state: CreatePatientStore) => ({
          ...state,
          name,
        }));
      },
      isNameTouched: false,
      setIsNameTouched: (isNameTouched: boolean) => {
        set((state: CreatePatientStore) => ({
          ...state,
          isNameTouched,
        }));
      },
      isNameValid: () => {
        const { name, isNameTouched } = get();
        return (
          (!isNameTouched && name === "") ||
          (name.trim().length !== 0 && name.trim().length >= 8)
        );
      },
      nickname: "",
      setNickname: (nickname: string) => {
        set((state: CreatePatientStore) => ({
          ...state,
          nickname,
        }));
      },
      isCovered: false,
      setIsCovered: (isCovered: boolean) => {
        set((state: CreatePatientStore) => ({
          ...state,
          isCovered,
        }));
      },
      isSubscriber: false,
      setIsSubscriber: (isSubscriber: boolean) => {
        set((state: CreatePatientStore) => ({
          ...state,
          isSubscriber,
        }));
      },
      insurancePrimacy: "Primary",
      setInsurancePrimacy: (insurancePrimacy: "Primary" | "Secondary") => {
        set((state: CreatePatientStore) => ({
          ...state,
          insurancePrimacy,
        }));
      },
      resetStore: () => {
        set({
          id: "",
          name: "",
          isCovered: false,
        });
      },
      patients: [],
      addPatient: (patient: any) => {
        const { patients } = get();
        set((state) => ({
          ...state,
          patients: [...patients, patient],
        }));
      },
    }),
    {
      name: `create-patient-store`,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default usePatientStore;
