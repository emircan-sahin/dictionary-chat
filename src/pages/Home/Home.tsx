import { Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Chat from "../../components/Chat";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-row h-screen bg-zinc-900 text-gray-300">
      <div className="w-2/12 flex flex-col h-full">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col h-full">
        <Chat />
      </div>
    </div>
  );
};

export default Home;
