import { Game } from "./game.model";

export interface Editor{
    id: number,
    name: String,
    parentCompany: String,
    creationDate: Date,
    games: Game[]
}

