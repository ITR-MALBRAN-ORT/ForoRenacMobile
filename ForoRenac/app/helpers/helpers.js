import validator from "validator";

export const isValidateEmail = ( email ) =>{
    return validator.isEmail(email);
}

export const isValidPassword = ( password ) => {
    return validator.isStrongPassword(password);
}

export const isValidRepeatPassword = (password, repeatPassword) =>{
    return validator.equals(password, repeatPassword);
}

export const validLength = (str) => {
    return !validator.isEmpty(str);
}

export const isValidPhone = (num) => {
    return validator.isMobilePhone(num)
}

