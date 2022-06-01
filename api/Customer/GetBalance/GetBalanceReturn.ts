interface GetBalanceReturn {
    "CustomerBalance": {
        "CustomerID": string,
        "Balance1": number,//decimal,
        "Balance2": number,//decimal,
        "Balance3": number,//decimal,
        "Balance4": number,//decimal,
        "Balance5": number,//decimal,
        "Total": number,//decimal,
        "TotalDue": number,//decimal,
        "TotalOverdue": number,//decimal,
        "Currency": string,
        "StopCredit": boolean//logical,
        "AccountingMethod": string,
        "Terms": number,//int,
        "CreditLimit": number,//int,
        "CreditLimitCurrency": string,
        "SettlementTerms": number,//int,
        "SettlementDiscount": number,//decimal,
        "CreditArrangement": string,
        "LastPayment": number,//decimal,
        "LastPaymentDate": Date,//DateTime,
    }
}
