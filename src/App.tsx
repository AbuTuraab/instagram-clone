import { useState } from "react";
import "./App.css";
import AppBuilder from "@appbuilder/react";
import useCustomize from "./useCustomize";
import customization from "./newCustomization";
import useCustomizer from "./newCustomization";
import chatCustomizer from "./ChatComponent";

function App() {
  const [count, setCount] = useState(0);
  // useCustomize();
  // useCustomizer();
  chatCustomizer()

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      {<AppBuilder.View />}
    </div>
  );
}

export default App;
