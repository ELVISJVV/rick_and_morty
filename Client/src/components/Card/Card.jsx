import style from './Card.module.css';
import { Link } from 'react-router-dom'
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

function Card(props) {

   const [isFav, setIsFav] = useState(false);



   const handleFavorite = () => {

      if (isFav) {
         setIsFav(false);
         props.removeFav(props.id);
      } else {
         setIsFav(true);
         props.addFav(props);
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (



      <div className={style.cards} >
         <div className={style.card__buttons}>


            {

               isFav ? (
                  <button className={style.card__btn} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button className={style.card__btn} onClick={handleFavorite}>🤍</button>
               )
            }
            <button className={style.show__close} onClick={() => {
               props.onClose(props.id)

            }}>X</button>

         </div>
         <div className={style.card__container}>

           

            <Link to={`/detail/${props.id}`} >
               <h1 className={style.card__name}>{props.name}</h1>
            </Link>


            <img src={props.image} alt={`${props.name}`} className={style.card__img} />


         </div>
      </div>



   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);