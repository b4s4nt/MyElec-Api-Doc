interface GetCreditDetailsReturn {
    "success": true, // if the customer credit were retrieved successfully.
    "payload": {
        "CreditType": string,
        "CreditLimit": number,//integer,
        "ReleaseValue": number,//integer,
        "StopCredit": boolean,
    }
}
// Return value
// Note that a listing of Customer credit types can be obtained using the GetCreditTypes service.
// This service is restricted for use by System User based connections to MomentumPro.

