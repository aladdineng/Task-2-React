import React from "react";

const Card = ({ imageLink, name, price }) => {
  return (
    <div
      style={{
        border: "3px black solid",
        width: "20%",
        height: "20%",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          textAlign: "center",
        }}
        src={imageLink}
      ></img>
      <h2 style={{ textAlign: "center" }}>{name}</h2>
      <h5 style={{ textAlign: "center" }}>{price} KD</h5>
    </div>
  );
};

export default Card;
