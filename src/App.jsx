import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Hero from "./components/Hero";
import RequireAuth from "./components/Auth/RequireAuth";

function App() {
  /* eslint-disable */

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Hero />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
