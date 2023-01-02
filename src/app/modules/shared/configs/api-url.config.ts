import { environment } from "src/environments/environment";

export const baseUrl_List = {
    GET_PRODUCT_LIST : `${environment.baseUrl}products`,
    GET_PRODUCT_BY_ID : `${environment.baseUrl}products/`,
    POST_PRODUCT : `${environment.baseUrl}products`,
    DELETE_PRODUCT : `${environment.baseUrl}products/`,
    GET_RETAILERS_LIST : `${environment.baseUrl}retailers`,
    POST_RETAILER_DETAILS : `${environment.baseUrl}retailers`,
    CREATE_INVOICE : `${environment.baseUrl}invoices`
}