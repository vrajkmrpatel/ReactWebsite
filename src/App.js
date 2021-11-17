// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Footer from "./components/Footer";


function App() {
  // const [text, setText] = useState('Enter text here');
  return (
    <>

    <Navbar title="TextConverter"/>
      <div className="container my-3">
          <TextForm heading ="Enter the Text to analyze"/>
      </div>
      <div className="container my-3">
        <Footer/>
      </div>
    </>
  );
}

export default App;
