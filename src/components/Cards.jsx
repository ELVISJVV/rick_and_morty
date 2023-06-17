import Card from './Card';

export default function Cards({ characters }) {
   return <div>
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

               // onClose={character.onClose}
               onClose={() => window.alert('Emulamos que se cierra la card')}
               image={character.image}
            />
         })
      }
   </div>;
}
