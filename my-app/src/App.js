import './css/App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import { BrowserRouter, Routes, Route } from "react-router-dom"; //instal npm react-router-dom terlebih dahulu
import Home from './components/Home';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Banner" element={<Banner />} />
        <Route path="Header" element={<Header/>}/>
      </Routes> 
    </BrowserRouter>
  )
}


export default App;
