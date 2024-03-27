import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";


export default function Home() {
  return (
    <div className="flex flex-col p-4 min-h-screen bg-[#ECECF3]">
      <p className="text-4xl font-semibold mb-4">Hai user</p>
      <p>You look so good today, but we'll make it even cooler! What do you want to do?</p>
    
     <NavBar />

    </div>
  );
}
