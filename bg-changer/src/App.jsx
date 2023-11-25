import { useState } from "react";
import ColorMenu from "./components/ColorMenu";
function App() {
  const [bg, setBg] = useState("black");
  return (
    <div
      style={{
        backgroundColor: `${bg}`,
        width: "100vw",
        height: "100vh",
        padding: "10px",
      }}
    >
      <ColorMenu bgSetter={setBg} />
    </div>
  );
}

export default App;
