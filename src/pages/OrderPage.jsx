import NavBar from "../components/NavBar";
import { LocationOn } from "@mui/icons-material/";


export default function OrderPage() {
  return (
    <div className="container">
      <p className="text-3xl font-semibold">Appointment List</p>

      <div className="bg-white grid grid-flow-row p-4">
        <p className="text-md font-semibold">Today</p>

        <div className="drop-shadow-none border-0 bg-white">
          <div className="grid grid-flow-col p-4">
            <div>
            <p className="font-bold text-md">Fauna Loa Salon</p>
              <p className="font-medium text-sm">Hair care</p>
            </div>
            <div className="flex justify-end items-center">
              <LocationOn className="text-3xl"/>
            </div>
          </div>
        </div>

        <div className="border-b-2 mb-4"/>
        <p className="text-md font-semibold">Upcoming</p>

        <div className="drop-shadow-none border-0 bg-white">
          <div className="grid grid-flow-col p-4">
            <div>
              <p className="font-bold text-sm">Friday</p>
              <p className="font-bold text-md">Fauna Loa Salon</p>
              <p className="font-medium text-sm">Hair care</p>
            </div>
            <div className="flex justify-end items-center">
              <LocationOn className="text-3xl"/>
            </div>
          </div>
        </div>

        <div className="drop-shadow-none border-0 bg-white">
          <div className="grid grid-flow-col p-4">
            <div>
              <p className="font-bold text-sm">Tomorrow</p>
              <p className="font-bold text-md">Fauna Loa Salon</p>
              <p className="font-medium text-sm">Hair care</p>
            </div>
            <div className="flex justify-end items-center">
              <LocationOn className="text-3xl"/>
            </div>
          </div>
        </div>

      </div>
      <NavBar />
    </div>
  );
}
