/* import Login from "./components/Login"; */
import Navbar from "./components/Navbar/Navbar";
import Asistencias from "./pages/Asistencias/Asistencias";
import Router from "./router/Router";



function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Asistencias />
      {/* <Login /> */}
    </>
  );
}

export default App;
