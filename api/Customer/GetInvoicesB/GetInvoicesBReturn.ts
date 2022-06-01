interface GetInvoicesBReturn {
    // Returns a SalesInvoices dataset containing customer account invoices and paging information.
    "SalesInvoice": {//
        // Customer invoice details,
        "InvoiceID": string,
        "SalesLocation": string,
        "BRN": string,
        "Invoice":  number, //integer,
        "CustomerID": string,
        "CustomerAccount": string,
        "SalesOrder": string,
        "CustomerPurchaseOrder": string,
        "DeliveryName": string,
        "DeliveryAddress1": string,
        "DeliveryAddress2": string,
        "DeliveryCity": string,
        "DeliveryState": string,
        "DeliveryPostalCode": string,
        "DeliveryCountry": string,
        "InvoiceDate":  Date, //datetime,
        "TransactionType": string,
        "SalesRep":  number, //integer,
        "AllocatedInvoiceID": string,
        "Terms":  number, //integer,
        "CurrencyCode": string,
        "ExtendedTotalEx":  number, //decimal,
        "TaxTotal":  number, //decimal,
        "ExtendedTotalInc":  number, //decimal,
        "FreightType": string,
        "FreightAccount": string,
        "Carrier": string,
        "ConsignmentNote": string,
        "Special1": string,
        "Special2": string,
        "Cartons": string,
        "Cubic": string,
        "Weight": string,
        "Comment": string,
        "CreditNote": boolean,
        "CreditReference": string,
        "DueDate":  Date, //datetime,
        "InternalUse1": string,
        "InternalUse2": string,
        "InternalUse3": string,

        //The DueDate column is only available using the following web services: Customer.GetInvoicesB, Customer.SearchInvoicesB and Customer.SearchInvoicesParent.
        // CustomerAccount column is only available using the Customer.SearchInvoicesParent webservice.
    },

    "PageInfo": {
        //Paging information,
        "SelectedPage": number, //int,
        "ItemsPerPage": number, //int,
        "PageIndexCount": number, //int,
        "QueryLimit": number, //int,
        //The QueryLimit column records the number of rows searched by the query.
        // This value will be either the maximum query count plus one (ie. ItemsPerPage * PageIndexCount + 1) or the total number of rows
        // that match the query criteria if the maximum number of rows is not available.
        // The QueryLimit value can be used to determine whether additional pages of data are available beyond the current PageIndexCount.
    },
}
