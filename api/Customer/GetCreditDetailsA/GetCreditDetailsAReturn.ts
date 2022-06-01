interface GetCreditDetailsAReturn {  //Returns customer credit status details.
    "success": true, //if the customer credit details were retrieved successfully.
    "payload": {
        "CreditType": string,
        "CreditLimit": number,//integer,
        "ReleaseValue": number,//integer,
        "StopCredit": boolean,
    }

}
//Use this API if large customer credit limits are to be returned.
//Note that a listing of Customer credit types can be obtained using the GetCreditTypes service.
// This service is restricted for use by System User based connections to MomentumPro.