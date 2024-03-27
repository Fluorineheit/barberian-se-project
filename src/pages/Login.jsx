import {
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import { Email, Visibility } from "@mui/icons-material/";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card variant="outlined" className="p-3 w-80 h-auto rounded-xl">
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
        </CardContent>
        <CardActions className="grid gap-4">
          <TextField
            id="input-with-icon-textfield"
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
            id="input-with-icon-password"
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
          <Button variant="contained" className="bg-[#797EF6] px-10 rounded-xl">
            Login
          </Button>
          <Button onClick={()=>{navigate('/register')}} variant="text" className="px-10 rounded-xl capitalize">
            sign up
          </Button>
          <div className="border-t-2 border-gray-600"></div>
          <Button variant="text" className="capitalize text-gray-500 px-10 rounded-xl">
            forget password
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
