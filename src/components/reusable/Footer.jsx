
import AppBar from "@mui/material/AppBar";
function Footer() {
    return (
        // <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <AppBar position="fixed" color='primary' sx={{ top: 'auto', bottom: 0 }}>
           Footer
        </AppBar>
        //  {/* <FixedBottomNavigation /> */}
        // </Paper>
    );
};
export default Footer;