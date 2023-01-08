// ---- IMPORT SECTION


import { useEffect } from "react"; //import the hook
import './App.css';
import SearchIcon from './search.svg';
//

// --- DECLARATION FOR CONSTANTS VARIABLES
const API_URL = 'http://www.omdbapi.com?apikey=3df48025';
const movie1={
    "Title": "Star Wars: Episode V - The Empire Strikes Back",
    "Year": "1980",
    "imdbID": "tt0080684",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg" //"N/A"
  }

// ----- RUN THE APP BY DECLARING A FUNCTIONAL COMPONENT
// ----- This the starting point of the app
const App = () => {


// ------- Api call function declaration
const searchMovies = async(tittle) =>{
    const response = await fetch(`${API_URL}&s=${tittle}`);
    const data = await response.json();
    console.log(data.Search); // Search is the desired section of the json 
}
//------- End Api call function declaration

    // Call the API
    //wanna fetch the data as soon the components loads
    useEffect(() => { //hook
        searchMovies('Star Wars');
    }, []); //use the empty dependecy array(as a second parameter) cause I want to call it at the start.


    // ------------- JSX PART ---------

    return (
        <div className="app">
            <h1>Francis Movie DataBase</h1>
        
            <div className="search">
                <input 
                placeholder="Search for your favorites movies"
                value = "Star Wars"
                onChange={()=>{}}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={()=>{}}
                />
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img 
                        src={movie1.Poster!== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}
                        />
                    </div>
                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;