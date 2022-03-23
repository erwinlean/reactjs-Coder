import './App.css'; 
import Header from "./components/header/headerApp"; 
import Cards from "./components/cards/cards";
import product1 from "../src/components/cards/img/est-ab.jpeg";
import product2 from "../src/components/cards/img/est-glu.jpeg";
function App() {
  return (
    <div className="app">
      <Header/> 
      <Cards title="Abdominal" subtitle="ejercitador" imgProduct={product1} notasProduct="producto de 1ra calidad" price={1000}/>
      <Cards title="Gluteos" subtitle="ejercitador"   imgProduct={product2} notasProduct="producto de 1ra calidad" price={1200}/>
      <Cards title="Espalda" subtitle="ejercitador"   notasProduct="producto de 1ra calidad" price={1100}/>
      <Cards title="Pecho" subtitle="ejercitador"     notasProduct="producto de 1ra calidad" price={1500}/>
    </div>
  );
} 
export default App; 