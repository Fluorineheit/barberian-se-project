import {
  AccountCircle,
  ArrowBackIos,
  Star,
  Search,
} from "@mui/icons-material/";
import { Button, Rating } from "@mui/material/";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const labels = {
  1: "Poor",
  2: "Fair",
  3: "Good",
  4: "Very Good",
  5: "Excellent",
} 

const reviewList = [
  {
    id: 2,
    rating: 3,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, et!",
    user: "alhambra",
    date: "2 days ago",
  },
  {
    id: 3,
    rating: 4,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, et!",
    user: "bruhmiment",
    date: "3 days ago",
  },
  {
    id: 4,
    rating: 4,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, et!",
    user: "makoto",
    date: "3 days ago",
  },
  {
    id: 5,
    rating: 4,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, et!",
    user: "hehe",
    date: "3 days ago",
  }
]

export default function Reviews() {
  const [userComment, setUserComment] = useState("");
  const [value, setValue] = useState(0);
  const [reviews, setReviews] = useState(reviewList);
  const back = useNavigate();

  const getLabelText = (value) => {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }

  const addReview = () => {

    const newReview = {
      id: 1,
      rating: value,
      review: userComment,
      user: "Yvette Young",
      date: "Just now",
    }

    console.log(newReview)

    setReviews([newReview, ...reviews])
    setUserComment("")
    setValue(0)
  }

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
        <Card variant="outlined" className="rounded-xl p-2">
          <CardContent className="grid p-0">
            
            <CardActions className="grid mb-2">
              <Rating
                name="simple-controlled"
                className="justify-self-center text-[40px] mb-2"
                getLabelText={getLabelText}
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              {value !== null && (
              <Typography className="text-center font-semibold" gutterBottom>
                {labels[value]}
              </Typography>
            )}
            </CardActions>

            <TextField
              id="input-review"
              type="text"
              multiline
              maxRows={4}
              placeholder="write a review..."
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
              className="justify-self-center w-[90%]"
              variant="outlined"
            />

            <CardActions className="grid mt-4">
              <Button
                variant="contained"
                className="bg-[#797EF6] rounded-xl justify-self-end"
                onClick={addReview}
              >
                submit
              </Button>
            </CardActions>
          </CardContent>
        </Card>

        {reviews
          .map(review => (
            <Card key={review.id} variant="outlined" className="rounded-xl p-2">
              <CardContent className="p-0">
                <div className="mt-1 p-2">
                  <div className="flex flex-row">
                    <Rating
                      name="read-only"
                      value={review.rating}
                      readOnly
                    />
                    <p style={{ marginLeft: "20px" }}>{review.date}</p>
                  </div>
                  <Typography className=" mt-4" gutterBottom>
                    {review.review}
                  </Typography>
                  <Button
                    className="text-black normal-case"
                    startIcon={<AccountCircle />}
                  >
                    {review.user}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        }
      </div>
    </div>
  );
}
