import Validator from "validator" ;

import isEmpty from "lodash.isEmpty";


export const validdateSignup=(data)=>{
    let errors={};

    // converty empty fields to an empty String so we can use validator functions

    data.name=data.username ? data.username : "" ;

    data.email=data.email ? data.email :"";

    data.password=data.password  ? data.password : "";
    data.password2 =data.ConfirmPssword ? data.ConfirmPassword : "";


    if(Validator.isEmpty(data.username)){
        errors.username = "username field is required"
    }

    if(Validator.isEmpty(data.email)){
        errors.email= "email field is required";

    }else if (!Validator.isEmail(data.email)) {
        errors.emaim="email is invalid"

    }

    if(Validator.isEmpty(data.password)){
        errors.password= "password field is required"
    }

    if(Validator.isEmpty(data.ConfirmPassword)){
        errors.ConfirmPassword=" confirm password field is required"
    }

    if(!Validator.isLength(data.password, {min:3 , max:30})){
        errors.password=" Password must be at least 3 characters long";
    }

    if(!Validator.equals(data.password,data.ConfirmPassword)){
        errors.ConfirmPassword="password must match"
    }

    return {
        errors,
        isValid:isEmpty(errors),
    }
}
