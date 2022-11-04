import { useContext, createContext, useEffect, useState } from "react";

const AppContext = createContext({ width: null });

const AppProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function calcWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", calcWidth);
    return () => window.removeEventListener("resize", calcWidth);
  }, []);

  const value = { width };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

export const useApp = () => useContext(AppContext);
