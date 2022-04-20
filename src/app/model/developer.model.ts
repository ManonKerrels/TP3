import { Game } from "./game.model";

export interface Developer{
    id: number,
    name: String,
    parentCompany: String,
    creationDate: Date,
    games: Game[]
}

