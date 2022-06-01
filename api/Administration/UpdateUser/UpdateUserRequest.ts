interface UpdateUserRequest {
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
        "Enabled": boolean,
        "TermsAccepted": boolean,
        "Authenticated": boolean,
        "Address1": string,
        "Address2": string,
        "City": string,
        "State": string,
        "PostalCode": string,
        "Country": string,

    },
}

//The Username, Password and Email are mandatory.