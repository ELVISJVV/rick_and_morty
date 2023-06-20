import './App.css';
// import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import './normalize.css'
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';



function App() {
   const [characters, setCharacters] = useState([]);
   
   // const onSearch = () =>{
      
   //    setCharacters([...characters, example])
   // }

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         
         if (characters.some(character => character.id === data.id) ) {
            alert('¡Este personaje ya está en la lista!');
         } else if (data.name ) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onCLose = (id) => {
      // const newCharacters = characters.filter(function (character) {
      //    return parseInt(id) !==  character.id})
      // setCharacters(newCharacters)
      // filter devuelve un nuevo array con los elementos que cumplan la condición
      setCharacters(characters.filter((character) => parseInt(id) !== character.id))
   }
   const random = Math.floor(Math.random() * (825 - 1)) + 1;
      
      

      
   
   return (
      <div className='App'>
         <Nav onSearch={onSearch} random={random} />
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Cards characters={characters} onCLose={onCLose} />
         
      </div>
   );
}

export default App;
