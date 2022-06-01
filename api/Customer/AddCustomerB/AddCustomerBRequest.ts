interface AddCustomerBRequest {
    "connectId": string,
    "customerID": string,
    "name": string,
    "abbrev": string,
    "owner": string,
    "businessNumber": string,
    "ACN": string,
    "accountType": string,
    "currency": string,
    "accountingMethod": string,
    "taxClass": string,
    "billToCustomerID": number, //int
    "restrictToEntity": string,
    "warehouseEntity": string,
    "eCommerceEntity": string,
    "restrictToView": string,
    "address1": string,
    "address2": string,
    "city": string,
    "state": string,
    "postalcode": string,
    "country": string,
    "phone": string,
    "fax": string,
    "email": string,
    "mobile": string,
    "salesID": string,
    "mailout": boolean, //bool
    "messageLine1": string,
    "messageLine2": string,
    "userfield1": string,
    "userfield2": string,
    "userfield3": string,
    "userfield4": string,
    "userfield5": string,
    "userfield6": string,
    "internalUse1": string,
    "internalUse2": string,
    "internalUse3": string,
    "internalUse4": string,
}
//The name field is mandatory.
//
// When changing the restrictToView field, the eCommerceEntity field is mandatory.
//
// When changing the restrictToEntity field, the eCommerceEntity must either equal restrictToEntity, or not be passed. If not passed, the restrictToEntity is used.
//
// You cannot pass a value for both restrictToView and restrictToEntity
