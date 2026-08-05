import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useContext } from "react";

import { BackdropContext } from "../context/Context";

export default function SimpleBackdrop() {
  const openBackdrop = useContext(BackdropContext)[0];

  return (
    <div>
      <Backdrop open={openBackdrop}>
        <CircularProgress />
      </Backdrop>
    </div>
  );
}
