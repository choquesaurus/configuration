export interface IProjects {
    id          : string;
    name        : string;
    priority    : number;
    description : string;
    deliverydate: string;
}

export interface Dtoprojects {
    id            : string;
    name?         : string;
    priority?     : number;
    description?  : string;
    deliverydate? : string;
}
