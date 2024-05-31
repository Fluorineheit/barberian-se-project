import {
    Card,
    CardActions,
    CardContent,
    Typography,
    TextField,
    InputAdornment,
    Button,
  } from "@mui/material";
  import { Email, ArrowBackIos } from "@mui/icons-material/";
  import { useNavigate } from "react-router-dom";
  import { useState } from "react";
  import AlertDialog from "../components/AlertDialog";
  
  export default function ForgetPassword() {
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [emailForm, setEmailForm] = useState("");
    const navigate = useNavigate();

    const handleOpen = () => {
      setOpen(true);
    }

    const validateEmail = (email) => {
      const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return re.test(email);
    }

    const validateForgetEmail = () => {
      setIsValid(false);
      const isEmailValid = validateEmail(emailForm);
      if(emailForm === '' ) {
        setAlertMessage('Please fill the form');
        handleOpen();
      }
      else if (!isEmailValid) {
        setAlertMessage('Email is not valid');
        handleOpen();
      } else {
        setIsValid(true);
        setAlertMessage("Email has been sent to your email");
        handleOpen();
      }
    }

    const handleClose = () => {
      setOpen(false);
      if(isValid){
        navigate("/login");
      }
    }

    return (
      <div className="flex items-center justify-center min-h-screen">
        <Button className="fixed pt-10 top-0 left-0" onClick={()=>{navigate(-1)}}><ArrowBackIos/></Button>
        <Card variant="outlined" className="p-3 w-[90%] rounded-xl shadow-lg">
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Forget Password
            </Typography>
          </CardContent>
          <CardActions className="grid gap-4">
            <TextField
              id="input-with-icon-textfield"
              value={emailForm}
              onChange={(e) => setEmailForm(e.target.value)}
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <Button variant="contained" onClick={validateForgetEmail} className="bg-[#797EF6] px-10 rounded-xl">
              Forget password
            </Button>
          </CardActions>
        </Card>
        <AlertDialog handleClose={handleClose} alertMessage={alertMessage} open={open}/>
      </div>
    );
  }
  