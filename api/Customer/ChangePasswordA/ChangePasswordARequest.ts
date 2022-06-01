interface ChangePasswordARequest {
    "connectSource": string,
    "Username": string,
    "currentpassword": string,
    "newpassword": string,
}
//Passwords must be 6 or more characters in length and must contain at least one numerical character.