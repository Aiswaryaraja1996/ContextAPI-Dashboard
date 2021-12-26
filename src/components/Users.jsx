import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

const CardItem = ({ name, level, points, img, place }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2.5rem",
        gap: "0.5rem",
      }}
    >
      <div style={{ display: "flex" }}>
        <img src={img} alt={name} height="36" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "0.5rem",
          }}
        >
          <p>{name}</p>
          <p style={{ fontSize: "12px" }}>{place}</p>
        </div>
      </div>
      <progress
        value={100 - Number(level)}
        max="100"
        style={{ width: "100%" }}
      ></progress>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Professional Level {level}</p>
        <p>{points} Points</p>
      </div>
    </div>
  );
};

export default function Users() {
  const [theme] = useContext(ThemeContext);
  const Card = styled.div`
    width: 452px;
    height: 512px;
    background-color:${ theme === "light" ? "white" : "#292e33"} ;
    border-radius: 5px;
    padding: 1rem;
    color: ${theme === "light" ? "black" : "white"};
    margin: 1.5rem;
  `;

  const Line = styled.div`
    width: 100%;
    height: 0.5px;
    background-color: ${ theme === "light" ? "#EBEDF4" : "#33393f"};
    margin: 1.5rem 0;
  `;
  return (
    <Card>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Active Users</p>
        <p>for August 2019</p>
      </div>
      <div>
        <CardItem
          name="Nrupul Dev"
          level="15"
          points="4723"
          img="https://cdn-icons-png.flaticon.com/512/4128/4128176.png"
          place="Denmark"
        />
      </div>
      <Line />
      <div>
        <CardItem
          name="Nrupul Dev"
          level="15"
          points="4723"
          img="https://cdn-icons-png.flaticon.com/512/4128/4128176.png"
          place="Denmark"
        />
      </div>
      <Line />
      <div>
        <CardItem
          name="Nrupul Dev"
          level="15"
          points="4723"
          img="https://cdn-icons-png.flaticon.com/512/4128/4128176.png"
          place="Denmark"
        />
      </div>
      <Line />
    </Card>
  );
}
