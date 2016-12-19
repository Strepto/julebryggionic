 
 import {Rating} from "../models/rating"

 export interface Drikke {
        ID: number;
        Navn: string;
        Bryggeri: string;
        Abv: number;
        Bilde: string;
        Stil: string;
        Pris: number;
        Land: string;
        Rating: Rating[];
        ModifiedDate: Date;
        CreateDate: Date;
    }