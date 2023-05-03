import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import DonateApp from '../donatePapal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DonateModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [amount, setAmount] = React.useState(0);
  const handleChange = (event) => {
    setAmount(event.target.value);
  };
  return (
    <div>
      <Button onClick={handleOpen}  variant="contained">DONATE</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Make a Donation
          </Typography>
        <DonateApp />
        </Box>
      </Modal>
    </div>
  );
}
