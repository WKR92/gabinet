import React, { useContext, useState } from "react";

const PriceContext = React.createContext(false);
const UpdatePriceContext = React.createContext({} as (highlightPrice: boolean) => void);

interface IPriceContextProvider {
  children: React.ReactNode;
}

export function usePriceContext() {
  return useContext(PriceContext);
}

export function useUpdatePriceContext() {
  return useContext(UpdatePriceContext);
}

const PriceContextProvider: React.FC<IPriceContextProvider> = ({
  children,
}) => {
  const [showPrice, setShowPrice] = useState(false);

  const updatePrice = (highlightPrice: boolean) => {
    setShowPrice(highlightPrice);
  };

  return (
    <PriceContext.Provider value={showPrice}>
      <UpdatePriceContext.Provider value={updatePrice}>
        {children}
      </UpdatePriceContext.Provider>
    </PriceContext.Provider>
  );
};

export default PriceContextProvider;
