// import logo from './logo.svg';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from '../components/Menu';
import '../css/app.css';
import Home from './Home';
import TechnoAdd from './TechnoAdd';
import TechnoList from './TechnoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [technos, setTechnos] = useState([])

  function handleAddTechno(techno) {
    console.log("handleAddTechno",techno)
    setTechnos([...technos, {...techno, technoid: uuidv4()}])
  }

  function handleDeleteTechno(id) {
     setTechnos(technos.filter((tech) => tech.technoid !== id))


  }
  return (
    <>
    <Menu />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<TechnoAdd handleAddTechno={handleAddTechno} />} />
      <Route path='/list' element={<TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno} />} />
    </Routes>
      {/* <Menu />
      <Home />
      <TechnoAdd />
      <TechnoList /> */}
    </>
  );
}

export default App;
