interface GetBalanceBReturn {
    "success ": true, // if the balance were retrieved successfully.
    "payload": {
        "Balance1": number, //decimal,
        "Balance2": number, //decimal,
        "Balance3": number, //decimal,
        "Balance4": number, //decimal,
        "Balance5": number, //decimal,
        "Total": number, //decimal,
        "TotalDue": number, //decimal,
        "TotalOverdue": number, //decimal,
        "Currency": string,
        "StopCredit": boolean,//logical,
        "AccountingMethod": string,
        "Terms": number,//int,
        "CreditLimit": number //Long integer,
        "CreditLimitCurrency": string,
        "SettlementTerms": number,//int,
        "SettlementDiscount": number, //decimal,
        "CreditArrangement": string,
        "LastPayment": number, //decimal,
        "LastPaymentDate": Date,// DateTime,
        "InvoiceDescription": string,
        "InternalUse1": string,
        "InternalUse2": string,
        "InternalUse3": string,
    }
}
