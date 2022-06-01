interface GetAttributeListReturn {
    "CustomerAttributes": {
        "AttributeSet": number,//integer,
        "AttributeCode": string,
        "AttributeDescription": string,
        "Comment": string,
    },
    "PageInfo": {
        "SelectedPage": number,//int,
        "ItemsPerPage": number,//int,
        "PageIndexCount": number,//int,
        "QueryLimit": number,//int,
    }
    //The QueryLimit column records the number of rows searched by the query.
    // This value will be either the maximum query count plus one (ie. ItemsPerPage * PageIndexCount + 1) or the total number of rows
    // that match the query criteria if the maximum number of rows is not available.
    // The QueryLimit value can be used to determine whether additional pages of data are available beyond the current PageIndexCount.
}
