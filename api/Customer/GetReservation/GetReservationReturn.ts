interface GetReservationReturn {
    //Returns a CustomerReserve type containing customer stock reservation information.
    "ReserveID": string,
    "CustomerID": string,
    "ProductID": string,
    "WarehouseID": string,
    "Quantity": number, //decimal,
    "ExpiryDate": Date,//dateTime,
    "Reference": string,
    "ReserveComment": string,
    "DocumentType": string,
    "DocumentID": string,
    "LineNoDocument": number,//integer,
}

//Valid values for DocumentType include; ‘1’ for Customer Quote, ‘2’ for Sales Inquiry, ‘3’ for Sales Order and ‘’ (blank) for General reservations.
// If a DocumentType is passed, then a valid document must be supplied.
