import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { ArrowBackIos } from "@mui/icons-material/";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from "react";


import "leaflet/dist/leaflet.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Maps() {
  const position = [-6.6036887674002385, 106.65770556625411];
  const back = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="container">
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
        <p className="text-3xl font-semibold">Location</p>
      </div>

      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "50vh" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Lokasi.</Popup>
        </Marker>
      </MapContainer>
      <Button
        variant="contained"
        className="bg-[#797EF6] px-10 rounded-xl normal-case"
        onClick={handleOpen}
      >
        Get Coordinate
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </p>
          <p id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </Box>
      </Modal>
    </div>
  );
}
