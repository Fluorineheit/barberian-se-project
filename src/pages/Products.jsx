import { ArrowBackIos } from "@mui/icons-material";
import { Button, Card, CardContent, CardMedia, Typography  } from "@mui/material/";
import { useNavigate, useLocation } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state.item.products;
  const barberImg =
    "https://asset.kompas.com/crops/V6ViT5zjwooMiYHjl922Cl5FMOM=/0x0:0x0/750x500/data/photo/2022/06/29/62bc3c5f26d8d.jpg";

  return (
    <div className="container pb-2">
      <div className="flex flex-row items-center">
        <Button onClick={()=>{navigate(-1)}}>
          <ArrowBackIos/>
        </Button>
        <p className="text-xl font-semibold ">Products</p>
      </div>

      <div className="grid grid-cols-2 rounded-md gap-4">
        {item.map((it) => (<Card key={it.img}>
            <CardContent className="p-0">
                <CardMedia component="img" image={it.img} alt="barber" className="p-0" />
                <div className="flex flex-col gap-2 p-3">
                    <Typography className="text-sm font-semibold">
                    {it.title}
                    </Typography>
                    <Typography variant="caption" className="text-sm">
                        Rp. {it.price}
                    </Typography>
                </div>
            </CardContent>
        </Card>))}
      </div>
    </div>
  );
}
