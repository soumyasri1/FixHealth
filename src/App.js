import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Consulation from "./components/ConsultatonForm"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultation" element ={<Consulation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;