import { createContext, useEffect, useState } from "react";
import type { MediaType } from "../Types/Types";

// eslint-disable-next-line react-refresh/only-export-components
export const screenMedia = createContext<MediaType | undefined>(undefined);

function MediaContext({ children }: { children: React.ReactNode }) {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <screenMedia.Provider value={{ width, setWidth }}>
      {children}
    </screenMedia.Provider>
  );
}

export default MediaContext;
