/* import Login from "./components/Login"; */
import Navbar from "./components/Navbar/Navbar";
import Asistencias from "./pages/CalendarioAsistencias/CalendarioAsistencias";
import Router from "./router/Router";
import Footer from "./components/ui/Footer";



function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Asistencias />
      {/* <Login /> */}
      <Footer/>
    </>
  );
}

export default App;
