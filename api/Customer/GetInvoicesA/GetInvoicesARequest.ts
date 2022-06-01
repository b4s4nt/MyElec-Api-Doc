interface GetInvoicesARequest {
    "connectid": string,
    "customerId": string,
    "pagecontrol": {
        //PageControl: Page control settings,
        "SelectedPage": number, //int,
        "ItemsPerPage": number, //int,
        "PageIndexCount": number, //int,
    },
}

//If the customerId parameter has been supplied for a customer based connection this parameter is restricted to be the current customer or a child account of the current customer.