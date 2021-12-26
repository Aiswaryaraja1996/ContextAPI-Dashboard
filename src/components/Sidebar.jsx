import styled from "styled-components";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import DirectionsIcon from "@material-ui/icons/Directions";
import HomeIcon from "@material-ui/icons/Home";
import ChatIcon from "@material-ui/icons/Chat";
import SettingsIcon from "@material-ui/icons/Settings";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

export default function Sidebar() {
  const [theme] = useContext(ThemeContext);

  const Sidenav = styled.div`
    width: 81px;
    height: 100vh;
    background-color: ${ theme === "light" ? "white" : "#16191c"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    > * {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      &:nth-child(1) {
        margin-top: 1rem;
      }
      &:last-child {
        margin-bottom: 1rem;
      }
    }
  `;

  const Line = styled.div`
    width: 100%;
    height: 0.5px;
    background-color: #dadada;
  `;
  return (
    <Sidenav>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4128/4128176.png"
          alt="account"
          height="36"
        />
      </div>
      <div>
        <Line />
        <SignalCellularAltIcon
          style={{ color: "#DADADA", fontSize: 32 }}
        ></SignalCellularAltIcon>
        <Line />
        <DirectionsIcon
          style={{ color: "#DADADA", fontSize: 32 }}
        ></DirectionsIcon>
        <Line />
        <HomeIcon style={{ color: "#DADADA", fontSize: 32 }}></HomeIcon>
        <Line />
        <ChatIcon style={{ color: "#DADADA", fontSize: 32 }}></ChatIcon>
        <Line />
        <SettingsIcon style={{ color: "#DADADA", fontSize: 32 }}></SettingsIcon>
        <Line />
      </div>
      <div>
        <AddCircleIcon
          style={{ color: "#29CB97", fontSize: 36 }}
        ></AddCircleIcon>
      </div>
    </Sidenav>
  );
}
