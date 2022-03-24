import './App.css'; 
import Header from "./components/header/headerApp"; 
import Cards from "./components/products/cards";
import product1 from "./components/images/img/est-glu.jpeg";
import product2 from "./components/images/img/est-ab.jpeg";

function App() {

  //props enviar desde json y destructurar

  return (
    <div className="app">
      <Header/> 
      <Cards title="Abdominal" subtitle="ejercitador" imgProduct={product1} notasProduct="Producto de primera calidad, diseñado para mayor ejercitacion gluteos" price={1000} stock={9}/>
      <Cards title="Gluteos" subtitle="ejercitador"   imgProduct={product2} notasProduct="Producto de primera calidad, diseñado para mayor ejercitacion de los abdominal" price={1200} stock={9}/>
      <Cards title="Espalda" subtitle="ejercitador"   notasProduct="producto de 1ra calidad" price={1100} stock={4}/>
      <Cards title="Pecho" subtitle="ejercitador"     notasProduct="producto de 1ra calidad" price={1500} stock={1}/>
    </div>
  );
} 

export default App; 