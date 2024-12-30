import './App.css';
import Header from "./component/Header"
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Work from './component/Work';
import Contact from './component/Contact';
// import Chatbot from './component/Chatbot';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <About/>
      {/* <Chatbot/> */}
      <Skills />
      {/* <Work /> */}
      <Contact />
    </div>
  );
}

export default App;
