import NavBar from "../components/NavBar";
import { LocationOn } from "@mui/icons-material/";
import { useNavigate } from "react-router-dom"
import haircare from "../assets/haircare.png";
import hairwash from "../assets/hairwash.png";
import haircut from "../assets/haircut.png";
import hairstyle from "../assets/hairstyle.png";

const servicesData = [
  {
    title: "Hair Care",
    img: haircare,
  },
  {
    title: "Hair Washing",
    img: hairwash,
  },
  {
    title: "Hair Cut",
    img: haircut,
  },
  {
    title: "Hair Styling",
    img: hairstyle,
  },
];

const ServicePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <p className="text-3xl font-semibold">Services</p>
      <div className="subTitle">For women</div>
      <div className="services-container grid grid-cols-2 gap-4">
        {servicesData.map((service) => (
          <div key={service.img} className="servicesimg2" onClick={()=>{navigate("/booking", {state: {service}})}}>
            <img src={service.img} className="img" />
            <div className="div-7">{service.title}</div>
          </div>
        ))}
      </div>

      <div className="subTitle mt-4">For men</div>
      <div className="services-container grid grid-cols-2 gap-4">
        {servicesData.map((service) => (
          <div key={service.img} className="servicesimg2" onClick={()=>{navigate("/booking", {state: {service}})}}>
            <img src={service.img} className="img" />
            <div className="div-7">{service.title}</div>
          </div>
        ))}
      </div>

      <NavBar />
    </div>
  );
};

export default ServicePage;
