interface GetTransactionReturn {
    //Returns a CustomerTransaction dataset containing the requested customer account transaction.
    "CustomerTransaction": {
        //Customer transaction details,
        "TransactionID": number, //int,
        "TransactionDate": Date,//DateTime,
        "Invoice": number, //int,
        "Description": string,
        "Period": number, //int,
        "FinancialYear": number, //int,
        "Age": number, //int,
        "Amount": number, //decimal,
        "Outstanding": number, //decimal,
        "Currency": string,
        "Reference": string,
        "Comment": string,
    },
    "PageInfo": {
        //Paging information,
        "SelectedPage": number, //int,
        "ItemsPerPage": number, //int,
        "PageIndexCount": number, //int,
        "QueryLimit": number, //int,
        //The QueryLimit column records the number of rows searched by the query.
        // This value will be either the maximum query count plus one (ie. ItemsPerPage * PageIndexCount + 1) or the total number of rows that match the query criteria if the maximum number of rows is not available.
        // The QueryLimit value can be used to determine whether additional pages of data are available beyond the current PageIndexCount.
    },
}
