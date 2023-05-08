import { Box } from '@mui/material';
import { Colors } from "../../styles/theme";
const Background = ({ children }) => {
  return (
    <Box
      sx={{
        // backgroundImage: 'url(https://example.com/background.jpg)',
        background:  Colors.light_gray,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 4,
      }}
    >
      {children}
    </Box>
  );
};

export default Background;
