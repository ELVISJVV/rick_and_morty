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

      <div className={style.card__item} >
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={style.show__close} onClick={() => {
            props.onClose(props.id)
         }}>X</button>
         <Link to={`/detail/${props.id}`} >

            <h1 className={style.title}>{props.name}</h1>
         </Link>
         {/* <h2 className={style.card__features}>{props.status}</h2> */}
         <h2 className={style.card__features}>{props.species}</h2>
         <h2 className={style.card__features}>{props.gender}</h2>
         {/* <h2 className={style.card__features}>{props.origin.name}</h2> */}

         <img src={props.image} alt={`${props.name}`} />
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

export default connect(mapStateToProps,mapDispatchToProps)(Card);