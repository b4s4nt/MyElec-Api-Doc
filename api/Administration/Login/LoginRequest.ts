interface LoginRequest {
    "applicationNameSpace": string,
    "loginId": string,
    "password": string,
    "connectsource": string,
    "internaluse1": string,
    "internaluse2": string,
    "internaluse3": string,
}
// If the web services have been configured to use multiple application servers, the application name space can be used to select the appropriate application server. It can also be passed as blank to select the default application server.
//     Valid values for the connectsource include; ‘customergen’ for customer account based connections and ‘remote’ for system user based connections.
//     The connection id returned, is required for all other service methods.