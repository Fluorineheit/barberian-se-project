import NavBar from "../components/NavBar"
import { Person, Lock, Favorite, Comment, Receipt, SupportAgent, Help } from "@mui/icons-material/";
import { Button } from "@mui/material/";
import Stack from '@mui/material/Stack';


const profileImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Yvette_performing_in_Hamden%2C_CT_-_2022.jpg/1024px-Yvette_performing_in_Hamden%2C_CT_-_2022.jpg"

export default function Profile() {
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
                <Button startIcon={<Person />} variant="text" className="justify-start rounded-xl text-black normal-case" >Manage Account</Button>
                <Button startIcon={<Lock />} variant="text" className="justify-start rounded-xl text-black normal-case" >Privacy</Button>
                <Button startIcon={<Favorite />} variant="text" className="justify-start rounded-xl text-black normal-case" >Your Favorite</Button>
                <Button startIcon={<Comment />} variant="text" className="justify-start rounded-xl text-black normal-case" >Your Review</Button>
                <Button startIcon={<Receipt />} variant="text" className="justify-start rounded-xl text-black normal-case" >Order History</Button>
                <Button startIcon={<SupportAgent />} variant="text" className="justify-start rounded-xl text-black normal-case" >Chat Live</Button>
                <Button startIcon={<Help />} variant="text" className="justify-start rounded-xl text-black normal-case" >Help Center</Button>
            </Stack>
            {/* flex flex-col gap-4 mt-4 justify-start */}
        </div>

        <NavBar />
      </div>
    )
}