interface AdvancedSearchReturn {
    "CustomerDetail": {
        "CustomerID": string,
        "CustomerAccount": string,
        "Name": string,
        "Abbreviation": string,
        "Address1": string,
        "Address2": string,
        "City": string,
        "State": string,
        "PostalCode": string,

    },
    "PageInfo": {
        "SelectedPage": number,//int,
        "ItemsPerPage": number,//int,
        "PageIndexCount": number,//int,
        "QueryLimit": number,//int,
    },
}
