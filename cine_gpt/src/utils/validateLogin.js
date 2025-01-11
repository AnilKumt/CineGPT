const validateLogin = (email,password)=>{
    const isEmailValid = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    if(!isEmailValid)   return "Email is not Valid.";
    if(!isPasswordValid)    return "Enter Strong Password";

    return null;
    
}

export default validateLogin;