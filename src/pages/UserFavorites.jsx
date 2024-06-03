import { useNavigate } from "react-router-dom";
import { ArrowBackIos, Star, Favorite } from "@mui/icons-material/";
import { Button } from "@mui/material/";
import { useLocation } from "react-router-dom";
import shop_1 from "../assets/shop_1.png";
import shop_2 from "../assets/shop_2.png";
import product_1 from "../assets/product_1.png";
import product_2 from "../assets/product_2.png";
import product_3 from "../assets/product_3.png";
import { useState } from "react";

const shopImages = [
  {
    img: shop_1,
    title: "The Classic Cut",
    distance: "0.2 km",
    rating: "4.8",
    isFavorite: true,
    description:
      "Kembali ke masa lalu di The Classic Cut. Tukang cukur kami yang berpengalaman berspesialisasi dalam potongan rambut tradisional pria, menawarkan hasil pudar yang tajam, pencukuran yang bersih, dan suasana yang bersahabat. Selamat datang!",
    products: [
      {
        img: product_1,
        title: "Shampoo",
        price: "100.000",
      },
      {
        img: product_2,
        title: "Pomade",
        price: "250.000",
      },
      {
        img: product_3,
        title: "Conditioner",
        price: "90.000",
      },
    ],
  },
  {
    img: shop_2,
    title: "The Modern Man",
    distance: "0.2 km",
    rating: "4.9",
    isFavorite: true,
    description:
      "Mencari potongan rambut modern? The Modern Man melayani trendsetter. Kami menawarkan berbagai pilihan potongan rambut dan gaya, termasuk pembentukan janggut, tato rambut, dan layanan pewarnaan. Pesan janji temu Anda secara online untuk pengalaman yang lancar.",
    products: [
      {
        img: product_1,
        title: "Shampoo",
        price: "100.000",
      },
      {
        img: product_2,
        title: "Pomade",
        price: "250.000",
      },
      {
        img: product_3,
        title: "Conditioner",
        price: "90.000",
      },
    ],
  },
];

export default function UserFavorite() {
  const navigate = useNavigate();

  const [favorite, setFavorite] = useState(shopImages);
  
  function handleFavorite(index){
    const newFavorite = [...favorite];
    newFavorite[index].isFavorite = !newFavorite[index].isFavorite;
    setFavorite(newFavorite)
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
          <p className="text-xl font-semibold text-center">Your Favorite</p>
        </div>

        {shopImages.map((item, index) => (
          <div
            key={item.img}
            className="bg-white grid grid-flow-row p-4 rounded-md gap-4"
          >
            <img src={item.img} alt="barber" className="rounded-md w-[100%]" />

            <div className="grid grid-flow-col text-xl">
              <p className="font-semibold">{item.title}</p>
              <div className="flex flex-row-reverse">
                <Star className="text-yellow-500" />
                <p>{item.rating}</p>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <div className="w-10 rounded-full justify-center self-center" onClick={()=>handleFavorite(index)}>
                <Favorite className={item.isFavorite ? "text-red-500" : "text-gray-500"} />
              </div>
              <Button
                variant="contained"
                className="rounded-xl bg-[#797EF6] text-white normal-case w-[100%]"
                onClick={() => {
                  navigate("/choice", { state: { item } });
                }}
              >
                Detail
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
