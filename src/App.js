import logo from './logo.svg';
import pikachuImg from './images/Pikachu.webp'
import './App.css';
import './populate';
import populatePokemon from './populate';

function App() {
  return (
    <body>
    
    <header>
        <div className="top-container">
            <h1>PokéDex</h1>
            <b className="text-muted">Is your Pokémon in the Codex? <br></br><br></br> Charmander </b>
            <div className="search-container">
              <input type="text"  id="search_q" placeholder="Search name of Pokémon"/>
              
              <button onClick={populatePokemon} className="btn-search" id="search-btn">
                <i className="search">Search</i>

              </button>
            </div>
        </div>
    </header>
    
    <main id="card-background" className="main-container">
        <div className="header">
            <p className="title">Basic Pokémon</p>
            <b><p id="update-name">Pikachu</p></b>
            <b><p className="hp"><span id="update-hp">HP 100</span></p></b>
            
        </div>
        
        
        <div className="image-box">
            <img id="update-img" src={pikachuImg} alt="Pokemon" srcset=""/>
        </div>

        <div className="abilities">
            <h3>Abilities/Moves:</h3>
            <li id="ability-1">Static</li>
            <li id="ability-2">Lightning-rod</li>
            <li id="ability-3">Mega-punch</li>
        </div>

        <div className="footer-section">
            <b><hr/>Type: </b><span id="update-type"> Electric</span>
            <b> | Height: </b><span id="update-height"> 0.4m</span>
            <b> | Weight: </b><span id="update-weight"> 60kg</span>
        </div>  
        

    </main>

    </body>
  );
}

export default App;
