import {
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Email } from "@mui/icons-material/";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card variant="outlined" className="w-1/2 h-1/2">
        <CardContent>
          <Typography variant="h3" gutterBottom>
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
            variant="standard"
          />
          <TextField
            id="input-with-icon-textfield"
            label="Email"
            className="ml-0"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </CardActions>
      </Card>
    </div>
  );
}
