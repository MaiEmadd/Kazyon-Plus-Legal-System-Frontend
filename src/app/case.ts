export class Case{
    idCase?:number;
    numbercase?:number
    client?:string | undefined;
    against?:string;
    filenumber?:number;
    caseyear?:string;
    category?:string;
    clientstat?:string;
    againststat?:string;
    area?:string;
    sessionRequests?:string[];
    hasAttachment?:boolean;
}