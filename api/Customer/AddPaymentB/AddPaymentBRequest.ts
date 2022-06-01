interface AddPaymentBRequest {
    "connectid": string,
    "customerId": string,
    "paymentTotalLocal": number,//decimal,
    "discountTotalLocal": number,//decimal,
    "paymentCode": string,
    "drawer": string,
    "bankAccount": string,
    "bankBranch": string,
    "bankAccountNumber": string,
    "expires": number,//integer,
    "chequeNumber": number,//integer,
    "reference": string,
    "comment": string,
    "transactionDate": Date,//DateTime,
    "Allocations": {
        "TransactionID": string,
        "Invoice": number,//integer,
        "PaymentAmount": number,//decimal,
        //If the Allocations datatable contains no entries then an unallocated receipt will be processed against the customer.
        // If both a TransactionID and Invoice is provided, then the TransactionID will take precedence.
    },
}
