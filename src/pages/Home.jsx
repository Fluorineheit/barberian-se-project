import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { ImageList, ImageListItem } from "@mui/material";

export default function Home() {
  return (
    <div className="container">
      <p className="text-3xl font-semibold mb-4">Hai user</p>
      <p>
        You look so good today, but we'll make it even cooler! What do you want
        to do?
      </p>

        <div
          style={{ display: "flex", overflowX: "auto", whiteSpace: "nowrap", gap: "8px"}}
        >
          {adPicture.map((item) => (
            <img
              key={item.img}
              srcSet={`${item.img}`}
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
              style={{ width: '300px', height:'130px',}}
            />
          ))}
        </div>

      <div className="flex mt-4">
        <p className="text-xl font-semibold">Inspiration</p>
      </div>

      <ImageList className="w-full h-full" gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <NavBar />
    </div>
  );
}

const adPicture = [
  {
    img: "src/assets/ad_1.png",
    title: "ad 1"    
  },
  {
    img: "src/assets/ad_2.png",
    title: "ad 2"
  },
  {
    img: "src/assets/ad_3.png",
    title: "ad 3"
  }
]

const itemData = [
  {
    img: "src/assets/model_fem_1.png",
    title: "model female 1",
  },
  {
    img: "src/assets/model_fem_2.png",
    title: "model female  2",
  },
  {
    img: "src/assets/model_fem_3.png",
    title: "model female 3",
  },
  {
    img: "src/assets/model_male_1.png",
    title: "model male 1",
  },
  {
    img: "src/assets/model_male_2.png",
    title: "model male 2",
  },
  {
    img: "src/assets/model_male_3.png",
    title: "model male 3",
  },
];
