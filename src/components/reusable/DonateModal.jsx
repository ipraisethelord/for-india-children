
import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import DonateButton from "../papalDonate/donateForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DonateModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [amount, setAmount] = useState(0.00);
  const handleChange = (e) => {
    setValues(parseInt(e.target.value));
    setAmount(e.target.value);
    console.log(amount);
  };
  const handleSubmit = (e) =>{


  }
  return (
    <div>
      <Button onClick={handleOpen}>Donate now</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form>

        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="number"
          label="Donate Amount "
          variant="outlined"
          value={amount}
          onChange={handleChange}
        />
        <br />
        <br />
        <button >Donate By Paypal</button>

      </form>
       <DonateButton />
        </Box>
      </Modal>
    </div>
  );
}