import NavBar from "../components/NavBar";
import { TextField, InputAdornment } from "@mui/material";
import { Search, Star } from "@mui/icons-material/";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

import shop_1 from "../assets/shop_1.png";
import shop_2 from "../assets/shop_2.png";
import shop_3 from "../assets/shop_3.png";
import shop_4 from "../assets/shop_4.png";
import shop_5 from "../assets/shop_5.png";
import shop_6 from "../assets/shop_6.png";
import product_1 from "../assets/product_1.png";
import product_2 from "../assets/product_2.png";
import product_3 from "../assets/product_3.png";
import { Button } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";

const shopImages = [
  {
    img: shop_2,
    title: "The Modern Man",
    distance: "0.2 km",
    rating: "4.9",
    description: "Mencari potongan rambut modern? The Modern Man melayani trendsetter. Kami menawarkan berbagai pilihan potongan rambut dan gaya, termasuk pembentukan janggut, tato rambut, dan layanan pewarnaan. Pesan janji temu Anda secara online untuk pengalaman yang lancar.",
    products: [
      {
        img: product_1,
        title: "Shampoo",
        price: "100.000"
      },
      {
        img: product_2,
        title: "Pomade",
        price: "250.000"
      },
      {
        img: product_3,
        title: "Conditioner",
        price: "90.000"
      },
    ]
  },
  {
    img: shop_6,
    title: "Mos Eisley",
    distance: "1.2 km",
    rating: "3.9",
    description: "Rangkul kecantikan alami Anda di Mos Eisley. Penata rambut kami berspesialisasi dalam menangani semua jenis dan tekstur rambut. Kami menawarkan berbagai perawatan dan layanan untuk mempercantik ikal, gulungan, atau gelombang alami Anda. Jadwalkan konsultasi untuk menciptakan rutinitas perawatan rambut yang dipersonalisasi.",
    products: [
      {
        img: product_1,
        title: "Shampoo",
        price: "100.000"
      },
      {
        img: product_2,
        title: "Pomade",
        price: "250.000"
      },
      {
        img: product_3,
        title: "Conditioner",
        price: "90.000"
      },
    ]
  },
]

export default function SearchPage() {
 const navigate = useNavigate();
 const location = useLocation();
 const service = location.state.service;
 
 const [searchQuery, setSearchQuery] = useState('');

 const filteredShops = shopImages.filter(shop => shop.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="container m-0">
      <div className="flex flex-row items-center">
        <Button onClick={()=>{navigate(-1)}}>
          <ArrowBackIos/>
        </Button>
        <p className="text-3xl font-semibold">{service.title}</p>
        </div>
      <TextField
        id="input-with-icon-password"
        type="text"
        placeholder="search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
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
        {filteredShops.length === 0 && <p className="text-center align-middle">No shop found</p>}
        {filteredShops.map(item => (
          <Card key={item.img} variant="outlined" className="rounded-xl" onClick={()=>{navigate("/choice", {state: {item}})}}>
          <CardContent className="p-0">
            <img src={item.img} />
            <div className="mt-1 p-2">
              <Typography className="font-semibold" gutterBottom>
                {item.title}
              </Typography>
              <div className="grid grid-flow-col text-sm">
                <div>{item.distance}</div>
                <div className="flex flex-row-reverse">
                  <Star className="text-yellow-500 text-[16px]" />
                  <p>{item.rating}</p>
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


