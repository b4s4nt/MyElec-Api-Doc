interface UpdateUserBRequest {
    "connectid" : string,
    "newusername" : string,
    "internalUse1" : string,
    "internalUse2" : string,
    "internalUse3" : string,
    "externaluser" : {
        "Username" : string,
        "Password" : string,
        "Email" : string,
        "Location" : string,
        "Role" : string,
        "RequireAuthentication" : boolean,
        "RequireTerms" : boolean,
        "Description" : string,
        "Comment" : string,
        "Site" : string,
        "WebURL" : string,
        "ContactID" : string,
        "DeliveryType" : string,
    },
}

//The Username, Password and Email are mandatory.