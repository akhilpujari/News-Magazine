import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <div
      style={{
        backgroundColor: "#1c1c1c",
        minHeight: "100vh",
        color: "#e0e0e0",
      }}
    >
      <Navbar setCategory={setCategory}></Navbar>
      <NewsBoard category={category}></NewsBoard>
    </div>
  );
}

export default App;
