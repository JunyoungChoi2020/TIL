import './App.css';
import {
    Route,
    Routes,
    BrowserRouter
} from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import NavBar from "./components/views/NavBar/NavBar";
import RegisterBar from "./components/views/RegisterBar/RegisterBar";
import Footer from "./components/views/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/LandingPage" element={LandingPage()}>
            <Route />
          </Route>
          <Route path="/LoginPage" element={LoginPage()}>
            <Route />
          </Route>
          <Route path="/NavBar" element={NavBar()}>
            <Route />
          </Route>
          <Route path="/RegisterBar" element={RegisterBar()}>
            <Route />
          </Route>
          <Route path="/Footer" element={Footer()}>
            <Route />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
