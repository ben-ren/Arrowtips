import { TitleText } from './components/TitleText';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Posts from './components/pages/Posts';
import Games from './components/pages/Games';
import Projects from './components/pages/Projects';
import { Route, Routes } from "react-router-dom"

function App(){
  return (
    <div>
      <TitleText text='Arrowtips'/>    {/** text is a dynamic prop variable */}
      <Navbar/>
      <div className='componentPage'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/games" element={<Games/>} />
          <Route path="/Projects" element={<Projects/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;

/** Below code is redundant, was replaced by above react-router-dom code
let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <Home/>
      break;
    case "/about":
      Component = <About/>
      break;
    case "/posts":
      Component = <Posts/>
      break;
    case "/games":
      Component = <Games/>
      break;
    case "/projects":
      Component = <Projects/>
      break;
  }
   */