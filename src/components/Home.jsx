import Sidebar from "./Sidebar";
import styled from "styled-components";
import Users from "./Users";
import { ThemeContext } from "../context/ThemeContextProvider";
import { useContext } from "react";

export default function Home() {
  const [theme, toggleTheme] = useContext(ThemeContext);

  const Container = styled.div`
    display: flex;
    background-color:${theme === "light" ? "#E5E9F2" : "#1f2327"};
    color: ${theme === "light" ? "black" : "white"};
  `;

  const Title = styled.h1`
    color: ${theme === "light" ? "black" : "white"};
  `;

  const Button = styled.button`
    border-style: none;
    outline: none;
    border-radius: 5px;
    height: 40px;
  `;

  return (
    <Container>
      <Sidebar />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "1.5rem",
          }}
        >
          <Title>My Dashboard</Title>
          <Button onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
        </div>

        <Users />
      </div>
    </Container>
  );
}
