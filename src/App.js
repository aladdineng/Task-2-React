import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Image from "./components/Image";
import Card from "./components/Card";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#cbf3f0",
      }}
    >
      {/* title */}
      <Title />

      {/* image store */}
      <Image />

      {/* Card list */}

      {/* Card 1 */}
      <div style={{ display: "flex" }}>
        <Card
          imageLink="https://www.twopeasandtheirpod.com/wp-content/uploads/2021/06/Vanilla-Pudding-Chocolate-Chip-Cookies-13-500x375.jpg"
          name="Hi alaaa"
          price="3763784637846"
        />
        <Card
          imageLink="https://cookieconnection.juliausher.com/fileSendAction/fcType/5/fcOid/495577099007538672/fodoid/495577099007538667/imageType/LARGE/inlineImage/true/image.png"
          name="Cuttteee cokkies"
          price="10"
        />
      </div>
      {/* Card 2 */}
    </div>
  );
}

export default App;
