import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { styled } from "@mui/system";
import { Button, Stack, Modal, Box, Typography  } from "@mui/material/";
import { Transition } from 'react-transition-group';
import { Snackbar } from '@mui/base/Snackbar';
import { ArrowBackIos, Close } from "@mui/icons-material/";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";


export default function Schedule() {
  const navigate = useNavigate();
  const nodeRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [exited, setExited] = useState(true);
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleOnEnter = () => {
    setExited(false);
  };

  const handleOnExited = () => {
    setExited(true);
  };
  
  const handleSetDate = () => {
    setDateOpen(true);
    setOpen(false);
  }

  const handleCloseSetDate = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setDateOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

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
        <DateCalendar
          value={selectedDate}
          onChange={(setDate) => setSelectedDate(setDate)}
          className="w-[100%]"
        />
      </LocalizationProvider>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          onClick={() => navigate(-1)}
          variant="text"
          className="text-black"
        >
          Cancel
        </Button>
        <Button
          onClick={handleOpen}
          variant="contained"
          className="text-white bg-[#797EF6]"
        >
          Set Date
        </Button>
      </Stack>
          
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Do you want to schedule it to {" "}
            <strong>{selectedDate.format("DD MMMM YYYY")}</strong>
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" style={{marginTop: "20px"}}>
            <Button
              onClick={handleClose}
              variant="text"
              style={{ color: "red" }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSetDate}
              variant="contained"
              style={{ color: "white", backgroundColor: "#797EF6" }}
            >
              Set Date
            </Button>
          </Stack>
        </Box>
      </Modal>

      <StyledSnackbar
        autoHideDuration={2300}
        open={dateOpen}
        onClose={handleCloseSetDate}
        exited={exited}
      >
        <Transition
          timeout={{ enter: 400, exit: 400 }}
          in={dateOpen}
          appear
          unmountOnExit
          onEnter={handleOnEnter}
          onExited={handleOnExited}
          nodeRef={nodeRef}
        >
          {(status) => (
            <SnackbarContent
              style={{
                transform: positioningStyles[status],
                transition: 'transform 300ms ease',
              }}
              ref={nodeRef}
            >
              <div className="snackbar-title">Date set at {selectedDate.format("DD MMMM YYYY")}</div>
              <Close onClick={handleCloseSetDate} className="snackbar-close-icon" />
            </SnackbarContent>
          )}
        </Transition>
      </StyledSnackbar>
    </div>
  );
}

const blue = {
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const StyledSnackbar = styled(Snackbar)`
  position: fixed;
  z-index: 5500;
  display: flex;
  bottom: 16px;
  right: 16px;
`;

const SnackbarContent = styled('div')(
  ({ theme }) => `
  position: relative;
  overflow: hidden;
  z-index: 5500;
  display: flex;
  left: auto;
  justify-content: space-between;
  max-width: 560px;
  min-width: 300px;
  background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border-radius: 8px;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: ${
    theme.palette.mode === 'dark'
      ? `0 2px 8px rgb(0 0 0 / 0.5)`
      : `0 2px 8px ${grey[200]}`
  };
  padding: 0.75rem;
  color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;

  & .snackbar-title {
    margin-right: 0.5rem;
  }

  & .snackbar-close-icon {
    cursor: pointer;
    font-size: 10px;
    width: 1.25rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  `,
);

const positioningStyles = {
  entering: 'translateX(0)',
  entered: 'translateX(0)',
  exiting: 'translateX(500px)',
  exited: 'translateX(500px)',
  unmounted: 'translateX(500px)',
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
