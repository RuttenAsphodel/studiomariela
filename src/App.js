import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import Inicio from './components/inicio';
import PruebaCiencias from './components/pruebas/ciencias'
import PruebaLenguaje from './components/pruebas/lenguajealternativas';
import PruebaMatematica from './components/pruebas/matematica';
import PruebaMateRandom from './components/pruebas/materandom';
import PruebaLenguajeDesarrollo from './components/pruebas/lenguaje';

import Cuestionario1 from './components/cuestionarios/quiz1';
import Cuestionario2 from './components/cuestionarios/quiz2';
import Cuestionario3 from './components/cuestionarios/quiz3';
import Cuestionario4 from './components/cuestionarios/quiz4';
import Cuestionario5 from './components/cuestionarios/quiz5';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
    <Router>
      <Sidebar position="flex"/>
      <main className="flex-1">
      <Routes>
      
        <Route path="/" element={<Inicio />} />
        <Route path="/ensayolenguaje" element={<PruebaLenguaje />} />
        <Route path="/ensayolenguajedesarrollo" element={<PruebaLenguajeDesarrollo />} />


        <Route path="/ensayociencia" element={<PruebaCiencias />} />
        <Route path="/ensayomatematica" element={<PruebaMatematica />} />
        <Route path="/ensayomaterandom" element={<PruebaMateRandom />} />

        
        <Route path="/cuestionario1" element={<Cuestionario1 />} />
        <Route path="/cuestionario2" element={<Cuestionario2 />} />
        <Route path="/cuestionario3" element={<Cuestionario3 />} />
        <Route path="/cuestionario4" element={<Cuestionario4 />} />
        <Route path="/cuestionario5" element={<Cuestionario5 />} />

      </Routes>      
      </main>  
    </Router>
    </div>
    


  );
}

export default App;
