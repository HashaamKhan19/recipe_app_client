import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import RequireAuth from "./components/Auth/RequireAuth";
import Create from "./components/Recipe/Create";
import Saved from "./components/Recipe/Saved";
import All from "./components/Recipe/All";
import Header from "./components/Layout";

function App() {
  /* eslint-disable */

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            element={
              <>
                <Header />
                <RequireAuth />
              </>
            }
          >
            <Route path="/" element={<All />} />
            <Route path="/createRecipe" element={<Create />} />
            <Route path="/savedRecipes" element={<Saved />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
