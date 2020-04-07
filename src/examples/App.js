import React, { Fragment } from "react";
import { LogoIcon, logoList } from "../lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>logo图标</h1>
    <div>传入type</div>

    {
      logoList.map((item, index) => {
        return (
          <div>
            <LogoIcon type={item.name} key={index} />
            <p>{item.name}</p>
          </div>
        )
      })
    }
  </div>
);

export default App;
