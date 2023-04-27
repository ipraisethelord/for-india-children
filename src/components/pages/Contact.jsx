import React, {useState,  useRef  } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import emailjs from '@emailjs/browser';
import dotenv from 'dotenv';
dotenv.config();
function Contact() {
 
  const [toSend, setToSend] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    message: '',
    user_email: '',
  });
  const [msg, setMsg]= useState("hhh");
  const form = useRef();
 
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value});
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
          setMsg("Your form has been submitted!")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
     <Typography variant="h3">Get in Touch</Typography>
      <Grid>
        <Card style={{ maxWidth: 700, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent >
            <Typography gutterBottom variant="h5" color="success.main">
              {msg}
            </Typography>
          
            <form ref={form} onSubmit={sendEmail}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    name='first_name'
                    label="First Name"
                    variant="outlined"
                    value={toSend.first_name}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    name='last_name'
                    label="Last Name"
                    variant="outlined"
                    value={toSend.last_name}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    name='user_email'
                    label="Email"
                    variant="outlined"
                    value={toSend.user_email}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    name='phone'
                    placeholder="Enter phone number"
                    label="Phone"
                    value={toSend.phone}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                   
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Comments"
                    name='message'
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    value={toSend.message}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
 
export default Contact;