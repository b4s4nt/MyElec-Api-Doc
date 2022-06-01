interface GetAttributeListRequest {
    "connectid": string,
    "attributeset": number,//integer,
    "customerid": string,
    "pagecontrol": {
        "SelectedPage": number,//int,
        "ItemsPerPage": number,//int,
        "PageIndexCount": number,//int,
    },
}
