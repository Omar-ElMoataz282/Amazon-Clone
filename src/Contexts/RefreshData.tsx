import { createContext, useState } from "react";

interface CartContextType {
  isChanged: boolean;
  setIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartItems = createContext<CartContextType | null>(null);

function StorageDataContext({ children }: { children: React.ReactNode }) {
  const [isChanged, setIsChanged] = useState(false);

  return (
    <CartItems.Provider value={{ isChanged, setIsChanged }}>
      {children}
    </CartItems.Provider>
  );
}

export default StorageDataContext;
