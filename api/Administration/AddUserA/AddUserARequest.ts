interface AddUserARequest {
    "connectid": string,
    "externaluser": {
        "Username": string,
        "Password": string,
        "Email": string,
        "Location": string,
        "Role": string,
        "RequireAuthentication": boolean,
        "RequireTerms": boolean,
        "Description": string,
        "Comment": string,
        "Site": string,
        "WebURL": string,
        "ContactID": string,
        "DeliveryType": string,

    },
}

// Username, Password and Email are mandatory