import { useState } from "react";
import validate from "./validation";


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

        // validate({
        //     ...userData,
        //     [property]: value},errors,setErrors
        // );
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
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">EMAIL</label>
            <input type="text" name="email" value={userData.email} onChange={handleChange} />
            <span>{errors.email}</span>
            <br />
            <label htmlFor="password">PASSWORD</label>
            <input type="password" name="password" value={userData.password} onChange={handleChange} />
            <span>{errors.password}</span>
            <br />
            <button type="submit" >LOGIN</button>
        </form>
    );
}

export default Form;