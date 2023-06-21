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
import Form from './components/Form/Form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function App() {
   const [characters, setCharacters] = useState([]);
   
   const [access,setAccess] = useState(false)
   const EMAIL = "admin@admin.com"
   const PASSWORD = "admin123"
   const navigate = useNavigate();

   const login = (userData) =>{
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else alert('Invalid email or password')
   }

   const logout = () => {
      setAccess(false);
      navigate('/');
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

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
   const {pathname} = useLocation();


   return (
      <div className='App'>
         
         {pathname !== "/" && <Nav onSearch={onSearch} random={random}  logout={logout}/>}
         

         <Routes>
            <Route path="/" element={<Form login={login}/>} />

            <Route path="/home" element={<Cards characters={characters} onCLose={onCLose} />} />

            <Route path="/about" element={<About/>} />


            <Route path="/detail/:id" element={<Detail/>} />
            <Route path="*" element={<NotFound />}/>
         </Routes>


      </div>
   );
}

export default App;
