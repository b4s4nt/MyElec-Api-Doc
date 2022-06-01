interface GetDiaryARequest {
    "connectid" : string,
    "customerid" : string,
    "date" : Date,//DateTime,
    "pagecontrol" : {
        //PageControl,
        "SelectedPage" :  number, //int,
        "ItemsPerPage" :  number, //int,
        "PageIndexCount" :  number, //int,

    }
}
//The date column is an optional input parameter.  If no date value is passed, all diary entries for the customer will be returned.