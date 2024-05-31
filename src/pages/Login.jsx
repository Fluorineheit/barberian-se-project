import {
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import {useState} from 'react'
import { Email, Visibility } from "@mui/icons-material/";
import { useNavigate,  } from "react-router-dom";
import AlertDialog from '../components/AlertDialog'


export default function Login() {
  const [emailForm, setEmailForm] = useState('');
  const [passwordForm, setPasswordForm] = useState('');
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  const handleChangePassword = (e) => {
    setPasswordForm(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmailForm(e.target.value);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
  }

  function loginVerify() {
    const isEmailValid = validateEmail(emailForm);

    if(emailForm === '' || passwordForm === '') {
      setAlertMessage('Please fill the form');
      setOpen(true);
    } else if (!isEmailValid) {
      setAlertMessage('Email is not valid');
      setOpen(true);
    } else { 
      navigate("/home")
    }
  }

  const passwordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);

    if (isPasswordVisible) {
      setPasswordType("password");
    } else {
      setPasswordType("text");
    }
  };
  

  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card variant="outlined" className="p-3 w-[90%] rounded-xl shadow-lg">
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
        </CardContent>
        <CardActions className="grid gap-4">
          <TextField
            id="input-with-icon-textfield"
            value={emailForm}
            onChange={handleChangeEmail}
            label="Email"
            type="email"
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
            id="input-with-icon-password"
            value={passwordForm}
            onChange={handleChangePassword}
            label="Password"
            type={passwordType}
            className="ml-0"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Visibility />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                   <p
                    onClick={() => {
                      passwordVisibility();
                    }}
                  >
                    {isPasswordVisible ? "Hide" : "Show"}
                  </p>
                </InputAdornment>
              )
            }}
            variant="outlined"
          />
          <Button onClick={()=>{loginVerify()}} variant="contained" className="bg-[#797EF6] px-10 rounded-xl">
            Login
          </Button>
          <Button onClick={()=>{navigate('/register')}} variant="text" className="px-10 rounded-xl capitalize">
            sign up
          </Button>
          <div className="border-t-2 border-gray-600"></div>
          <Button onClick={()=>{navigate('/forgot-password')}} variant="text" className="capitalize text-gray-500 px-10 rounded-xl">
            forget password
          </Button>
        </CardActions>
      </Card>
      <AlertDialog handleClose={handleClose} alertMessage={alertMessage} open={open}/>
    </div>
    
  );
}
