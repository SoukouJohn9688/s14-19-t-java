/* import Login from "./components/Login"; */
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Router from "./router/Router";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;
