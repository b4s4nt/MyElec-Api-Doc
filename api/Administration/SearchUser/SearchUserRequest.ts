interface SearchUserRequest {
    "connectid": string,
    "search": string,
    "inactivesince": Date,//DateTime
    "pagecontrol": {
        "SelectedPage" : number,  //int
        "ItemsPerPage" : number,  //int
        "PageIndexCount" : number, //int
    },
}

//The search parameter is used to search by external user account username