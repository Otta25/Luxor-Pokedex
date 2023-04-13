import "./App.css";
import { Routes,Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import NotFound from "./routes/NotFound";


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
     </Routes>
    </div>
  );
}

export default App;
