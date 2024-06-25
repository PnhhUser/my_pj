import { ReactNode } from "react";

type Children = {
  children: ReactNode;
};

function Authen({ children }: Children) {
  // const token = null;

  return children;
}

export default Authen;
