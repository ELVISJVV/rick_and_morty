import { useState } from "react";
import validate from "./validation";
import style from './Form.module.css';
import imageLogin from '../../assets/images/1.png';
import ParticlesBackground from "../Particles/ParticlesBackground";


const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({
            ...userData,
            [property]: value
        });

        setErrors(
            validate({
                ...userData,
                [event.target.name]: event.target.value,
            })
        );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (

        <div className={style.login} >
        <ParticlesBackground/>
            <figure className={style.login__picture}>

                <img src={imageLogin} alt="" className={style.login__img} />
            </figure>

            <form onSubmit={handleSubmit} className={style.login__form}>
                <h2 className={style.login__title}
                >INICIAR SESIÓN</h2>

                {/* <label className={style.login__label} htmlFor="email">EMAIL</label> */}
                <input
                    type="text"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    className={style.login__input}
                    placeholder="Ingresa tu correo" />
                {errors.email && <span>{errors.email}</span>}

                {/* <label className={style.login__label}  htmlFor="password">PASSWORD</label> */}
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    className={style.login__input}
                    placeholder="Ingresa tu contraseña" />
                {errors.password && <span>{errors.password}</span>}

                <button type="submit" className={style.login__cta}>LOGIN</button>
            </form>
        </div>

    );
}

export default Form;