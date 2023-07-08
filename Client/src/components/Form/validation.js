
const regExEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;



const passwordValidaion = /\d/

const validate = (userData) => {
    const errorsObj = {};
    if (!userData.email) errorsObj.email = 'Email is required';
 
    
    if (!regExEmail.test(userData.email)) errorsObj.email = 'Email is invalid';
    

    if (!userData.password) errorsObj.password = "Password is required";

    if (!passwordValidaion.test(userData.password) && userData.password.length !== 0) errorsObj.password = 'Password needs to be a number';

    if ((userData.password.length < 6 && userData.password.length !== 0 ) || userData.password.length > 10) errorsObj.password = 'Password needs to be between 6 and 10 characters';
    



    return errorsObj;
}



export default validate;