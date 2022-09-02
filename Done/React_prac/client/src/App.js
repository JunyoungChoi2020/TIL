import './App.css';
import {
    Route,
    Routes,
    BrowserRouter,
} from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import NavBar from "./components/views/NavBar/NavBar";
import RegisterBar from "./components/views/RegisterBar/RegisterBar";
import Footer from "./components/views/Footer/Footer";
import Auth from "./components/hoc/auth";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/landing" element={Auth(LandingPage, null)} />
          {/*<Route path="/login" element={Auth(LoginPage, false)} />*/}
            <Route path="/login" element={(LoginPage())} />
          <Route path="/nav" element={Auth(NavBar, null)} />
          <Route path="/register" element={Auth(RegisterBar, false)} />
          <Route path="/footer" element={Auth(Footer, null)} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
