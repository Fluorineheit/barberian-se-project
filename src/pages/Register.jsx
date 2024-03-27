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
  } from "@mui/material";
  import { Email, Visibility, Person, Phone } from "@mui/icons-material/";
  import { useNavigate } from "react-router-dom";

  
  export default function Login() {
    const navigate = useNavigate();
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card variant="outlined" className="p-3 w-80 h-[95vh] rounded-xl">
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Register
            </Typography>
          </CardContent>
          <CardActions className="grid gap-4">
          <TextField
              id="email"
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
            <FormControlLabel sx={{ '& .MuiTypography-body1': { fontSize: '12px' } }} control={<Switch />} label="By signing up, you agree to Barberian Terms of Service and Privacy Policy." />
            <Button variant="contained" className="bg-[#797EF6] px-10 rounded-xl">
              Register
            </Button>
            <Button onClick={()=>{navigate('/login')}} variant="text" className="px-10 rounded-xl capitalize">
              sign in
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
  