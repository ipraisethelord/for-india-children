import { Box, Typography } from "@mui/material";
import { Colors } from "../../../styles/theme";
import useMediaQuery from "@mui/material/useMediaQuery";

import DonatePaypalApp from "../../donate-paypal";

export default function DonatePaypal() {
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  let font = "h6";
  let maxWidth = "300px";
  let marginTop = "4";
  let padding = "2";

  if (isMediumScreen) {
    font = "h5";
    maxWidth = "520px";
    marginTop = "10";
    padding = "4";
  }

  if (isLargeScreen) {
    font = "h5";
    maxWidth = "600px";
    marginTop = "10";
    padding = "5";
  }

  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      alignContent="center"
      sx={{ bgcolor: Colors.light_gray, width: "100%", minHeight: "100vh" }}
    >
      <Box p={padding} sx={{ backgroundColor: "white", maxWidth: maxWidth, marginTop: `${marginTop}px` }}>
        <Typography variant={font} color="#964b00" m={2}>
          By helping build Baptist Academy Group of Schools, you are changing lives and making an impact on the world!
        </Typography>
        <DonatePaypalApp />
      </Box>
    </Box>
  );
}
