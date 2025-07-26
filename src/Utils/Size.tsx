import { useContext } from "react";
import { screenMedia } from "../Contexts/Media";

export const useScreenSize = () => {
  const screen = useContext(screenMedia);

  const screenSize = screen?.width;

  return screenSize;
};
