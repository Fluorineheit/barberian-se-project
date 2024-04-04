import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material/";
import { ArrowBackIos } from "@mui/icons-material/";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function Schedule() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="flex flex-row items-center">
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowBackIos />
        </Button>
        <p className="text-xl font-semibold ">Schedule a visit</p>
      </div>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar className="w-[100%]" />
      </LocalizationProvider>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="text" className="text-black">
          Cancel
        </Button>
        <Button variant="contained" className="text-white bg-[#797EF6]">
          Set Date
        </Button>
      </Stack>
    </div>
  );
}
