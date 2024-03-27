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
  
  export default function Login() {
    const back = useNavigate();

    return (
      <div className="flex items-center justify-center min-h-screen">
        <Button className="fixed pt-10 top-0 left-0" onClick={()=>{back(-1)}}><ArrowBackIos/></Button>
        <Card variant="outlined" className="p-3 w-[90%] rounded-xl shadow-lg">
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Forget Password
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
            <Button variant="contained" className="bg-[#797EF6] px-10 rounded-xl">
              Forget password
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
  