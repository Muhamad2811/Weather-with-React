import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

import { LocationContext } from "../context/Context";

export default function BasicSelect() {
  const [location, setLocation] = useContext(LocationContext);

  const handleChange = (event) => {
    setPlace(event.target.value);
  };

  const { t } = useTranslation();

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          sx={{ color: "primary.main" }}
        >
          {t("Location")}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="location"
          onChange={handleChange}
          sx={{ color: "primary.main" }}
          MenuProps={{
            slotProps: {
              paper: {
                sx: {
                  maxHeight: 200,
                },
              },
            },
          }}
        >
          <MenuItem value="Kirdasa">{t("Kirdasa")}</MenuItem>
          <MenuItem value="Giza">{t("Giza")}</MenuItem>
          <MenuItem value="Cairo">{t("Cairo")}</MenuItem>
          <MenuItem value="Riyadh">{t("Riyadh")}</MenuItem>
          <MenuItem value="Abu Dhabi">{t("Abu Dhabi")}</MenuItem>
          <MenuItem value="Dubai">{t("Dubai")}</MenuItem>
          <MenuItem value="Doha">{t("Doha")}</MenuItem>
          <MenuItem value="Kuwait City">{t("Kuwait City")}</MenuItem>
          <MenuItem value="Manama">{t("Manama")}</MenuItem>
          <MenuItem value="Muscat">{t("Muscat")}</MenuItem>
          <MenuItem value="Amman">{t("Amman")}</MenuItem>
          <MenuItem value="Beirut">{t("Beirut")}</MenuItem>
          <MenuItem value="Damascus">{t("Damascus")}</MenuItem>
          <MenuItem value="Baghdad">{t("Baghdad")}</MenuItem>
          <MenuItem value="Jerusalem">{t("Jerusalem")}</MenuItem>
          <MenuItem value="Sanaa">{t("Sanaa")}</MenuItem>
          <MenuItem value="Khartoum">{t("Khartoum")}</MenuItem>
          <MenuItem value="Tripoli">{t("Tripoli")}</MenuItem>
          <MenuItem value="Tunis">{t("Tunis")}</MenuItem>
          <MenuItem value="Algiers">{t("Algiers")}</MenuItem>
          <MenuItem value="Rabat">{t("Rabat")}</MenuItem>
          <MenuItem value="Nouakchott">{t("Nouakchott")}</MenuItem>
          <MenuItem value="Mogadishu">{t("Mogadishu")}</MenuItem>
          <MenuItem value="Djibouti">{t("Djibouti")}</MenuItem>
          <MenuItem value="Moroni">{t("Moroni")}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
