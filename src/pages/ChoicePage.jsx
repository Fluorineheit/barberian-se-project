import { useNavigate } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material/";
import { Button } from "@mui/material/";

const barberImg =
  "https://asset.kompas.com/crops/V6ViT5zjwooMiYHjl922Cl5FMOM=/0x0:0x0/750x500/data/photo/2022/06/29/62bc3c5f26d8d.jpg";

export default function ChoicePage() {
  const back = useNavigate();

  {
    return (
      <div className="container pb-2">
        <div className="flex flex-row items-center">
          <Button
            className=""
            onClick={() => {
              back(-1);
            }}
          >
            <ArrowBackIos />
          </Button>
          <p className="text-xl font-semibold text-center">Barbaer Soup</p>
        </div>

        <div className="bg-white grid grid-flow-row p-4 rounded-md gap-4">
          <img src={barberImg} alt="barber" className="rounded-md w-[100%]" />
          <p className="text-sm font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            magnam dolore voluptatibus ipsam ut placeat qui dolorum, architecto
            illum animi.
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <Button variant="contained" className="rounded-xl bg-[#797EF6] text-white normal-case">Products</Button>
            <Button variant="contained" className="rounded-xl bg-[#797EF6] text-white normal-case">Schedule a visit</Button>
            <Button variant="contained" className="rounded-xl bg-[#797EF6] text-white normal-case">Reviews</Button>
            <Button variant="contained" className="rounded-xl bg-[#797EF6] text-white normal-case">Map Location</Button>
          </div>
        </div>
        
        
      </div>
    );
  }
}
