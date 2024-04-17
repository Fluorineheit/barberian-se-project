import { useNavigate } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material/";
import { Button } from "@mui/material/";
import { useLocation } from "react-router-dom";

export default function ChoicePage() {
  const navigate = useNavigate();
  const location = useLocation();

  {
    return (
      <div className="container pb-2">
        <div className="flex flex-row items-center">
          <Button
            className=""
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowBackIos />
          </Button>
          <p className="text-xl font-semibold text-center">Barbaer Soup</p>
        </div>

        <div className="bg-white grid grid-flow-row p-4 rounded-md gap-4">
          <img src={location.state.item.img} alt="barber" className="rounded-md w-[100%]" />
          <p className="text-sm font-semibold">
            {location.state.item.description}
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <Button variant="contained" className="rounded-xl bg-[#797EF6] text-white normal-case" onClick={()=>{navigate('/products')}}>Products</Button>
            <Button variant="contained" className="rounded-xl bg-[#797EF6] text-white normal-case" onClick={()=>{navigate('/schedule')}}>Schedule a visit</Button>
            <Button variant="contained" className="rounded-xl bg-[#797EF6] text-white normal-case" onClick={()=>{navigate('/reviews')}}>Reviews</Button>
            <Button variant="contained" className="rounded-xl bg-[#797EF6] text-white normal-case" onClick={()=>{navigate('/maps')}}>Map Location</Button>
          </div>
        </div>
        
        
      </div>
    );
  }
}
