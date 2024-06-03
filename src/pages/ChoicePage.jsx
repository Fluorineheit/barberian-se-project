import { useNavigate } from "react-router-dom";
import { ArrowBackIos, Favorite } from "@mui/icons-material/";
import { Button } from "@mui/material/";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function ChoicePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state.item;
  
  const [isFavorite, setIsFavorite] = useState(true);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  {
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
          <p className="text-xl font-semibold text-center">{item.title}</p>
        </div>

        <div className="bg-white grid grid-flow-row p-4 rounded-md gap-4">
        <div className="relative">
          <img src={item.img} alt="barber" className="rounded-md w-[100%]" />
          <div onClick={handleFavorite} className="absolute p-1 top-2 right-2 rounded-full bg-white">
            <Favorite className={isFavorite ? "text-red-500" : "text-grey-500"} />
          </div>
        </div>
          {/* <img src={item.img} alt="barber" className="rounded-md w-[100%]" /> */}
          <p className="text-sm font-semibold">
            {item.description}
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <Button variant="contained" className="rounded-xl bg-[#797EF6] text-white normal-case" onClick={()=>{navigate('/products', { state: { item } })}}>Products</Button>
            <Button variant="contained" className="rounded-xl bg-[#797EF6] text-white normal-case" onClick={()=>{navigate('/schedule')}}>Schedule a visit</Button>
            <Button variant="contained" className="rounded-xl bg-[#797EF6] text-white normal-case" onClick={()=>{navigate('/reviews')}}>Reviews</Button>
            <Button variant="contained" className="rounded-xl bg-[#797EF6] text-white normal-case" onClick={()=>{navigate('/maps')}}>Map Location</Button>
          </div>
        </div>
        
      </div>
    );
  }
}
