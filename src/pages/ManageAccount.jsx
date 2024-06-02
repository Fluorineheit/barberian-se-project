import {
  Card,
  CardActions,
  TextField,
  Select,
  InputAdornment,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Avatar,
} from "@mui/material";
import {
  Email,
  Visibility,
  Person,
  Phone,
  ArrowBackIos,
} from "@mui/icons-material/";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AlertDialog from "../components/AlertDialog";

const profileImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Yvette_performing_in_Hamden%2C_CT_-_2022.jpg/1024px-Yvette_performing_in_Hamden%2C_CT_-_2022.jpg";

export default function ManageAccount() {
  const [emailForm, setEmailForm] = useState("yveyy@gmail.com");
  const [phoneNumberForm, setPhoneNumberForm] = useState("06208471728388");
  const [genderForm, setGenderForm] = useState("Female");
  const [usernameForm, setUsernameForm] = useState("Yvette Young");
  const [passwordForm, setPasswordForm] = useState("");
  const [confirmPasswordForm, setConfirmPasswordForm] = useState("");
  const [validRegister, setValidRegister] = useState(false);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmedVisible, setIsPasswordConfirmedVisible] =
    useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [passwordConfirmedType, setPasswordConfirmedType] =
    useState("password");
  const [profilePic, setProfilePic] = useState(profileImage);
  const fileInput = useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (validRegister) {
      navigate("/profile");
    }
  };

  const handleChangeGender = (e) => {
    setGenderForm(e.target.value);
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
      genderForm === ""
    ) {
      setAlertMessage("Please fill the form");
      handleClickOpen();
    } else if (passwordForm !== confirmPasswordForm) {
      setAlertMessage("Password and confirmed password must be the same");
      handleClickOpen();
    } else {
      setAlertMessage("Profile has been changed successfully");
      setValidRegister(true);
      handleClickOpen();

      setEmailForm("");
      setGenderForm("");
      setPasswordForm("");
      setConfirmPasswordForm("");
      setPhoneNumberForm("");
      setUsernameForm("");
    }
  };

  const passwordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);

    if (isPasswordVisible) {
      setPasswordType("password");
    } else {
      setPasswordType("text");
    }
  };

  const confirmPasswordVisibility = () => {
    setIsPasswordConfirmedVisible(!isPasswordConfirmedVisible);

    if (isPasswordConfirmedVisible) {
      setPasswordConfirmedType("password");
    } else {
      setPasswordConfirmedType("text");
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleProfilePic = () => {
    fileInput.current.click();
  };

  const navigate = useNavigate();
  return (
    <div className="container pb-2">
      <div className="flex flex-row items-center">
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowBackIos />
        </Button>
        <p className="text-xl font-semibold ">Manage Account</p>
      </div>

      <Card variant="outlined" className="p-3 my-5 rounded-xl shadow-lg ">
        <CardActions className="grid gap-4">
          <Avatar
            alt="user profile picture"
            src={profilePic}
            sx={{ width: 90, height: 90, justifySelf: "center" }}
          />
          <Button
            variant="text"
            onClick={handleProfilePic}
            className="text-[#797EF6] underline underline-offset-2 m-0"
          >
            <input
              type="file"
              ref={fileInput}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            Change
          </Button>
          <TextField
            id="email"
            value={emailForm}
            onChange={handleChangeEmail}
            label="Email"
            className="ml-0"
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
          <FormControl className="ml-0">
            <InputLabel>Gender</InputLabel>
            <Select
              id="gender"
              value={genderForm}
              onChange={handleChangeGender}
              label="Gender"
              className="ml-0"
              variant="outlined"
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="password"
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
              ),
            }}
            variant="outlined"
          />
          <TextField
            id="confirmedPassword"
            value={confirmPasswordForm}
            onChange={handleChangeConfirmPassword}
            label="Confirmed password"
            type={passwordConfirmedType}
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
                      confirmPasswordVisibility();
                    }}
                  >
                    {isPasswordConfirmedVisible ? "Hide" : "Show"}
                  </p>
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <Button
            variant="contained"
            onClick={() => {
              registerVerify();
            }}
            className="bg-[#797EF6] px-10 rounded-xl"
          >
            Save
          </Button>
        </CardActions>
      </Card>

      <AlertDialog
        handleClose={handleClose}
        alertMessage={alertMessage}
        open={open}
      />
    </div>
  );
}
