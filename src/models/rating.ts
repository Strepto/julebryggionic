import {Drikke} from "../models/drikke"
import {Bruker} from "../models/bruker"

export interface Rating {
    $id: string;
    ID: number;
    DrikkeID: number;
    Drikke: Drikke;
    BrukerID: number;
    Bruker?: Bruker;
    Bilde: string;
    Karakter: number;
    Nokkelord: string;
    SmakerJul: boolean;
    ModifiedDate: Date;
    CreateDate: Date;
}