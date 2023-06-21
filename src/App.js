import './App.css';
// import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import './normalize.css'
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';


function App() {
   const [characters, setCharacters] = useState([]);

   // const onSearch = () =>{

   //    setCharacters([...characters, example])
   // }

   const onSearch = (id) => {

      

      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         
            
            if (characters.some(character => character.id === data.id)) {
               return alert('¡Este personaje ya está en la lista!')
            }
            if (data.name) {
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

   const NotFound = () => {
      return (
         <div>
            <h1>404</h1>
            <h2>Not Found</h2>
         </div>
      )
   }



   return (
      <div className='App'>
         <Nav onSearch={onSearch} random={random} />
         
         

         <Routes>
            {/* <Route path="/" element={Landing} /> */}

            <Route path="/home" element={<Cards characters={characters} onCLose={onCLose} />} />

            <Route path="/about" element={<About/>} />


            <Route path="/detail/:id" element={<Detail/>} />
            <Route path="*" element={<NotFound />}/>
         </Routes>


      </div>
   );
}

export default App;
