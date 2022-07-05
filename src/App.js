import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Shared/Nav";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Result from "./Pages/Result";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
