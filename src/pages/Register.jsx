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
import AlertDialog from "../components/AlertDialog";

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
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmedVisible, setIsPasswordConfirmedVisible] =
    useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [passwordConfirmedType, setPasswordConfirmedType] =
    useState("password");

  const termAndConditionMessage = `
  # Barbarian Terms and Conditions

Welcome to Barbarian, a barbershop/salon finder app. By using Barbarian, you agree to comply with and be bound by the following terms and conditions. Please review them carefully. If you do not agree with any of these terms, you are prohibited from using or accessing this app.

## 1. Acceptance of Terms

By accessing and using Barbarian, you accept and agree to be bound by these terms and conditions. These terms apply to all users of the app.

## 2. Changes to Terms

Barbarian reserves the right to modify these terms at any time. Any changes will be effective immediately upon posting. Your continued use of the app after any changes indicates your acceptance of the new terms.

## 3. Use of the App

### 3.1 Eligibility
You must be at least 18 years old to use Barbarian. By using the app, you represent and warrant that you meet this age requirement.

### 3.2 Account Registration
To access certain features of the app, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.

### 3.3 Account Security
You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.

### 3.4 Prohibited Conduct
You agree not to:
- Use the app for any unlawful purpose.
- Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity.
- Interfere with or disrupt the operation of the app or servers or networks connected to the app.
- Engage in any activity that could damage, disable, overburden, or impair the app or interfere with any other party’s use of the app.

## 4. Services

### 4.1 Listing and Booking
Barbarian allows users to find, book, and review barbershops and salons. The app provides a platform for users to connect with barbershops and salons, but it does not guarantee the quality or availability of any services provided by these businesses.

### 4.2 Reviews and Ratings
Users may leave reviews and ratings for barbershops and salons. You agree that all reviews and ratings will be based on your actual experiences. You are prohibited from providing false information or from manipulating the rating system.

## 5. Payment and Fees

### 5.1 Fees
Barbarian may charge fees for certain features or services. Any applicable fees will be disclosed to you prior to your use of the feature or service.

### 5.2 Payment
You agree to pay all applicable fees and charges for your use of the app in accordance with the terms and prices set forth at the time of your use.

## 6. Intellectual Property

### 6.1 Ownership
All content and materials within the app, including but not limited to text, graphics, logos, and software, are the property of Barbarian or its licensors and are protected by intellectual property laws.

### 6.2 License
Barbarian grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the app for personal and non-commercial use only.

## 7. Disclaimers and Limitation of Liability

### 7.1 Disclaimers
Barbarian is provided on an “as is” and “as available” basis. We do not warrant that the app will be uninterrupted, error-free, or free of viruses or other harmful components.

### 7.2 Limitation of Liability
To the maximum extent permitted by law, Barbarian shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
- Your use or inability to use the app.
- Any conduct or content of any third party on the app.
- Any content obtained from the app.
- Unauthorized access, use, or alteration of your transmissions or content.

## 8. Indemnification

You agree to indemnify, defend, and hold harmless Barbarian, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the app or your violation of these terms.

## 9. Governing Law

These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Barbarian operates, without regard to its conflict of law principles.

## 10. Contact Information

If you have any questions about these terms, please contact us at:

Email: support@barbarianapp.com
Address: Barbarian Inc., 1234 Barber Lane, Hairtown, HT 56789

Thank you for using Barbarian! We hope you enjoy our service.

---

By clicking "Accept" or by using the app, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
  `;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (validRegister) {
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
      usernameForm === ""
    ) {
      setAlertMessage("Please fill the form");
      handleClickOpen();
    } else if (passwordForm !== confirmPasswordForm) {
      setAlertMessage("Password and confirmed password must be the same");
      handleClickOpen();
    } else if (!checked) {
      setAlertMessage(
        "Please agree to the terms of service and privacy policy"
      );
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

  const termAndCondition = (
    <div style={{ fontSize: "12px" }}>
      By signing up, you agree to Barberian{" "}
      <span
        style={{ color: "blue" }}
        onClick={() => {
          handleClickOpen(), setAlertMessage(termAndConditionMessage);
        }}
      >
        "Terms of Service and Privacy Policy."
      </span>
      `
    </div>
  );

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
          {/* hehe */}
          <div className="flex flex-row">
            <FormControlLabel
              sx={{ "& .MuiTypography-body1": { fontSize: "12px" } }}
              control={<Switch />}
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
            />
            {termAndCondition}
          </div>
          <Button
            variant="contained"
            onClick={() => {
              registerVerify();
            }}
            className="bg-[#797EF6] px-10 rounded-xl"
          >
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

      <AlertDialog
        handleClose={handleClose}
        alertMessage={alertMessage}
        open={open}
      />
    </div>
  );
}
