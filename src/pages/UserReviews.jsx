import {
  ArrowBackIos,
} from "@mui/icons-material/";
import { Button, Rating } from "@mui/material/";
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const reviewList = [
  {
    id: 1,
    rating: 5,
    review: "Cukurnya keren rek, model mohawk jabrik slibaw pun bisa rek",
    date: "2 days ago",
    shop: "The Classic Cut",
    service: "Hair cut"
  },
  {
    id: 2,
    rating: 4,
    review: "owalah rek, cukur disini sama mas rusdi dikasih sampo special rek, rambut langsung keriting khas ngawi rek!",
    date: "5 Month ago",
    shop: "The Modern Man",
    service: "Hair Care"
  },
];

export default function UserReviews() {
  const back = useNavigate();

  return (
    <div className="container pb-2">
      <div className="flex flex-row items-center">
          <Button
            className=""
            onClick={() => {
              back(-1);
            }}
          >
            <ArrowBackIos />
          </Button>
        <p className="text-xl font-semibold text-center">Your Reviews</p>
      </div>

      <div className="grid grid-cols-1 gap-3 ">
        {reviewList.map((review) => (
          <Card key={review.id} variant="outlined" className="rounded-xl p-2">
            <CardContent className="p-0">
              <div className="mt-1 p-2">
                <div className="flex flex-row">
                  <Rating name="read-only" value={review.rating} readOnly />
                  <p style={{ marginLeft: "20px" }}>{review.date}</p>
                </div>
                <div className="mt-4">
                  <Typography variant="subtitle1" className="font-bold mb-0" gutterBottom>
                    {review.shop}
                  </Typography>
                  <Typography variant="subtitle2" className="mb-0" gutterBottom>
                    {review.service}
                  </Typography>
                </div>

                <Typography className="font-medium mt-4" gutterBottom>
                  {review.review}
                </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
