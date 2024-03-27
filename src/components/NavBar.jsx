import { Home, ContentCut, Search, List, Person } from "@mui/icons-material/";
import { Button } from "@mui/material/";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const currentLocation = useLocation();

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        <Button
          type="button"
          className={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-200  dark:hover:group `}
        >
          <div
            style={{
              color: currentLocation.pathname === "/home" ? "#2563EB" : "gray",
            }}
          >
            <Home className="w-6 h-6 mb-2"/>
            <p className="font-normal text-sm capitalize">Home</p>
          </div>
        </Button>
        <Button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <ContentCut className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400 " />
          <p className="font-normal text-sm capitalize text-gray-500 group-hover:text-blue-600 ">
            Style
          </p>
        </Button>
        <Button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <Search className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <p className="font-normal text-sm capitalize text-gray-500 group-hover:text-blue-600 ">
            Search
          </p>
        </Button>
        <Button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <List className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <p className="font-normal text-sm capitalize text-gray-500 group-hover:text-blue-600 ">
            Order
          </p>
        </Button>
        <Button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <Person className="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <p className="font-normal text-sm capitalize text-gray-500 group-hover:text-blue-600 ">
            Profile
          </p>
        </Button>
      </div>
    </div>
  );
}
