import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import MapsHomeWorkSharpIcon from "@mui/icons-material/MapsHomeWorkSharp";
import { Typography } from "@mui/material";
import { styled } from "@mui/material";
function Logo() {
  return (
    <>
      <Stack direction="row">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
        >
          <MapsHomeWorkSharpIcon style={{ fontSize: 48 }} />
        </IconButton>
        <Stack
          sx={{ flexGrow: 1, display: { xs: "none", sm: "none", md: "flex" } }}
        >
          <Typography variant="h6" sx={{ letterSpacing: "1px" }}>
            BUILD SCHOOL
          </Typography>
          <Typography variant="h6">For India Children</Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default Logo;
