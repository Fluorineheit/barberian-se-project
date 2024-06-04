import {
  AccountCircle,
  ArrowBackIos,
  AddAPhoto,
} from "@mui/icons-material/";
import { Button, Rating } from "@mui/material/";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const labels = {
  1: "Poor",
  2: "Fair",
  3: "Good",
  4: "Very Good",
  5: "Excellent",
};

const reviewList = [
  {
    id: 2,
    rating: 3,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, et!",
    user: "alhambra",
    date: "2 days ago",
    images: [],
  },
  {
    id: 3,
    rating: 4,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, et!",
    user: "bruhmiment",
    date: "3 days ago",
    images: [],
  },
  {
    id: 4,
    rating: 4,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, et!",
    user: "makoto",
    date: "3 days ago",
    images: [],
  },
  {
    id: 5,
    rating: 4,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, et!",
    user: "hehe",
    date: "3 days ago",
    images: [],
  },
];

export default function Reviews() {
  const [userComment, setUserComment] = useState("");
  const [value, setValue] = useState(0);
  const [reviews, setReviews] = useState(reviewList);
  const [images, setImages] = useState([]);
  const back = useNavigate();
  const fileInput = useRef(null);

  const getLabelText = (value) => {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  };

  const addReview = () => {
    const newReview = {
      id: Date.now(),
      rating: value,
      review: userComment,
      user: "Yvette Young",
      date: "Just now",
      images: images,
    };

    setReviews([newReview, ...reviews]);
    setUserComment("");
    setValue(0);
    setImages([]);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  const handleProfilePic = () => {
    fileInput.current.click();
  };

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

            <div className="flex flex-wrap gap-2 mt-4 ml-5">
              {images.map((img, index) => (
                <img key={index} src={img} alt="uploaded" className="w-20 h-20 object-cover" />
              ))}
            </div>

            <CardActions className="grid mt-4">
              <div className="d-flex flex-wrap justify-self-end">
                <Button
                  variant="text"
                  onClick={handleProfilePic}
                  className="text-[#797EF6] underline underline-offset-2 m-0"
                >
                  <input
                    type="file"
                    ref={fileInput}
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                    multiple
                  />
                  <AddAPhoto />
                </Button>
                <Button
                  variant="contained"
                  className="bg-[#797EF6] rounded-xl "
                  onClick={addReview}
                >
                  submit
                </Button>
              </div>
            </CardActions>
          </CardContent>
        </Card>

        {reviews.map((review) => (
          <Card key={review.id} variant="outlined" className="rounded-xl p-2">
            <CardContent className="p-0">
              <div className="mt-1 p-2">
                <div className="flex flex-row">
                  <Rating name="read-only" value={review.rating} readOnly />
                  <p style={{ marginLeft: "20px" }}>{review.date}</p>
                </div>
                <Typography className="mt-4" gutterBottom>
                  {review.review}
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {review.images.map((img, index) => (
                    <img key={index} src={img} alt="uploaded" className="w-20 h-20 object-cover" />
                  ))}
                </div>
                <Button
                  className="text-black normal-case"
                  startIcon={<AccountCircle />}
                >
                  {review.user}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
