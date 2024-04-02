import NavBar from "../components/NavBar";
import { TextField, InputAdornment } from "@mui/material";
import { Search, Star } from "@mui/icons-material/";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BarberLogo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";



// delete nanti cuma buat test aja
const barberImg =
  "https://asset.kompas.com/crops/V6ViT5zjwooMiYHjl922Cl5FMOM=/0x0:0x0/750x500/data/photo/2022/06/29/62bc3c5f26d8d.jpg";

export default function SearchPage() {
 const navigate = useNavigate();

  return (
    <div className="container m-0">
      <p className="text-3xl font-semibold">Search</p>
      <TextField
        id="input-with-icon-password"
        type="text"
        placeholder="search"
        className="ml-0"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <div className="grid grid-cols-2 gap-2 ">
        {Array(6)
          .fill(0)
          .map((_, idx) => (
            <Card key={idx} variant="outlined" className="rounded-xl" onClick={()=>{navigate("/choice")}}>
              <CardContent className="p-0">
                <img src={barberImg} />
                <div className="mt-1 p-2">
                  <Typography className="font-semibold" gutterBottom>
                    barbaer soup
                  </Typography>
                  <div className="grid grid-flow-col text-sm">
                    <div>0.2 km</div>
                    <div className="flex flex-row-reverse">
                      <Star className="text-yellow-500 text-[16px]" />
                      <p>4.8</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
      <NavBar />
    </div>
  );
}
