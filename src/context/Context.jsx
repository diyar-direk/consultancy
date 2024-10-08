import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext({});

export default function ContextProvider({ children }) {
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("language") || "english"
  );
  const [language, setLanguage] = useState({});
  useEffect(() => {
    axios
      .get(`./${selectedLang && selectedLang}.json`)
      .then((res) => setLanguage(res.data));
  }, [selectedLang]);
  return (
    <Context.Provider value={{ selectedLang, setSelectedLang, language }}>
      {children}
    </Context.Provider>
  );
}
