import logo from './logo.svg';
import './styles/styles.css';
import borderCollie from './media/borderCollie.jpg';
import rhodesian from './media/rhodesian.jpg';

function App() {
  return (
    <div className="App">
        <header>
        <ul className="navbar">
            <li>
                <img src="./media/logo.png" alt="imagen" className="logo"/>
            </li>
            <li><button className="button mainButton">Nuevo Post</button></li>
            <li>
                <div className="buscar"> 
                    <input placeholder="Buscar una raza"/>
                    <i className="fas fa-search button iconoBusqueda"></i>
                </div>
            </li>
            <li> <button className="button secondaryButton">Login</button></li>
            <li> <button className="button mainButton">Registro</button></li>
        </ul>
    </header>
    <main>
        <section>
            <h1>Razas de Perros</h1>
            <ul className="breedCardContainer">
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={borderCollie} alt="Border Collie"/>
                    </div>
                    <span className="breedTitle">Border collie</span>
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={rhodesian} alt="Rhodesian"/>
                    </div>
                    <span className="breedTitle">Rhodesian</span>
                </li>
            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
      
    </div>
  );
}

export default App;
