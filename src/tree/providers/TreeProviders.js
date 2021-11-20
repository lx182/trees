import { createContext, useState, useContext } from "react";
export const TreeContext = createContext({});

const TreeProvider = ({ children }) => {
  const [toggleAlp, setToggleAlp] = useState(false);
  const values = { toggleAlp, setToggleAlp };
  return <TreeContext.Provider value={values}>{children}</TreeContext.Provider>;
};

export const useTreeContext = () => {
  const contextValues = useContext(TreeContext);

  if (!contextValues) {
    throw new Error("useUserContext must be wrapped within a TreeProvider");
  }

  return contextValues;
};

export default TreeProvider;
