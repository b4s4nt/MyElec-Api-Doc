interface GetInvoiceARequest {
    "connectid" : string,
    "customerId" : string,
    "invoiceid" : string,
}
//If the customerId parameter has been supplied for a customer based connection this parameter is restricted to be the current customer or a child account of the current customer.