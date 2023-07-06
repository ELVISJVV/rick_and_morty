
const regExEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;


const passwordValidaion = /\d/
/* const validate = (userData, errors, setErrors) => {
    // let errorsObj = {};

    if (!userData.email) {
        setErrors({ ...errors, email: 'Email is required' });
        // errorsObj.email = 'Email is required';

    } else if (userData.email.length > 35) {
        setErrors({ ...errors, email: 'Email needs to be less than 35 characters' });
        // errorsObj.email = 'Email needs to be less than 35 characters';
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
        setErrors({ ...errors, email: 'Email is invalid' });
        // errorsObj.email = 'Email is invalid';
    } else {
        setErrors({ ...errors, email: '' });
    }

    if (userData.password.length < 6 || userData.password.length > 10) {
        setErrors({ ...errors, password: 'Password needs to be between 6 and 10 characters' });
    }
    //     errorsObj.password = 'Password needs to be between 6 and 10 characters';
    else if (!/(?=.*[0-9])/.test(userData.password)) {
        setErrors({ ...errors, password: 'Password needs to be a number' });
    } else {
        setErrors({ ...errors, password: '' });
    }
    //     errorsObj.password = 'Password needs to be a number';
    // }

    // setErrors(errorsObj);
} */

// const validate = (inputs) => {
//     const errors = {};
//     if (!inputs.email) errors.email = "Email is null";

//     if (inputs.password.length < 6 && inputs.password.length > 10) errors.password = "Email contain 6 characters";

//     if (!regExEmail.test(inputs.email)) errors.email = "Email Will be Email";

//     if (!regexPassword.test(inputs.password)) errors.password = "Password ... ";

//     if (inputs.password.length < 6)
//         errors.password = "Password must contain 6 characters";
//     if (!inputs.password) errors.password = "Password is null";

//     return errors;
// };


// const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

const validate = (userData) => {
    const errorsObj = {};
    if (!userData.email) errorsObj.email = 'Email is required';
    // console.log(userData);
    // console.log(userData.email);
    // console.log(object);

    // if (userData.email.length > 35) errorsObj.email = 'Email needs to be less than 35 characters';
    
    if (!regExEmail.test(userData.email)) errorsObj.email = 'Email is invalid';
    

    if (!userData.password) errorsObj.password = "Password is required";

    if (!passwordValidaion.test(userData.password) && userData.password.length !== 0) errorsObj.password = 'Password needs to be a number';

    if ((userData.password.length < 6 && userData.password.length !== 0 ) || userData.password.length > 10) errorsObj.password = 'Password needs to be between 6 and 10 characters';
    



    return errorsObj;
}



export default validate;