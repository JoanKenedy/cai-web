import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boton from "./Components/Boton";
import Footer from "./Components/Footer";
import Home from "./Page/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Boton />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
