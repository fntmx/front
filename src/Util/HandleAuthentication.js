export function HandleAuthentication(token){
    localStorage.setItem("token", token);
}

/**
 * @return {boolean}
 */
export function CheckAuthentication(){
    const token = localStorage.getItem("token");
    if (token) {
        //token exists, check token expiry, etc.
        return true;
    }

    //No token exists;
    return false;
}