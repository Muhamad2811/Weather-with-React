import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import CloudIcon from "@mui/icons-material/Cloud";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useTranslation } from "react-i18next";

import {
  PlaceContext,
  BackdropContext,
  LanguageContext,
} from "../context/Context";
import BasicSelect from "./SelectPlace";
import BasicPopover from "./Popover";
import SimpleBackdrop from "./Backdrob";

export default function Home() {
  let [data, setData] = useState({});

  const place = useContext(PlaceContext)[0];
  const setOpenBackdrop = useContext(BackdropContext)[1];

  const { t, i18n } = useTranslation();
  let [language, setLanguage] = useContext(LanguageContext);
  function handleChangeLanguage() {
    if (i18n.language === "ar") {
      setLanguage("en");
    } else {
      setLanguage("ar");
    }
  }

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    const controller = new AbortController();
    async function getWeather() {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=3c81262cd7464ce292881127260308&q=${place}&lang=${language}`,
          { signal: controller.signal },
        );
        setData({
          nameLocation: response.data.location.name,
          temp: Math.round(response.data.current.temp_c),
          date: response.data.forecast.forecastday[0].date,
          icon: response.data.forecast.forecastday[0].day.condition.icon,
          description: response.data.forecast.forecastday[0].day.condition.text,
          tempMax: Math.round(
            response.data.forecast.forecastday[0].day.maxtemp_c,
          ),
          tempMin: Math.round(
            response.data.forecast.forecastday[0].day.mintemp_c,
          ),
        });
        setOpenBackdrop(false);
      } catch (error) {
        if (error.name !== "CanceledError") {
          console.error(error);
        }
      }
    }

    getWeather();
    return () => controller.abort();
  }, [place, language]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SimpleBackdrop />
      <BasicPopover />
      <Card
        dir={language === "ar" ? "rtl" : "ltr"}
        sx={{
          padding: "10px",
          backgroundColor: "card.main",
          color: "primary.main",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <Stack direction={"row"} sx={{ alignItems: "flex-end", gap: "20px" }}>
          <Typography gutterBottom variant="h2" component="div">
            {t(`${place}`)}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {data.date}
          </Typography>
        </Stack>

        <hr />
        <CardContent>
          <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
            <Box sx={{ width: "50%" }}>
              <Stack direction={"row"} sx={{ alignItems: "center" }}>
                <Typography variant="h1" component="div">
                  {data.temp}
                </Typography>
                <img src={`https:${data.icon}`} alt="weather icon" />
              </Stack>
              <Typography gutterBottom variant="h6" component="div">
                {data.description}
              </Typography>
              <Stack
                direction={"row"}
                sx={{ gap: "10px", alignItems: "center" }}
              >
                <Typography variant="body1" component="div">
                  {t("Minimum")} : {data.tempMin}
                </Typography>
                <div
                  style={{
                    width: "2px",
                    height: "20px",
                    backgroundColor: "white",
                  }}
                ></div>
                <Typography variant="body1" component="div">
                  {t("Maximum")} : {data.tempMax}
                </Typography>
              </Stack>
            </Box>
            <div sx={{ width: "50%" }}>
              <CloudIcon sx={{ fontSize: 170 }} />
            </div>
          </Stack>
        </CardContent>
      </Card>
      <Stack
        direction={"row"}
        sx={{ justifyContent: "space-between", width: "100%" }}
      >
        <Button
          onClick={() => {
            handleChangeLanguage();
          }}
          variant="text"
        >
          {t("Arabic")}
        </Button>
        <BasicSelect />
      </Stack>
    </div>
  );
}
