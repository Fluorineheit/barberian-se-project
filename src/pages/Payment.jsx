import { useNavigate } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material/";
import { Button, Select, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material/";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import bca from "../assets/bca.png";
import bri from "../assets/bri.png";
import bni from "../assets/bni.png";

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const [discount, setDiscount] = useState("");
  const [selectedBank, setSelectedBank] = useState(null);
  const [open, setOpen] = useState(false);
  const price = 30000;

  const calculateDiscountedPrice = () => {
    return price - price * discount;
  };

  const handleChangeDiscount = (event) => {
    setDiscount(event.target.value);
  };

  const handleBankSelect = (bank) => {
    setSelectedBank(bank);
  };

  const handleNext = () => {
    if (!selectedBank) {
      alert("Please select a bank to proceed");
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/order");
  };

  return (
    <div className="container pb-2">
      <div className="flex flex-row items-center">
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          <ArrowBackIos />
        </Button>
        <p className="text-xl font-semibold text-center">Payment</p>
      </div>

      <div className="bg-white grid grid-flow-row p-4 rounded-md gap-4">
        <p className="text-sm font-semibold">Payment Summary</p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <p className="text-sm">Service fee: </p>
            <p className="text-sm">Rp. 30.000</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-sm">Application Fee: </p>
            <p className="text-sm">Rp. 1.000</p>
          </div>

          <div className="flex flex-row justify-between mt-2">
            <p className="text-md font-semibold">Total: </p>
            <p className="text-md font-semibold">Rp. {calculateDiscountedPrice()}</p>
          </div>
        </div>

        <Select
          id="dicount"
          value={discount}
          onChange={handleChangeDiscount}
          className="ml-0 text-black"
          variant="outlined"
        >
          <MenuItem value={0.5}>50% Discount</MenuItem>
        </Select>

        <div className="flex flex-col gap-4 mt-4">
          <p className="text-sm font-semibold">Payment Summary</p>

          <div
            className={`flex flex-row p-2 contained rounded-xl justify-between border-2 ${
              selectedBank === "BCA" ? "border-[#797EF6]" : "border-blue-500"
            } text-black normal-case`}
            onClick={() => handleBankSelect("BCA")}
          >
            <div className="bg-white grid rounded-md  items-center justify-center">
              BCA
            </div>
            <img src={bca} alt="BCA" />
          </div>

          <div
            className={`flex flex-row p-2 contained rounded-xl justify-between border-2 ${
              selectedBank === "BRI" ? "border-[#797EF6]" : "border-blue-500"
            } text-black normal-case`}
            onClick={() => handleBankSelect("BRI")}
          >
            <div className="bg-white grid rounded-md  items-center justify-center">
              BRI
            </div>
            <img src={bri} alt="BRI" />
          </div>

          <div
            className={`flex flex-row p-2 contained rounded-xl justify-between border-2 ${
              selectedBank === "BNI" ? "border-[#797EF6]" : "border-blue-500"
            } text-black normal-case`}
            onClick={() => handleBankSelect("BNI")}
          >
            <div className="bg-white grid rounded-md  items-center justify-center">
              BNI
            </div>
            <img src={bni} alt="BNI" />
          </div>
        </div>
        <Button
          variant="contained"
          className="rounded-xl bg-[#797EF6] text-white normal-case"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Payment Successful"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your payment has been processed successfully.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
