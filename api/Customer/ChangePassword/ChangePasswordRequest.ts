interface ChangePasswordRequest {
    "connectid": string,
    "currentpassword": string,
    "newpassword": string,
    "confirmpassword": string,
}
//Passwords must be 6 or more characters in length and must contain at least one numerical character.