import React, { Fragment } from "react";
import { LogoIcon, logoMap } from "../lib";

const App = () => (
  <div style={{ width: 1200, margin: "15px auto" }}>
    <h1>logo图标</h1>
    <div>传入type</div>

    {
      Object.keys(logoMap).map((name, index) => {
        let type = logoMap[name]["list"][0];

        return (
          <div
            style={{
              width: "140px",
              display: "inline-block",
              margin: "20px 10px 10px 0",
              border: "1px solid #e6e6e6",
              textAlign: "center",
              padding: "15px"
            }}
          >
            <LogoIcon type={type} key={index} />
            <p>{name}</p>
          </div>
        )
      })
    }
  </div>
);

export default App;
