import { AccountCircle, ArrowBackIos, Star } from "@mui/icons-material/";
import { Button } from "@mui/material/";
import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Reviews() {
  const back = useNavigate();
  
  return (
    <div className="container pb-2">
        <div className="flex flex-row">
            <div className="flex flex-row items-center">
                <Button
                    className=""
                    onClick={() => {
                    back(-1);
                    }}
                >
                    <ArrowBackIos />
                </Button>
            </div>
            <p className="text-3xl font-semibold">Reviews</p>
        </div>

        <div className="grid grid-cols-1 gap-3 ">
        {Array(6)
          .fill(0)
          .map((_, idx) => (
            <Card key={idx} variant="outlined" className="rounded-xl p-2" onClick={()=>{navigate("/choice")}}>
              <CardContent className="p-0">
                <div className="mt-1 p-2">
                    <div className="flex flex-row">
                        {Array(5).fill(0).map((_, id) => <Star key={id} className="text-yellow-500 text-[16px] text-xl" />)}
                        <p style={{marginLeft: '20px'}}>2 days ago</p>
                    </div>
                  <Typography className="font-semibold mt-4" gutterBottom>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, et!
                  </Typography>
                  <Button className="text-black normal-case" startIcon={<AccountCircle/>}>Haha</Button>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}
