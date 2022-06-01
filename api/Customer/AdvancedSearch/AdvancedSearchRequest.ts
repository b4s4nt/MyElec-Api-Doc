interface AdvancedSearchRequest {
    "connectid": string,
    "customersearch": string,
    "abbreviationsearch": string,
    "namesearch": string,
    "citysearch": string,
    "postalcodesearch": string,
    "internaluse1": string,
    "internaluse2": string,
    "internaluse3": string,
    "pagecontrol": {
        "SelectedPage": number,//int,
        "ItemsPerPage": number,//int,
        "PageIndexCount": number,//int,
    },
}

//The customersearch parameter supports the use of search tokens &FROM and &TO.
//
// The abbreviationsearch parameter supports the use of search tokens &BEGINS, &FROM and &TO.
//
// The namesearch parameter supports the use of search tokens &CONTAINS, &BEGINS, &FROM and &TO.
//
// The citysearch parameter supports the use of search tokens &BEGINS, &FROM and &TO.
//
// The postalcodesearch parameter supports the use of search tokens &BEGINS, &FROM and &TO.

//Following is the search tokens :

//&BEGINS : Identifies that the search target must begin with the passed string.
// &CONTAINS: Identifies that the search target should contain the passed words.  This is a word search function (&AND and &OR may be used between words).
// &FROM : Filters the search result set to those results greater than or equal to the passed value.
// &TO: Filters the search result set to those results less than or equal to the passed value.