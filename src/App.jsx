import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div id="wrapper" className="clearfix">
        <Header></Header>

        {/* <!-- Start main-content --> */}
        <div className="main-content-area">
          <Outlet />
        </div>
        {/* <!-- end main-content --> */}

        <Footer></Footer>
        <a className="scrollToTop" href="#">
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    </>
  );
}

export default App;
