import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Shared/Nav";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
