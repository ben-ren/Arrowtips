import { TitleText } from './components/TitleText';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Posts from './components/pages/Posts';
import Games from './components/pages/Games';
import Projects from './components/pages/Projects';

function App(){
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
  return (
    <div>
      <TitleText text='Arrowtips'/>    {/** text is a dynamic prop variable */}
      <Navbar/>
      <div className='componentPage'>
        {Component}
      </div>
    </div>
  )
}

export default App;