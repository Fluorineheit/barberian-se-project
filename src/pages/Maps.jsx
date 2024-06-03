import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { ArrowBackIos } from "@mui/icons-material/";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from "react";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Maps() {
  
  const position = [-6.873737796807085, 106.88723938609354];
  const back = useNavigate();
  
  const [open, setOpen] = useState(false);
  const [mapPosition, setMapPosition] = useState(position);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const MapEvents = () => {
    const map = useMapEvents({
      click: (e) => {
        setMapPosition([e.latlng.lat, e.latlng.lng]);
      },
    });

    return null;
  };

  const handleClick = () => {
    window.open(`https://maps.app.goo.gl/vFwechNxEqf5cNkr8`)
  }

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
        <MapEvents />
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
          <p id="modal-modal-title" component="h2" style={{marginBottom: '10px'}}>
            Alert
          </p>
          <p id="modal-modal-description" sx={{ mt: 2 }}>
            Do you want to open the coordinate in google maps?
          </p>
          <Stack style={{marginTop: '10px'}} direction="row" spacing={2} justifyContent="center" >
            <Button onClick={handleClose} variant="text" style={{color: 'black'}}>
              Cancel
            </Button>
            <Button onClick={handleClick} variant="contained" style={{backgroundColor: '#797EF6'}}>
              Yes
            </Button>
        </Stack>
        </Box>
      </Modal>
    </div>
  );
}
