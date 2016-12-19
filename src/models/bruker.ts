    import {Rating} from "../models/rating"

    
    export interface Bruker {
        ID: number;
        Navn: string;
        Kodeord: string;
        Rating: Rating[];
        ModifiedDate: Date;
        CreateDate: Date;
    }