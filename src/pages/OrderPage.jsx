import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { LocationOn } from "@mui/icons-material/";
import { Button, Stack, Modal, Box, Typography } from "@mui/material/";
import { useState } from "react";
import shop_1 from "../assets/shop_1.png";
import shop_2 from "../assets/shop_2.png";

const orderList = [
  {
    id: 1,
    date: "2024-10-12",
    shop: "The Gentleman Salon",
    service: "Hair Care",
    image: shop_1,
  },
  {
    id: 2,
    date: "2024-12-12",
    shop: "The Rusdi Barbershop",
    service: "Haircut",
    image: shop_2,
  },
  {
    id: 3,
    date: "2024-06-03",
    shop: "The Rusda Barbershop",
    service: "Haircut",
    image: shop_2,
  },
];

export default function OrderPage() {
  const [open, setOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState(orderList);

  const today = "2024-06-03";
  const todayOrders = orders.filter((order) => order.date === today);
  const upcomingOrders = orders.filter((order) => order.date > today);
  const selectedOrderDetails = orders.find(
    (order) => order.id === selectedOrder
  );

  const handleOrderClick = (id) => {
    setSelectedOrder(id);
    setOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setOpen(false);
  };

  const cancelOrder = () => {
    const newOrders = orders.filter((order) => order.id !== selectedOrder);
    setOrders(newOrders);
    closeModal();
  };

  const navigate = useNavigate();

  return (
    <div className="container">
      <p className="text-3xl font-semibold">Order List</p>

      <div className="bg-white grid grid-flow-row p-4">
        <p className="text-md font-semibold">Today</p>

        {todayOrders.length === 0 ? (
          <div className="m-4">No orders found.</div>
        ) : (
          todayOrders.map((order) => (
            <div
              onClick={() => handleOrderClick(order.id)}
              key={order.id}
              className="drop-shadow-none border-0 bg-white"
            >
              <div className="grid grid-flow-col py-4 gap-3">
                <div className="flex justify-start items-center">
                  <img
                    src={order.image}
                    style={{
                      width: "60px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="justify-end">
                  <p className="text-sm">{order.date}</p>
                  <p className="font-bold text-md">{order.shop}</p>
                  <p className="font-medium text-sm">{order.service}</p>
                </div>
              </div>
            </div>
          ))
        )}

        <div className="border-b-2 mb-4" />

        <p className="text-md font-semibold">Upcoming</p>

        {upcomingOrders.length === 0 ? (
          <div className="m-4">No orders found.</div>
        ) : (
          upcomingOrders.map((order) => (
            <div
              onClick={() => handleOrderClick(order.id)}
              key={order.id}
              className="drop-shadow-none border-0 bg-white"
            >
              <div className="grid grid-flow-col py-4 gap-3">
                <div className="flex justify-start items-center">
                  <img
                    src={order.image}
                    style={{
                      width: "60px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="justify-end">
                  <p className="text-sm">{order.date}</p>
                  <p className="font-bold text-md">{order.shop}</p>
                  <p className="font-medium text-sm">{order.service}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <NavBar />

      {selectedOrderDetails && (
        <Modal
          open={open}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {selectedOrderDetails.shop}
            </Typography>
            <Typography id="modal-modal-main" sx={{ marginTop: "10px" }}>
              Date: {selectedOrderDetails.date} <br />
              Service: {selectedOrderDetails.service}
            </Typography>
            <Stack
              direction="column"
              spacing={2}
              justifyContent="center"
              style={{ marginTop: "20px" }}
            >
              <Button
                onClick={() => {
                  navigate("/maps");
                }}
                variant="contained"
                className="rounded-xl"
                style={{
                  color: "white",
                  backgroundColor: "#797EF6",
                  textTransform: "none",
                }}
              >
                Map Location
              </Button>
              <Button
                onClick={cancelOrder}
                variant="contained"
                className="rounded-xl "
                style={{
                  color: "white",
                  backgroundColor: "#f52f2f",
                  textTransform: "none",
                }}
              >
                Cancel Order
              </Button>
            </Stack>
          </Box>
        </Modal>
      )}
    </div>
  );
}

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
