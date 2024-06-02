import NavBar from "../components/NavBar"
import { Person, Lock, Favorite, Comment, Receipt, SupportAgent, Help, Logout } from "@mui/icons-material/";
import { Button } from "@mui/material/";
import Stack from '@mui/material/Stack';
import AlertDialog from "../components/AlertDialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom"


const profileImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Yvette_performing_in_Hamden%2C_CT_-_2022.jpg/1024px-Yvette_performing_in_Hamden%2C_CT_-_2022.jpg"

export default function Profile() {
    const [open, setOpen] = useState(false);

    const navigate = useNavigate()

    const handleYes = () => {
        navigate('/')
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="container pb-2">
        <div className="flex flex-row items-center">
          <p className="text-3xl font-semibold text-center">Profile</p>
        </div>
        <div className="bg-white grid grid-flow-row p-4 rounded-md gap-4">
            <div className="flex flex-row items-center">
                <img src={profileImage} alt="user profile image"  className="scale-100 object-cover rounded-full w-[80px] h-[80px] mr-4"/>
                <p className="text-md text-center font-semibold">
                    Yvette Young
                </p>
            </div>
            <Stack spacing={2}>
                <Button onClick={()=>{navigate('/manage-account')}} startIcon={<Person />} variant="text" className="justify-start rounded-xl text-black normal-case" >Manage Account</Button>
                <Button startIcon={<Favorite />} variant="text" className="justify-start rounded-xl text-black normal-case" >Your Favorite</Button>
                <Button startIcon={<Comment />} variant="text" className="justify-start rounded-xl text-black normal-case" >Your Review</Button>
                <Button startIcon={<Receipt />} variant="text" className="justify-start rounded-xl text-black normal-case" >Order History</Button>
                <Button startIcon={<Help />} variant="text" className="justify-start rounded-xl text-black normal-case" >Help Center</Button>
                <Button onClick={()=>setOpen(true)} startIcon={<Logout />} variant="text" className="justify-start rounded-xl text-red-500 normal-case" >Logout</Button>
            </Stack>
            {/* flex flex-col gap-4 mt-4 justify-start */}
        </div>
        <AlertDialog handleClose={handleClose} handleYes={handleYes} alertMessage={"Are you sure, you want to logout?"} open={open} isSecondButton={true} redirect={true}/>
        <NavBar />
      </div>
    )
}