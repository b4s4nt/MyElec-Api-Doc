interface GetTransactionsRequest {
    "connectid": string,
    "pagecontrol": {
        //PageControl: Page control settings
        "SelectedPage": number, //int,
        "ItemsPerPage": number, //int,
        "PageIndexCount": number, //int,
    },
}
