import React, { useContext, useState } from "react";

const TherapistContext = React.createContext("");
const UpdateTherapistContext = React.createContext({} as (chosenTherapist: string) => void);

interface ITherapistContextProvider {
  children: React.ReactNode;
}

export function useTherapistContext() {
  return useContext(TherapistContext);
}

export function useUpdateTherapistContext() {
  return useContext(UpdateTherapistContext);
}

const TherapistContextProvider: React.FC<ITherapistContextProvider> = ({
  children,
}) => {
  const [therapist, setTherapist] = useState("");

  const updateTherapist = (chosenTherapist: string) => {
    setTherapist(chosenTherapist);
  };

  return (
    <TherapistContext.Provider value={therapist}>
      <UpdateTherapistContext.Provider value={updateTherapist}>
        {children}
      </UpdateTherapistContext.Provider>
    </TherapistContext.Provider>
  );
};

export default TherapistContextProvider;
