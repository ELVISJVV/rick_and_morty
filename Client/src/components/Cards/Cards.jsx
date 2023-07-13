import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards({ characters, onCLose }) {
   return <div className={style.cards}>
      <div className={style.cards__container}>
         {

            characters.map((character) => {

               return <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  origin={character.origin}
                  gender={character.gender}


                  onClose={onCLose}
                  image={character.image}
               />
            })
         }
      </div>
   </div>
}
