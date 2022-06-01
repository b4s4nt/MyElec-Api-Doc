interface GetInvoicesRequest {
    "connectid": string,
    "pagecontrol": {
        //Page control settings,
        "SelectedPage": number, //int,
        "ItemsPerPage": number, //int,
        "PageIndexCount": number, //int,
    },
}
