import NavBar from "../components/NavBar";
import { LocationOn } from "@mui/icons-material/";
import { useNavigate } from "react-router-dom"
import haircare from "../assets/haircare.png";
import hairwash from "../assets/hairwash.png";
import haircut from "../assets/haircut.png";
import hairstyle from "../assets/hairstyle.png";
import haircolouring from "../assets/haircolour.png";
import beardTrimming from "../assets/beardTrimming.png";
import haircut2 from "../assets/haircut2.png";
import shaving from "../assets/shaving.png";

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
  {
    title: "Hair Colouring",
    img: haircolouring,
  },
];

const servicesDataMen = [
  {
    title: "Beard Trimming",
    img: beardTrimming,
  },
  {
    title: "Clean Shaving",
    img: shaving,
  },
  {
    title: "Hair Cut",
    img: haircut2,
  },
  {
    title: "Hair Washing",
    img: hairwash,
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
          // <div key={service.img} className="servicesimg2" onClick={()=>{navigate("/booking", {state: {service}})}}>
          //   <img src={service.img} className="img" />
          //   <div className="div-7">{service.title}</div>
          // </div>
          <div key={service.img} className="servicesimg2" onClick={()=>{
            if (service.img === hairstyle || service.title === "Hair Styling" && service.img === haircut || service.title === "Hair Cut") {
              navigate("/bookingWomen", {state: {service}});
            }
            else if (service.img === haircolouring || service.title === "Hair Colouring") {
              navigate("/bookingWomenColor", {state: {service}});
            }
            else if (service.img === haircare || service.title === "Hair Care") {
              navigate("/bookingWomenCare", {state: {service}});
            }
             else {
              navigate("/booking", {state: {service}});
            }
          }}>
            <img src={service.img} className="img" />
            <div className="div-7">{service.title}</div>
          </div>
        ))}
      </div>

      <div className="subTitle mt-4">For men</div>
      <div className="services-container grid grid-cols-2 gap-4">
        {servicesDataMen.map((service) => (
          <div key={service.img} className="servicesimg2" onClick={()=>{
            if (service.img === beardTrimming || service.title === "Beard Trimming" && service.img === shaving || service.title === "Clean Shaving") {
              navigate("/bookingBeard", {state: {service}});
            }
            else if (service.img === haircut2 || service.title === "Hair Cut") { 
              navigate("/bookingCutMen", {state: {service}});
            }
             else {
              navigate("/booking", {state: {service}});
            }
          }}>
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
