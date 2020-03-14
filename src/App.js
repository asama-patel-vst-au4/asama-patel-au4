import React from "react";
import Input from "./Components/input";
import Dropdowns from "./Components/dropdowns";
import List from "./Components/List";

function App() {
  return (
    <div style={{ background: "rgb(211, 211, 211)", height: "1600px" }}>
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <Input />
        <Dropdowns />
        <List className="" />
      </div>
    </div>
  );
}

export default App;
