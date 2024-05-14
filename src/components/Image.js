import React from "react";

const Image = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <img
        style={{
          width: "100vw",
          height: "500px",
          display: "flex",
          textAlign: "center",
          objectFit: "cover",
        }}
        src="https://media.blogto.com/articles/2022225-cookies.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70"
      ></img>
    </div>
  );
};

export default Image;
