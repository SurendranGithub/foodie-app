import toast from "react-hot-toast";

//Login validation
export function loginValidate(values) {;
    const error = emailverify({}, values);
    passwordVerify(error, values);
    return error;
}


//Signup validation
export function signupValidate(values) {
    const error = usernameVerify({}, values);
    emailverify(error, values);
    passwordVerify(error, values);
    return error;
}

/**valide username */
function usernameVerify(error = {}, values) {
    if (!values.name) {
        error.name = toast.error("Name is required");
    } else if (values.name.includes(" ")) {
        error.name = toast.error("Name should not contain spaces");
    } else if (values.name.length < 3) {
        error.name = toast.error("Name must be at least 3 characters long");
    }
    return error;
}

/**validate email */
function emailverify(error = {}, values) {
    if (!values.email) {
        error.email = toast.error("Email is required");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = toast.error("Email is invalid");
    } else if (values.email.includes(" ")) {
        error.email = toast.error("Wrong Email");
    }
    return error;
}

/**validate password */
function passwordVerify(error = {}, values) {
    const specialChars = /[!@#$%^&*.:<>]/;
    if (!values.password) {
        error.password = toast.error("Password is required");
    } else if (values.password.length < 6) {
        error.password = toast.error("Password must be at least 6 characters");
    } else if (!specialChars.test(values.password)) {
        error.password = toast.error(
            "Password must contain at least one special character"
        );
    }
    return error;
}   