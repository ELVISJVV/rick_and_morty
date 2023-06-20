import style from './Card.module.css';

export default function Card(props) {

   

   return (
      
      <div className={style.card__item} >
         <button className={style.show__close} onClick={()=>{
               props.onClose(props.id)
         }}>X</button>
         <h1 className={style.title}>{props.name}</h1>
         {/* <h2 className={style.card__features}>{props.status}</h2> */}
         <h2 className={style.card__features}>{props.species}</h2>
         <h2 className={style.card__features}>{props.gender}</h2>
         {/* <h2 className={style.card__features}>{props.origin.name}</h2> */}
         
         <img src={props.image} alt={`${props.name} image` }/>
      </div>
   );
}
