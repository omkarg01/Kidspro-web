import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div id="wrapper" className="clearfix">
        {/* <!-- Header --> */}
        <Header></Header>
        

        
        <Footer></Footer>
        <a className="scrollToTop" href="#">
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    </>
  );
}

export default App;
