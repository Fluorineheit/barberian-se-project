import NavBar from "../components/NavBar";
import { TextField, InputAdornment } from "@mui/material";
import { Description, Search, Star } from "@mui/icons-material/";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";


const shopImage = [
  {
    img: "src/assets/shop_1.png",
    title: "The Classic Cut",
    distance: "0.2 km",
    rating: "4.8",
    description: "Kembali ke masa lalu di The Classic Cut. Tukang cukur kami yang berpengalaman berspesialisasi dalam potongan rambut tradisional pria, menawarkan hasil pudar yang tajam, pencukuran yang bersih, dan suasana yang bersahabat. Selamat datang!",
    products: [
      {
        img: "src/assets/product_1.png",
        title: "Shampoo",
        price: "100.000"
      },
      {
        img: "src/assets/product_2.png",
        title: "Pomade",
        price: "250.000"
      },
      {
        img: "src/assets/product_3.png",
        title: "Conditioner",
        price: "90.000"
      },
    ]
  },
  {
    img: "src/assets/shop_2.png",
    title: "The Modern Man",
    distance: "0.2 km",
    rating: "4.9",
    description: "Mencari potongan rambut modern? The Modern Man melayani trendsetter. Kami menawarkan berbagai pilihan potongan rambut dan gaya, termasuk pembentukan janggut, tato rambut, dan layanan pewarnaan. Pesan janji temu Anda secara online untuk pengalaman yang lancar.",
    products: [
      {
        img: "src/assets/product_1.png",
        title: "Shampoo",
        price: "100.000"
      },
      {
        img: "src/assets/product_2.png",
        title: "Pomade",
        price: "250.000"
      },
      {
        img: "src/assets/product_3.png",
        title: "Conditioner",
        price: "90.000"
      },
    ]
  },
  {
    img: "src/assets/shop_3.png",
    title: "Rusdi Ngawi Barbarshop",
    distance: "0.2 km",
    rating: "4.6",
    description: "Ayah dan anak, bersatu! Rusdi ngawi Barbarshop menyediakan lingkungan yang nyaman bagi segala usia untuk potong rambut. Tukang cukur kami sabar dan terampil, memastikan potongan sempurna untuk setiap anggota keluarga. Nikmati potong rambut gratis untuk anak di bawah 5 tahun.",
    products: [
      {
        img: "src/assets/product_1.png",
        title: "Shampoo",
        price: "100.000"
      },
      {
        img: "src/assets/product_2.png",
        title: "Pomade",
        price: "250.000"
      },
      {
        img: "src/assets/product_3.png",
        title: "Conditioner",
        price: "90.000"
      },
    ]
  },
  {
    img: "src/assets/shop_4.png",
    title: "Salon Ania",
    distance: "0.3 km",
    rating: "4.3",
    description: "Biarkan rambut Anda menjadi bintang pertunjukan di Salon Ania. Penata rambut kami ahli dalam koreksi warna, ekstensi, dan segala hal yang berhubungan dengan kesehatan rambut. Bersantailah di salon mewah kami dan tinggalkan perasaan percaya diri dan cantik.",
    products: [
      {
        img: "src/assets/product_1.png",
        title: "Pomade",
      },
      {
        img: "src/assets/product_2.png",
        title: "Shampoo",
      },
      {
        img: "src/assets/product_3.png",
        title: "Conditioner",
      },
    ]
  },
  {
    img: "src/assets/shop_5.png",
    title: "Nyalon Salon",
    distance: "0.8 km",
    rating: "4.2",
    description: "Acara khusus akan datang? Nyalon Salon berspesialisasi dalam pembaruan, kepang, dan gaya rambut formal yang menakjubkan. Baik itu pernikahan, prom, atau keluar malam, stylist kami akan menciptakan tampilan yang menarik perhatian. Pesan konsultasi untuk mendiskusikan gaya rambut impian Anda.",
    products: [
      {
        img: "src/assets/product_1.png",
        title: "Pomade",
      },
      {
        img: "src/assets/product_2.png",
        title: "Shampoo",
      },
      {
        img: "src/assets/product_3.png",
        title: "Conditioner",
      },
    ]
  },
  {
    img: "src/assets/shop_6.png",
    title: "Mos Eisley",
    distance: "1.2 km",
    rating: "3.9",
    description: "Rangkul kecantikan alami Anda di Mos Eisley. Penata rambut kami berspesialisasi dalam menangani semua jenis dan tekstur rambut. Kami menawarkan berbagai perawatan dan layanan untuk mempercantik ikal, gulungan, atau gelombang alami Anda. Jadwalkan konsultasi untuk menciptakan rutinitas perawatan rambut yang dipersonalisasi.",
    products: [
      {
        img: "src/assets/product_1.png",
        title: "Pomade",
      },
      {
        img: "src/assets/product_2.png",
        title: "Shampoo",
      },
      {
        img: "src/assets/product_3.png",
        title: "Conditioner",
      },
    ]
  },
]


export default function SearchPage() {
 const navigate = useNavigate();

  return (
    <div className="container m-0">
      <p className="text-3xl font-semibold">Search</p>
      <TextField
        id="input-with-icon-password"
        type="text"
        placeholder="search"
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
        {shopImage
          .map(item => (
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


