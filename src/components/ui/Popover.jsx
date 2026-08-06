import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { useTranslation } from "react-i18next";

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { t } = useTranslation();

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        <PriorityHighIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Typography sx={{ p: 2, textAlign: "center" }}>
          {t("These results may vary by 1–2°C compared to Google.")}
        </Typography>
      </Popover>
    </div>
  );
}
