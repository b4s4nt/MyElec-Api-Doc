interface AddPaymentRequest {
    "connectid": string,
    "InvoiceReceipt": {
        "connectid": string,
        "CustomerId": string,
        "PaymentTotalLocal": number, //decimal,
        "DiscountTotalLocal": number, //decimal,
        "PaymentCode": string,
        "Drawer": string,
        "BankAccount": string,
        "BankBranch": string,
        "BankAccountNumber": string,
        "Expires": number,//integer,
        "ChequeNumber": number,//integer,
        "Reference": string,
        "Comment": string,
        //The PaymentTotalLocal parameter should equal the sum of the Invoice payment amounts in the Allocations datatable.
        // If the PaymentTotalLocal is greater than the sum of the invoice allocations, then an unallocated receipt transaction will also be processed against the customer for the amount overpaid.
    },
    "Allocations": {
        "TransactionID" : string,
        "PaymentAmount" : number, //decimal,
        //If the Allocations datatable contains no entries then
        //an unallocated receipt will be processed against the customer
    },
}
