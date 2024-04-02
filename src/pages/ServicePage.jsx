import NavBar from "../components/NavBar";
import { LocationOn } from "@mui/icons-material/";
import haircare from "../assets/haircare.png";
import hairwash from "../assets/hairwash.png";
import haircut from "../assets/haircut.png";
import hairstyle from "../assets/hairstyle.png";

const ServicePage = () => {
  return (
    <div className="container">
      <p className="text-3xl font-semibold">Services</p>
      <div className="subTitle">For women</div>
      <div class="services-container">
        <div class="servicesimg2">
          <img src={haircare} className="img" />
          <div class="subTitle">Hair Care</div>
        </div>
        <div class="servicesimg2">
          <img src={hairwash} className="img" />
          <div class="div-7">Hair Washing</div>
        </div>
        <div class="servicesimg2">
          <img src={haircut} className="img" />
          <div class="div-7">Hair Cut</div>
        </div>
        <div class="servicesimg2">
          <img src={hairstyle} className="img" />
          <div class="div-7">Hair Styling</div>
        </div>
      </div>

      <div className="subTitle mt-4">For men</div>
      <div class="services-container">
        <div class="servicesimg2">
          <img src={haircare} className="img" />
          <div class="subTitle">Hair Care</div>
        </div>
        <div class="servicesimg2">
          <img src={hairwash} className="img" />
          <div class="div-7">Hair Washing</div>
        </div>
        <div class="servicesimg2">
          <img src={haircut} className="img" />
          <div class="div-7">Hair Cut</div>
        </div>
      </div>

      <NavBar />
    </div>
  );
};

export default ServicePage;
