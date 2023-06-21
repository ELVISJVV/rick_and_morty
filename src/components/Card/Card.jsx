import style from './Card.module.css';
import { Link } from 'react-router-dom'

export default function Card(props) {



   return (

      <div className={style.card__item} >
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
