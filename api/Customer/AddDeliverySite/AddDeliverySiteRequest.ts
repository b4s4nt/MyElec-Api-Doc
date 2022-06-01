interface AddDeliverySiteRequest {
    "connectid": string,
    "customerdelivery": {
        "SiteCode": string,
        "Name": string,
        "Address1": string,
        "Address2": string,
        "City": string,
        "State": string,
        "PostalCode": string,
        "Country": string,
        "Contact": string,
        "Phone": string,
        "Fax": string,
        "Email": string,
        "FreightType": string,
        "FreightAcc": string,
        "Carrier": string,
        "Shipping": string,
        "Primary": boolean,
    },
}
//The SiteCode, Name, Address1, City, State, PostalCode, Contact, Phone and Email are mandatory.