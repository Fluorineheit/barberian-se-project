import {
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Switch,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { Email, Visibility, Person, Phone } from "@mui/icons-material/";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertDialog from '../components/AlertDialog'

export default function Login() {
  const [emailForm, setEmailForm] = useState("");
  const [phoneNumberForm, setPhoneNumberForm] = useState("");
  const [usernameForm, setUsernameForm] = useState("");
  const [passwordForm, setPasswordForm] = useState("");
  const [confirmPasswordForm, setConfirmPasswordForm] = useState("");
  const [checked, setChecked] = useState(false);
  const [validRegister, setValidRegister] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if(validRegister){
      navigate("/login");
    }
  };

  const handleChangeEmail = (e) => {
    setEmailForm(e.target.value);
  };

  const handleChangePhoneNumber = (e) => {
    setPhoneNumberForm(e.target.value);
  };

  const handleChangeUsername = (e) => {
    setUsernameForm(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPasswordForm(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPasswordForm(e.target.value);
  };

  const registerVerify = () => {
    setAlertMessage("");
    setValidRegister(false);
    if (
      emailForm === "" ||
      passwordForm === "" ||
      confirmPasswordForm === "" ||
      phoneNumberForm === "" ||
      usernameForm === "" ||
      !checked
    ) {
      setAlertMessage("Please fill the form");
      handleClickOpen()
    } else if (passwordForm !== confirmPasswordForm) {
      setAlertMessage("Password and confirmed password must be the same");
      handleClickOpen();
    } else {
      setAlertMessage("Register success");
      setValidRegister(true);
      handleClickOpen();
      
      setEmailForm("");
      setPasswordForm("");
      setConfirmPasswordForm("");
      setPhoneNumberForm("");
      setUsernameForm("");
      setChecked(false);
    }
  }

  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card
        variant="outlined"
        className="p-3 my-5 w-[90%] rounded-xl shadow-lg"
      >
        <CardContent>
          <Typography className="mb-0" variant="h4" gutterBottom>
            Register
          </Typography>
        </CardContent>
        <CardActions className="grid gap-4">
          <TextField
            id="email"
            value={emailForm}
            onChange={handleChangeEmail}
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
          <TextField
            id="username"
            value={usernameForm}
            onChange={handleChangeUsername}
            label="Username"
            className="ml-0"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <TextField
            id="phoneNumber"
            value={phoneNumberForm}
            onChange={handleChangePhoneNumber}
            label="Phone Number"
            type="number"
            className="ml-0"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <TextField
            id="password"
            value={passwordForm}
            onChange={handleChangePassword}
            label="Password"
            type="password"
            className="ml-0"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Visibility />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <TextField
            id="confirmedPassword"
            value={confirmPasswordForm}
            onChange={handleChangeConfirmPassword}
            label="Confirmed password"
            type="password"
            className="ml-0"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Visibility />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <FormControlLabel
            sx={{ "& .MuiTypography-body1": { fontSize: "12px" } }}
            control={<Switch />}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            label="By signing up, you agree to Barberian Terms of Service and Privacy Policy."
          />
          <Button variant="contained" onClick={()=>{registerVerify()}} className="bg-[#797EF6] px-10 rounded-xl">
            Register
          </Button>
          <Button
            onClick={() => {
              navigate("/login");
            }}
            variant="text"
            className="px-10 rounded-xl capitalize"
          >
            sign in
          </Button>
        </CardActions>
      </Card>
      <AlertDialog handleClose={handleClose} alertMessage={alertMessage} open={open}/>
    </div>
  );
}
