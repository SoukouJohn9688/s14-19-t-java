/* import Login from "./components/Login"; */
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Router from "./router/Router";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Home />
      </Router>
      <Footer/>
    </>
  );
}

export default App;
