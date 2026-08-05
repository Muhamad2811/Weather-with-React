import { useState } from "react";
import {
  PlaceContext,
  BackdropContext,
  LanguageContext,
} from "../context/Context";

export default function AppProvider({ children }) {
  const placeState = useState("Kirdasa");
  const backdropState = useState(true);
  const languageState = useState("ar");
  return (
    <PlaceContext.Provider value={placeState}>
      <BackdropContext.Provider value={backdropState}>
        <LanguageContext.Provider value={languageState}>
          {children}
        </LanguageContext.Provider>
      </BackdropContext.Provider>
    </PlaceContext.Provider>
  );
}
