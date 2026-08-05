import "./App.css";

import Container from "@mui/material/Container";

import Home from "./components/ui/Home";
import AppProvider from "./components/ui/AppProvider";
import { useTranslation } from "react-i18next";

export default function App() {
  const { ready } = useTranslation();

  if (!ready) return null;
  return (
    <Container maxWidth="sm">
      <AppProvider>
        <Home />
      </AppProvider>
    </Container>
  );
}
