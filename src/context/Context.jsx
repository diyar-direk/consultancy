import { createContext, useState } from "react";

export const Context = createContext({});

export default function ContextProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "english"
  );

  return (
    <Context.Provider value={{ language, setLanguage }}>
      {children}
    </Context.Provider>
  );
}
