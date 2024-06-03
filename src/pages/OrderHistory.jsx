import { useNavigate } from "react-router-dom";
import { LocationOn, ArrowBackIos } from "@mui/icons-material/";
import { Button } from "@mui/material/";

export default function OrderHistory() {

  const navigate = useNavigate();

  return (
    <div className="container">
        <div className="flex flex-row items-center">
          <Button
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowBackIos />
          </Button>
          <p className="text-xl font-semibold text-center">Order History</p>
        </div>

      <div className="bg-white grid grid-flow-row p-4">
        <p className="text-md font-semibold">Yesterday </p>

        <div className="drop-shadow-none border-0 bg-white">
          <div className="grid grid-flow-col p-4">
            <div>
            <p className="font-bold text-md">The Gentleman Cut</p>
              <p className="font-medium text-sm">Hair cut</p>
            </div>
            <div className="flex justify-end items-center">
              <LocationOn onClick={()=>{navigate('/maps')}} className="text-3xl"/>
            </div>
          </div>
        </div>

        <div className="border-b-2 mb-4"/>
        
        <p className="text-md font-semibold">Last Month</p>

        <div className="drop-shadow-none border-0 bg-white">
          <div className="grid grid-flow-col p-4">
            <div>
              <p className="font-bold text-sm">Friday</p>
              <p className="font-bold text-md">Fauna Loa Salon</p>
              <p className="font-medium text-sm">Hair care</p>
            </div>
            <div className="flex justify-end items-center">
              <LocationOn onClick={()=>{navigate('/maps')}} className="text-3xl"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
