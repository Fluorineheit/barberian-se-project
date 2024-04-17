import { Button } from "@mui/material/";
import BarberLogo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#ECECF3]">
      <img src={BarberLogo} alt="Vite logo" />
      <div className="grid mt-10 gap-4">
        <Button onClick={()=>navigate('/login')} variant="contained" className="bg-[#797EF6] px-20 rounded-xl">
          Login
        </Button>
        <Button onClick={()=>navigate('/register')} variant="text" className="text-black px-20 underline underline-offset-2">
          sign up
        </Button>
      </div>
    </div>
  );
}
