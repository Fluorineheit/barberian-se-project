import { useNavigate } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material/";
import { Button, Select, MenuItem } from "@mui/material/";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import bca from "../assets/bca.png";
import bri from "../assets/bri.png";
import bni from "../assets/bni.png";

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const [discount, setDiscount] = useState("");
  const [selectedBank, setSelectedBank] = useState(null);
  const price = 30000;

  const calculateDiscountedPrice = () => {
    return price - price * discount;
  };

  const handleChangeDiscount = (event) => {
    setDiscount(event.target.value);
  };

  const handleBankSelect = (bank) => {
    setSelectedBank(bank === selectedBank ? null : bank); 
  };

  const handleNext = () => {
    if (!selectedBank) {
      Swal.fire({
        icon: 'error',
        title: '',
        text: 'Please select a bank to proceed',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Payment Successful',
        text: 'Your payment has been processed successfully.',
      }).then(() => {
        navigate("/order");
      });
    }
  };

  const getBankDetails = (bank) => {
    switch (bank) {
      case "BCA":
        return {
          name: "Bank Central Asia (BCA)",
          accountNumber: "1234567890",
          instructions: "Transfer via ATM or Mobile Banking"
        };
      case "BRI":
        return {
          name: "Bank Rakyat Indonesia (BRI)",
          accountNumber: "0987654321",
          instructions: "Transfer via ATM or Mobile Banking"
        };
      case "BNI":
        return {
          name: "Bank Negara Indonesia (BNI)",
          accountNumber: "1122334455",
          instructions: "Transfer via ATM or Mobile Banking"
        };
      default:
        return null;
    }
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

        <div className="flex flex-row justify-between mt-2">
          <p className="text-md font-semibold">Voucher: </p>
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
            className={`flex flex-col p-2 contained rounded-xl justify-between border-2 ${
              selectedBank === "BCA" ? "border-[#797EF6] border-4" : "border-blue-500" 
            } text-black normal-case cursor-pointer`}
            onClick={() => handleBankSelect("BCA")}
          >
            <div className="flex flex-row justify-between">
              <div className="bg-white grid rounded-md items-center justify-center">
                BCA
              </div>
              <img src={bca} alt="BCA" />
            </div>
            {selectedBank === "BCA" && (
              <div className="mt-2">
                <p className="text-md font-semibold">{getBankDetails("BCA").name}</p>
                <p className="text-sm">Account Number: {getBankDetails("BCA").accountNumber}</p>
                <p className="text-sm">Instructions: {getBankDetails("BCA").instructions}</p>
              </div>
            )}
          </div>

          <div
            className={`flex flex-col p-2 contained rounded-xl justify-between border-2 ${
              selectedBank === "BRI" ? "border-[#797EF6] border-4" : "border-blue-500"
            } text-black normal-case cursor-pointer`}
            onClick={() => handleBankSelect("BRI")}
          >
            <div className="flex flex-row justify-between">
              <div className="bg-white grid rounded-md items-center justify-center">
                BRI
              </div>
              <img src={bri} alt="BRI" />
            </div>
            {selectedBank === "BRI" && (
              <div className="mt-2">
                <p className="text-md font-semibold">{getBankDetails("BRI").name}</p>
                <p className="text-sm">Account Number: {getBankDetails("BRI").accountNumber}</p>
                <p className="text-sm">Instructions: {getBankDetails("BRI").instructions}</p>
              </div>
            )}
          </div>

          <div
            className={`flex flex-col p-2 contained rounded-xl justify-between border-2 ${
              selectedBank === "BNI" ? "border-[#797EF6] border-4" : "border-blue-500"
            } text-black normal-case cursor-pointer`}
            onClick={() => handleBankSelect("BNI")}
          >
            <div className="flex flex-row justify-between">
              <div className="bg-white grid rounded-md items-center justify-center">
                BNI
              </div>
              <img src={bni} alt="BNI" />
            </div>
            {selectedBank === "BNI" && (
              <div className="mt-2">
                <p className="text-md font-semibold">{getBankDetails("BNI").name}</p>
                <p className="text-sm">Account Number: {getBankDetails("BNI").accountNumber}</p>
                <p className="text-sm">Instructions: {getBankDetails("BNI").instructions}</p>
              </div>
            )}
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
    </div>
  );
}