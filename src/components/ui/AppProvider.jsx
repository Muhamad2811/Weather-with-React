import { useState } from "react";
import {
  LocationContext,
  BackdropContext,
  LanguageContext,
} from "../context/Context";

export default function AppProvider({ children }) {
  const locationState = useState("Kirdasa");
  const backdropState = useState(true);
  const languageState = useState("ar");
  return (
    <LocationContext.Provider value={locationState}>
      <BackdropContext.Provider value={backdropState}>
        <LanguageContext.Provider value={languageState}>
          {children}
        </LanguageContext.Provider>
      </BackdropContext.Provider>
    </LocationContext.Provider>
  );
}
